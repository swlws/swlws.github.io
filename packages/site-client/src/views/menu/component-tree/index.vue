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

    const addEvent = (node: TreeItem) => {
      if (!Array.isArray(node.data)) {
        node.data = [];
      }

      node.data.push({ name: '+', display_name: '+', type: 'string' });
    };

    const removeEvent = (list: TreeItem[], index: number) => {
      console.log(list, index);
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
