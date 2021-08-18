import { defineConfig } from 'vite';
import { useBasic, useCss, usePlugins, useBuild } from './base.config';
import path from 'path';

// 客户端名称
const CLIENT_NAME = 'site-client';

export default defineConfig({
  ...useBasic(),
  css: useCss(),
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '..', 'shared'),
      '@site': path.resolve(__dirname, '..', 'packages', CLIENT_NAME, 'src'),
    },
  },
  plugins: usePlugins(),
  build: useBuild(CLIENT_NAME),
  server: {
    host: '0.0.0.0',
    port: 8081,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://192.168.1.2:3000',
        changeOrigin: true,
      },
    },
  },
});
