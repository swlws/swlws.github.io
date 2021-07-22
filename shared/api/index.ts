import { ApiModule, createApis } from 'axios-business';
import { getAppName } from '../tool/env';

const cache = new Map();

type Module = Record<
  string,
  {
    [key: string]: any;
  }
>;

function getAppApi(name: string): Module {
  switch (name) {
    case 'test-client':
      return import.meta.globEager('./test-client/*.ts');
    default:
      throw new Error(`Project Name (${name}) Is Illegal`);
  }
}

export function useApiModule() {
  const name = getAppName();

  if (cache.has(name)) {
    return cache.get(name);
  }

  let ms = getAppApi(name);
  if (!ms) return {};

  let apis: Record<string, ApiModule> = {};
  Object.keys(ms).forEach((fileName) => {
    const arr: string[] = fileName.split('/');
    const moduleName = arr[arr.length - 1].replace('.ts', '');
    if (!moduleName) return;

    const componentConfig = ms[fileName];
    const defaultExport = componentConfig.default;
    if (!defaultExport) return;

    apis[moduleName] = defaultExport;
  });

  let funcs = createApis({
    modules: apis,
  });

  cache.set(name, funcs);

  return funcs;
}

export type HttpResponse = {
  r0: number;
  r1: string;
  res?: any;
};
