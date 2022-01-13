<template>
  <header @keyup.enter="push">
    <input type="text" v-model="content" />
    <button @click="push">add</button>
    <button @click="clearAll">clear all</button>
  </header>
  <ul>
    <li v-for="(item, i) in todolist" :key="i">
      <span>{{ i + 1 }}</span>
      <span>{{ item.label }}</span>
      <span>{{ item.date }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { usePersistentState } from "../../lib/persistent-state";
import { date } from "../../lib/time";
const state = usePersistentState({ todo: [] });
const todolist = state.todo;

const content = ref("");
function push() {
  const label = content.value.trim();
  if (!label) return;

  todolist.push({ label, date: date() });
  content.value = "";
}

function clearAll() {
  if (confirm("确定清空")) {
    todolist.length = 0;
  }
}

const groupByDateList = computed(() => {
  return;
});
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
header {
  display: grid;
  grid-template-columns: auto 80px 80px;
  align-items: center;
  background-color: var(--graph_bg_thin);
}
ul {
  list-style: none;
  margin: 10px 0;
  padding: 0;
  li {
    padding: 8px 0;
    &:nth-child(odd) {
      background-color: rgba(0, 0, 0, 0.1);
    }

    > span {
      margin: 0 10px 0 0;
    }
  }
}
</style>
