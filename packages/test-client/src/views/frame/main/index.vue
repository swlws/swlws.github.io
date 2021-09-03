<template>
  <article class="home-frame">
    <base-menu :data="menuData" />

    <section>
      <router-view></router-view>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import menuData from '@test/data/menus';

export default defineComponent({
  setup() {
    return {
      menuData,
    };
  },
});
</script>

<style lang="scss" scoped>
.home-frame {
  height: 100%;
  display: flex;
  flex-direction: column;

  > aside {
    background-color: #fff;
    padding: 10px;
    margin: 0px 0px 5px 0px;
    color: orange;
    .title {
      font-size: 14px;
    }
    .content {
      color: #999;
      font-size: 14px;
    }
  }

  > section {
    flex: 1;
    overflow: auto;

    box-sizing: border-box;
    padding: 10px;
  }
}
</style>
