<template>
    <t-list :split="true">
      <t-list-item v-for="ticket in ticketList" :key="ticket.id">
        <t-list-item-meta :title="ticket.ticketName" :description="ticket.ticketEsc" />
        <p>回调接口地址: {{ ticket.callbackUrl }}</p>
        <p>回调接口信息: {{ ticket.callbackInfo }}</p>
        <t-button @click="ticketDetailModalVisible = true; currentTicketId = ticket.id">查看发放情况</t-button>
      </t-list-item>
    </t-list>
    <ticket-detail :visible="currentTicketId" :ticketId="currentTicketId" @close="currentTicketId = ''" />
  </template>
  
  <script setup lang="ts">  
  import { ref } from 'vue'
  import TicketDetail from '@/components/TicketDetail.vue'

  type TicktyType = {
    id: string;
    ticketName: string;
    ticketEsc: string;
    callbackUrl: string;
    callbackInfo: string;
  }

  const ticketDetailModalVisible = ref(false)
  const currentTicketId = ref('')

  const ticketList: TicktyType[] = [
    {
      id: '1',
      ticketName: 'liang-piao',
      ticketEsc: '仅限聊呗优惠券',
      callbackUrl: 'www.baidu.com',
      callbackInfo: '{"type":"post","age":18}'
    }
  ]
  </script>