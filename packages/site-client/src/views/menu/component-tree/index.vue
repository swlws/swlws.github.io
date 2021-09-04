<template>
  <ul>
    <NodeItem :list="list" @add="addEvent" @rm="removeEvent" />
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/runtime-core';
import { data, TreeItem } from './conf';

import NodeItem from './node-item.vue';

export default defineComponent({
  components: { NodeItem },
  setup() {
    const list = reactive(data);

    const addEvent = (list: TreeItem[], node: TreeItem, type: number) => {
      // 兄弟节点
      if (type === 1) {
        list.push({ name: '', display_name: '', type: 'string' });
        return;
      }

      // 子节点
      if (!Array.isArray(node.data)) {
        node.data = [];
      }
      node.data.push({ name: '', display_name: '', type: 'string' });
    };

    const removeEvent = (list: TreeItem[], index: number) => {
      list.splice(index, 1);
    };

    return {
      list,
      addEvent,
      removeEvent,
    };
  },
});
</script>
