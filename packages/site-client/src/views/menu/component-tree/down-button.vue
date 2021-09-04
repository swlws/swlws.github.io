<template>
  <article class="down-button">
    <header>
      <el-button @click="show = true">+</el-button>
    </header>
    <section v-show="show" @mouseleave="show = false">
      <div @click="addNode(1)">添加兄弟节点</div>
      <div @click="addNode(2)">添加子节点</div>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core';

export default defineComponent({
  name: 'DownButton',
  props: ['list', 'node'],
  emits: ['add'],
  setup(props, { emit }) {
    const show = ref(false);

    const addNode = (type: number) => {
      emit('add', props.list, props.node, type);
      show.value = false;
    };

    return {
      show,
      addNode,
    };
  },
});
</script>

<style lang="scss" scoped>
.down-button {
  margin: 0px 10px;
  position: relative;

  > header {
    position: relative;
  }

  > section {
    z-index: 1000;
    width: 200px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 #e8e8e8;

    position: absolute;
    top: 50px;
    left: 0px;

    > div {
      color: #666;
      margin: 5px 0;
      padding: 5px;

      transition: color 0.3s;
      &:hover {
        cursor: pointer;
        color: #009afe;
      }
    }
  }
}
</style>
