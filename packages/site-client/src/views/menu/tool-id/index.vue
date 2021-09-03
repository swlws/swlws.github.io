<template>
  <div class="page">
    <el-tabs v-model="activeName">
      <el-tab-pane label="UUID" name="uuid">
        <uuid />
      </el-tab-pane>

      <el-tab-pane label="ObjectId" name="object-id">
        <ObjectId />
      </el-tab-pane>

      <el-tab-pane label="随机字符串" name="random">
        <random />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { ref } from 'vue';
import uuid from './uuid.vue';
import ObjectId from './object-id.vue';
import random from './random.vue';

export default defineComponent({
  components: { uuid, ObjectId, random },
  setup() {
    const activeName = ref('uuid');

    return {
      activeName,
    };
  },
});
</script>

<style lang="scss" scoped>
.page {
  margin: 0px 10%;
}
</style>
