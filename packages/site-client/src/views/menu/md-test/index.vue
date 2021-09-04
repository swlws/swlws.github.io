<template>
  <div class="markdown-body" v-html="doc"> </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import TestMd from '@site/assets/doc/test.md';

export default defineComponent({
  setup() {
    return {
      doc: TestMd.html,
    };
  },
});
</script>

<style lang="scss" scoped></style>
