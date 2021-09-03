<template>
  <article class="base-grid">
    <header>
      <span>共</span>
      <span>{{ total }}</span>
      <span>项</span>
      <i class="el-icon-refresh" @click="reload()"></i>
    </header>

    <section>
      <data-grid
        ref="dgRef"
        :columns="columns"
        :data="data"
        @select="selectEvent"
        @select-all="selectEvent"
        @row-click="(row) => emit('row-click', row)"
        @row-dblclick="(row) => emit('row-db-click', row)"
        @sort-change="({ column, prop, order }) => emit('sort-change', column, prop, order)"
      />
    </section>

    <footer v-if="hasPage">
      <page-ctl
        :total="total"
        v-model:pageNum="pageNum"
        v-model:pageSize="pageSize"
        @change="reload"
      />
    </footer>
  </article>
</template>

<script lang="ts">
import { PlainObject } from './types';
import { defineComponent } from '@vue/runtime-core';
import { initGrid, TLoadData } from './buss';
import DataGrid from './DataGrid.vue';
import PageCtl from './PageCtl.vue';
import { ref } from 'vue';

export default defineComponent({
  name: 'BaseGrid',
  components: { DataGrid, PageCtl },
  props: {
    loadData: Function,
    columns: {
      type: Array,
      default: () => [] as PlainObject,
    },
    hasPage: {
      type: Boolean,
      default: true,
    },
    selection: Array,
  },
  setup(props, { emit }) {
    const { dgRef, total, pageNum, pageSize, data, reload } = initGrid(props.loadData as TLoadData);

    const updateRow = (index: number, row: PlainObject) => {
      if (typeof index !== 'number') {
        throw new Error(`Param 'index' Must Be Number`);
      }

      data.value.splice(index, 1, row);
    };

    const selectEvent = (selection: PlainObject[]) => {
      emit('update:selection', selection);
    };

    return {
      dgRef,
      emit,
      total,
      pageNum,
      pageSize,
      data,
      updateRow,
      reload,
      selectEvent,
    };
  },
});
</script>

<style scoped lang="scss">
.base-grid {
  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: #fff;

  > header {
    color: #333;
    font-size: 14px;
    padding: 5px 10px;

    i {
      font-size: 16px;
      margin: 0px 10px;
      cursor: pointer;
    }
  }

  > section {
    flex: 1;
  }

  > footer {
    text-align: right;
    padding: 8px 20px;
  }
}
</style>
