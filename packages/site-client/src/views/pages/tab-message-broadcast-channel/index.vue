<template>
  <div>
    <h1>Broadcast Channel</h1>

    <section>
      <span>输入：</span>
      <el-row>
        <el-col :span="18">
          <el-input v-model="instr" type="input" />
        </el-col>
        <el-col :span="2"> </el-col>
        <el-col :span="2">
          <el-button @click="sendMsg">发送</el-button>
        </el-col>
      </el-row>
    </section>

    <section>
      <span>输出</span>
      <el-input v-model="outmsg" type="textarea" :rows="10"></el-input>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { ref } from 'vue';

export default defineComponent({
  setup() {
    const instr = ref('');
    const outmsg = ref('');

    let bc = new BroadcastChannel('test');
    bc.onmessage = (ev) => {
      outmsg.value = ev.data;
    };

    const sendMsg = () => {
      bc.postMessage(instr.value);
    };

    return {
      instr,
      outmsg,
      sendMsg,
    };
  },
});
</script>
