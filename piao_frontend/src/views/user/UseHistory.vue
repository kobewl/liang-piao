<template>
  <div class="use-history">
    <h1>兑券历史</h1>
    <!-- 显示兑券历史列表 -->
    <div class="history-list">
      <div v-if="historyList.length === 0" class="no-history">
        暂无兑券历史记录
      </div>
      <div v-else>
        <div v-for="item in historyList" :key="item.id" class="history-item">
          <div class="history-info">
            <p><strong>优惠券码:</strong> {{ item.code }}</p>
            <p><strong>兑换时间:</strong> {{ item.date }}</p>
            <p><strong>状态:</strong> {{ item.status }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 模拟历史数据
const historyList = ref([
  { id: 1, code: 'COUPON001', date: '2024-01-15', status: '已使用' },
  { id: 2, code: 'COUPON002', date: '2024-01-10', status: '已使用' }
])
</script>

<style scoped>
.use-history {
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

.history-list {
  margin-top: 20px;
}

.no-history {
  text-align: center;
  color: #999;
  padding: 20px;
}

.history-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

.history-info p {
  margin: 5px 0;
  color: #333;
}
</style>
