<template>
  <div>
    <h1>Service Worker</h1>
    <div>每一个Tab页认为是一个client，通过ServiceWorker向每个客户端广播消息</div>

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

    const sendMsg = () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.controller?.postMessage(instr.value);
      }
    };

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./tab-message.sw.js').then((data) => {
        console.log('Service Worker注册成功');
      });

      navigator.serviceWorker.addEventListener('message', (ev) => {
        outmsg.value = ev.data;
      });
    } else {
      console.log('浏览器不支持 serviceWorker');
    }

    return {
      instr,
      outmsg,
      sendMsg,
    };
  },
});
</script>
