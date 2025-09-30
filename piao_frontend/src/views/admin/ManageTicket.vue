<template>
    <t-list :split="true">
      <t-list-item v-for="ticket in dataList" :key="ticket.ticketName">
        <t-list-item-meta :title="ticket.ticketName" :description="ticket.ticketEsc" />
        <p>回调接口地址: {{ ticket.callbackUrl }}</p>
        <p>回调接口信息: {{ ticket.callbackInfo }}</p>
        <t-button>查看发放情况</t-button>
      </t-list-item>
    </t-list>
    <ticket-detail />
  </template>
  
  <script setup lang="ts">  
  import { ref } from 'vue'
  import TicketDetail from '@/components/TicketDetail.vue'

  type TicktyType = {
    ticketName: string;
    ticketEsc: string;
    callbackUrl: string;
    callbackInfo: string;
  }

  const dataList: TicktyType[] = [
    {
      ticketName: 'liang-piao',
      ticketEsc: '仅限聊呗优惠券',
      callbackUrl: 'www.baidu.com',
      callbackInfo: '{"type":"post","age":18}'
    }
  ]
  </script>