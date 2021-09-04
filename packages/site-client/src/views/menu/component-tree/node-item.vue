<template>
  <li v-for="(node, i) in list" :key="i" class="node-item">
    <div class="item-content">
      <el-input v-model="node.name" placeholder="name"></el-input>
      <el-input v-model="node.display_name" placeholder="display_name"></el-input>

      <el-select v-model="node.type" placeholder="type">
        <el-option
          v-for="item in typeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <DownButton :list="list" :node="node" @add="addEvent" />
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
import DownButton from './down-button.vue';

export default defineComponent({
  name: 'NodeItem',
  components: { DownButton },
  props: {
    list: {
      type: Array,
      default: () => [] as TreeItem[],
    },
  },
  emits: ['add', 'rm'],
  setup(props, { emit }) {
    const addEvent = (list: TreeItem[], node: TreeItem, type: number) => {
      emit('add', list, node, type);
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
