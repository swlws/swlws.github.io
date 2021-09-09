<template>
  <div class="md-doc-page">
    <aside>
      <div v-for="(item, i) in navs" :key="i" :class="{ checked: index === i }" @click="index = i">
        {{ item.name }}
      </div>
    </aside>

    <section>
      <div class="markdown-body" v-html="content"></div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from '@vue/runtime-core';
import { ref } from 'vue';
import { PlainObject } from '~/types/app';

const mdMap: PlainObject = import.meta.glob('./md/*.md');

export const navs = Object.keys(mdMap).map((name) => {
  let na = name.slice(name.lastIndexOf('/') + 1, -3);
  return {
    name: na,
    md: mdMap[name],
  };
});

export default defineComponent({
  setup() {
    const index = ref(0);
    const content = ref('');

    watch(
      index,
      async () => {
        console.log(1);
        let item = navs[index.value];
        item.md().then((data: any) => {
          content.value = data.default.html;
          console.log(content.value);
        });
      },
      { immediate: true },
    );

    return {
      navs,
      index,
      content,
    };
  },
});
</script>

<style lang="scss" scoped>
.md-doc-page {
  height: 100%;
  // overflow: hidden;

  display: grid;
  grid-template-columns: 300px 1fr;

  > aside {
    background-color: #fff;
    padding: 10px 20px;
    margin: 0px 10px;

    overflow: auto;

    > div {
      margin: 0px;
      text-align: right;

      &::after {
        content: ' - ';
      }

      &:hover {
        color: #009afe;
        cursor: pointer;
      }

      &.checked {
        color: #009afe;
      }
    }
  }

  > section {
    background-color: #fff;
    padding: 30px 50px;
    margin: 0px 10px;

    overflow: auto;
  }
}
</style>
