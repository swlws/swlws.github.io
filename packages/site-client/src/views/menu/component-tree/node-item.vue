<template>
  <li v-for="(node, i) in list" :key="i" class="node-item">
    <div class="item-content">
      <el-input v-model="node.name"></el-input>
      <el-input v-model="node.display_name"></el-input>

      <el-select v-model="node.type" placeholder="选择类型">
        <el-option
          v-for="item in typeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-button @click="addEvent(node)">+</el-button>
      <el-button @click="removeEvent(list, i)">-</el-button>
    </div>

    <ul v-if="Array.isArray(node.data)">
      <node-item :list="node.data" @add="addEvent" @rm="removeEvent" />
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { TreeItem, typeOptions } from './conf';

export default defineComponent({
  name: 'NodeItem',
  props: {
    list: {
      type: Array,
      default: () => [] as TreeItem[],
    },
  },
  emits: ['add', 'rm'],
  setup(props, { emit }) {
    const addEvent = (node: TreeItem) => {
      emit('add', node);
    };
    const removeEvent = (list: TreeItem[], index: number) => {
      emit('rm', list, index);
    };
    return {
      addEvent,
      removeEvent,
      typeOptions,
    };
  },
});
</script>

<style lang="scss" scoped>
.node-item {
  margin: 10px 0px;
}

.item-content {
  display: flex;

  .el-input {
    width: 300px;
    margin: 0px 10px;
  }

  .el-button {
    margin: 0px 10px;
  }
}
</style>
