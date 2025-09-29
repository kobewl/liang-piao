<template>
  <t-space direction="vertical" size="large">
    <t-form
      ref="form"
      :data="formData"
      reset-type="initial"
      colon
      @reset="onReset"
      @submit="onSubmit"
    >
      <t-form-item label="优惠劵" name="ticketId">
        <t-select v-model="formData.ticketId" :options="TICKET_OPTIONS" clearable></t-select>
      </t-form-item>
      <t-form-item label="优惠劵数量" name="ticketNum">
        <t-input-number autoWidth v-model="formData.ticketNum" max="10" min="1" />
      </t-form-item>

      <t-form-item label="有效期" name="ticketTime">

      </t-form-item>

      <t-form-item label="回调接口地址" name="callbackUrl">
        <t-input v-model="formData.callbackUrl"></t-input>
      </t-form-item>

      <t-form-item label="回调接口信息" name="callbackInfo">
        <t-textarea v-model="formData.callbackInfo" placeholder="JSON 字段" clearable />
      </t-form-item>

      <t-form-item>
        <t-space size="small">
          <t-button theme="primary" type="submit">提交</t-button>
          <t-button theme="default" variant="base" type="reset">重置</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import {
  MessagePlugin,
  FormProps,
  CheckboxGroupProps,
  SelectProps,
  CascaderProps,
} from 'tdesign-vue-next'
const formData: FormProps['data'] = reactive({
  ticketName: '',
  ticketEsc: '',
  callbackUrl: '',
  callbackInfo: '',
})
const courseOptions: CheckboxGroupProps['options'] = [
  {
    label: '语文',
    value: '1',
  },
  {
    label: '数学',
    value: '2',
  },
  {
    label: '英语',
    value: '3',
  },
]
const TICKET_OPTIONS: SelectProps['options'] = [
  {
    label: '面试鸭100积分充值券',
    value: 1,
  },
  {
    label: '编程导航Vip会员充值券',
    value: 2,
  },
]
const ADDRESS_OPTIONS: CascaderProps['options'] = [
  {
    label: '江苏',
    value: 1,
    children: [
      {
        label: '南京市',
        value: 300,
      },
    ],
  },
  {
    label: '上海',
    value: 2,
    children: [
      {
        label: '徐汇区',
        value: 400,
      },
    ],
  },
  {
    label: '四川',
    value: 3,
    children: [
      {
        label: '成都市',
        value: 500,
      },
    ],
  },
]
const onReset: FormProps['onReset'] = () => {
  MessagePlugin.success('重置成功')
}
const onSubmit: FormProps['onSubmit'] = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success('提交成功')
  } else {
    console.log('Errors: ', validateResult)
    MessagePlugin.warning(firstError)
  }
}
</script>
