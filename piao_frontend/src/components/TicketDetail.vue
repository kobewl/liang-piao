<template>
  <t-button @click="visible = true">查看发放情况</t-button>
  <t-dialog
    v-model:visible="visible"
    header="提示"
    body="自定义底部按钮，直接传入文字"
    cancel-btn="关闭"
    :confirmBtn="null"
    :on-close="close1"
  />
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
  ticketId: {
    type: String,
    default: '',
  },
  visible1: {
    type: Boolean,
    default: false,
  },
})

onMounted(async () => {
  console.log(props)
})

const visible1 = ref(props.visible1)

const close1 = () => {
  visible1.value = false
}
</script>
