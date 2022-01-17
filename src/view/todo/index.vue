<template>
  <header @keyup.enter="push">
    <input type="text" v-model="content" />
    <button @click="push">add</button>
    <button @click="clearAll">clear all</button>
  </header>

  <article class="group" v-for="(items, group) in todoList">
    <header>{{ group }}</header>

    <section>
      <ul>
        <li
          v-for="(item, i) in items"
          :key="i"
          :class="[item.state ? 'green' : '']"
        >
          <input type="checkbox" v-model="item.state" />
          <span>{{ item.label }}</span>

          <div class="rm-btn" @click="remove(group + '', i)">X</div>
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePersistentState } from "../../lib/persistent-state";
import { c_date } from "../../lib/time";

type TTodoItem = {
  label: string;
  state: boolean; // 1代办、2完成
  aside: string;
};

type TTodo = {
  [date: string]: TTodoItem[];
};

const date = c_date();
let todoList = usePersistentState<TTodo>({}, "todo");

const content = ref("");
function push() {
  const label = content.value.trim();
  if (!label) return;

  if (!todoList[date]) todoList[date] = [];
  todoList[date].push({ label, state: false, aside: "" });

  content.value = "";
}

function remove(g: string, index: number) {
  if (confirm("删除此项？")) {
    todoList[g]?.splice(index, 1);
  }
}

function clearAll() {
  if (confirm("将永久清空，不可恢复？")) {
    Object.keys(todoList).forEach((key) => {
      Reflect.deleteProperty(todoList, key);
    });
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";
header {
  display: grid;
  grid-template-columns: auto 80px 80px;
  align-items: center;
  background-color: var(--graph_bg_thin);
}
.group {
  margin: 20px 0;

  > header {
    padding: 5px 0;
    border-bottom: 1px solid #ccc;

    color: #333;
    font-size: 14px;
    font-weight: bold;
  }

  > section {
    ul {
      list-style: none;
      margin: 10px 0;
      padding: 0;
      li {
        padding: 8px 10px;
        display: grid;
        grid-template-columns: 30px auto 20px;
        align-items: center;

        &:nth-child(odd) {
          background-color: #f6f7f8;
        }

        &.green {
          color: green;
          background-color: rgba(0, 255, 0, 0.1);
        }

        > span {
          margin: 0 10px 0 0;
          color: #333;
          font-size: 14px;
        }

        > .rm-btn {
          display: none;

          border-radius: 50%;

          color: red;
          font-size: 14px;
          font-weight: bold;
          text-align: center;
          cursor: pointer;

          &:hover {
            background-color: red;
            color: #fff;
          }
        }

        &:hover > .rm-btn {
          display: inline-block;
        }
      }
    }
  }
}
</style>
