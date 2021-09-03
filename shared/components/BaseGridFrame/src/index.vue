<template>
  <article class="bc-grid-frame">
    <header>
      <div>
        <base-field-group :fields="fieldCfgs" @change="fieldValueChange" />
      </div>
      <div>
        <slot />
      </div>
    </header>

    <section>
      <base-grid
        ref="gridRef"
        :columns="columns"
        :loadData="loadData"
        v-model:selection="checkRows"
      />
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from '@vue/runtime-core';
import { FreeObject } from 'axios-business';
import { PlainObject, TListRequestParm } from '~/types/app';

export default defineComponent({
  name: 'BaseGridFrame',
  props: {
    fields: Array,
    columns: Array,
    dataLoader: Function,
    selection: Array,
    sortCfg: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const gridRef = ref('');
    const fieldValue: Ref<any[]> = ref([]);
    const fieldCfgs = ref(props.fields);

    const fieldValueChange = (v: any[]) => {
      fieldValue.value = v;
      (gridRef.value as any).reload();
    };

    const loadData = (param: TListRequestParm) => {
      param.query = fieldValue.value;
      let fn = props.dataLoader;

      let sortCfg = props.sortCfg as FreeObject;
      if (sortCfg.sort) {
        param.sort = sortCfg.sort || '';
        param.order = sortCfg.order || 'asc';
      }

      if (typeof fn !== 'function') return;
      return fn(param);
    };

    const updateRow = (index: number, info: PlainObject) => {
      const ref = gridRef.value as any;
      ref.updateRow(index, info);
    };

    const reload = () => {
      (gridRef.value as any).reload();
    };

    const checkRows = ref([]);
    watch(checkRows, () => {
      emit('update:selection', checkRows.value);
    });

    return {
      fieldCfgs,
      loadData,
      fieldValueChange,
      gridRef,
      updateRow,
      reload,
      checkRows,
    };
  },
});
</script>

<style lang="scss" scoped>
.bc-grid-frame {
  height: 100%;
  display: flex;
  flex-direction: column;

  > header {
    margin: 0px 0px 10px 0px;
    padding: 10px 20px;

    background-color: #fff;
    box-shadow: 0px 0px 10px 0px #e8e8e8;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > section {
    flex: 1;
  }
}
</style>
