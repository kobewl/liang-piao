<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { apiService } from '@/api/service'

const healthData = ref<any>(null)
const helloData = ref<any>(null)
const loading = ref(false)
const error = ref<string | null>(null)

const testHealth = async () => {
  loading.value = true
  error.value = null
  try {
    healthData.value = await apiService.getHealth()
  } catch (err) {
    error.value = '健康检查失败: ' + (err as Error).message
  } finally {
    loading.value = false
  }
}

const testHello = async () => {
  loading.value = true
  error.value = null
  try {
    helloData.value = await apiService.getHello()
  } catch (err) {
    error.value = 'Hello接口调用失败: ' + (err as Error).message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  testHealth()
})
</script>

<template>
  <main>
    <div class="home">
      <h1>🎫 Liang Piao 项目</h1>
      <p class="subtitle">基于 Spring Boot 3.2.x + Vue 3 的全栈应用</p>
      
      <div class="api-test">
        <h2>API 测试</h2>
        
        <div class="test-buttons">
          <button @click="testHealth" :disabled="loading" class="test-btn">
            {{ loading ? '测试中...' : '测试健康检查' }}
          </button>
          <button @click="testHello" :disabled="loading" class="test-btn">
            {{ loading ? '测试中...' : '测试Hello接口' }}
          </button>
        </div>

        <div v-if="error" class="error">{{ error }}</div>

        <div class="results">
          <div v-if="healthData" class="result-card">
            <h3>健康检查结果:</h3>
            <pre>{{ JSON.stringify(healthData, null, 2) }}</pre>
          </div>
          
          <div v-if="helloData" class="result-card">
            <h3>Hello接口结果:</h3>
            <pre>{{ JSON.stringify(helloData, null, 2) }}</pre>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: #42b883;
  text-align: center;
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

.api-test {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.test-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.test-btn {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.test-btn:hover:not(:disabled) {
  background: #369870;
}

.test-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error {
  background: #f8d7da;
  color: #721c24;
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.results {
  margin-top: 1rem;
}

.result-card {
  background: white;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.result-card h3 {
  margin-top: 0;
  color: #333;
}

pre {
  background: #f4f4f4;
  padding: 0.75rem;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 12px;
}
</style>
