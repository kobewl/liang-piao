<template>
  <div class="use-ticket">
    <h1>兑换优惠券</h1>
    <!-- 这里可以添加表单元素 -->
    <form @submit.prevent="submitForm">
      <div>
        <label for="ticketCode">优惠券码:</label>
        <input id="ticketCode" v-model="ticketCode" type="text" placeholder="请输入优惠券兑换码" />
      </div>
      <div>
        <label for="userInfo">用户信息:</label>
        <input id="userInfo" v-model="userInfo" type="text" placeholder="请输入用户信息" />
      </div>
      <button type="submit">兑换优惠券</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const ticketCode = ref('')
const userInfo = ref('')

const submitForm = () => {
  console.log('兑换优惠券信息:', {
    code: ticketCode.value,
    user: userInfo.value
  })
  // 这里可以添加实际的兑换逻辑，比如调用 API
}
</script>

<style scoped>
.use-ticket {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

label {
  display: inline-block;
  width: 80px;
  margin-right: 10px;
}

input {
  padding: 5px;
  margin-bottom: 10px;
}

button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #33a06f;
}
</style>
