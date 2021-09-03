<template>
  <article class="uuid-wrapper">
    <el-card class="card-item">
      <template #header>
        <b> V1 </b>
        <el-button @click="makeUuids('v1')" type="text">生成</el-button>
        <el-button @click="cy('v1')" type="text">拷贝</el-button>
      </template>

      <section>
        <el-input type="textarea" :rows="10" :model-value="v1str"></el-input>
      </section>
    </el-card>

    <el-card class="card-item">
      <template #header>
        <b> V4 </b>
        <el-button @click="makeUuids('v4')" type="text">生成</el-button>
        <el-button @click="cy('v4')" type="text">拷贝</el-button>
      </template>

      <section>
        <el-input type="textarea" :rows="10" :model-value="v4str"></el-input>
      </section>
    </el-card>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/runtime-core';
import { ElMessage } from 'element-plus';

export default defineComponent({
  setup() {
    return {
      ...uuidV4(),
    };
  },
});

import { v1, v4 } from 'uuid';
import { reactive } from 'vue';
import { lib } from 'weblibext';

function uuidV4() {
  let v1s: string[] = reactive([]);
  let v4s: string[] = reactive([]);

  const doMake = (fn: () => string) => {
    let res: string[] = new Array(10).fill('');
    return res.map((v) => fn());
  };

  const makeUuids = (type: string) => {
    if (type === 'v1') {
      v1s.length = 0;
      v1s.push(...doMake(v1));
    } else if (type === 'v4') {
      v4s.length = 0;
      v4s.push(...doMake(v4));
    }
  };

  let v1str = computed(() => {
    return v1s.join('\n');
  });
  let v4str = computed(() => {
    return v4s.join('\n');
  });

  const cy = (type: string) => {
    let str = null;
    if (type === 'v1') {
      str = v1str.value;
    } else if (type === 'v4') {
      str = v4str.value;
    }

    if (str) {
      lib.copyToClipboard(str);
      ElMessage.success('已拷贝至粘贴板');
    } else {
      ElMessage.warning('内容为空');
    }
  };

  return {
    v1str,
    v4str,
    makeUuids,
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
