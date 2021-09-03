<template>
  <article class="uuid-wrapper">
    <el-card class="card-item">
      <template #header>
        <el-button @click="makeIds()" type="text">生成</el-button>
        <el-button @click="cy()" type="text">拷贝</el-button>
      </template>

      <section>
        <el-input type="textarea" :rows="10" :model-value="idstr"></el-input>
      </section>
    </el-card>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/runtime-core';

export default defineComponent({
  setup() {
    return {
      ...uuidV4(),
    };
  },
});

import { reactive } from 'vue';
import { lib, string } from 'weblibext';
import { ElMessage } from 'element-plus';

function uuidV4() {
  let ids: string[] = reactive([]);

  const doMake = () => {
    let res: string[] = new Array(10).fill('');
    return res.map((v) => string.makeRandom());
  };

  const makeIds = (type: string) => {
    ids.length = 0;
    ids.push(...doMake());
    console.log(ids);
  };

  const idstr = computed(() => {
    return ids.join('\n');
  });

  const cy = () => {
    let v = idstr.value;
    if (!v) {
      ElMessage.warning('内容为空');
      return;
    }

    lib.copyToClipboard(v);
    ElMessage.success('已拷贝至粘贴板');
  };

  return {
    idstr,
    makeIds,
    cy,
  };
}
</script>

<style lang="scss" scoped>
.uuid-wrapper {
  display: flex;

  > .card-item {
    margin: 10px;
    width: 400px;
  }
}
</style>
