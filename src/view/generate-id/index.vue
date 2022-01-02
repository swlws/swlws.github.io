<template>
  <article>
    <header>
      <span>UUID-v4</span>
      <button @click="make">刷新</button>
    </header>

    <section>
      <div v-for="v in ids" :key="v">
        {{ v }}
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { v4 } from "uuid";

const ids = ref<string[]>([]);

function make() {
  ids.value.length = 0;
  let len = 10;
  while (len--) {
    ids.value.push(v4());
  }
}

make();
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";

article {
  border: 1px solid #e8e8e8;
  border-radius: 5px;

  header {
    padding: 10px 10px;
    border-bottom: 1px solid #e8e8e8;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > section {
    > div {
      margin: 5px 0;
      padding: 0 10px;

      color: #666;
    }
  }
}
</style>
