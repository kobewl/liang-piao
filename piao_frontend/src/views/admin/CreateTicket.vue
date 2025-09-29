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
      <t-form-item label="优惠劵名称" name="ticketName">
        <t-input v-model="formData.ticketName"></t-input>
      </t-form-item>

      <t-form-item label="优惠劵描述" name="ticketEsc">
        <t-input v-model="formData.ticketEsc"></t-input>
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
const COLLEGE_OPTIONS: SelectProps['options'] = [
  {
    label: '学院 A',
    value: 1,
  },
  {
    label: '学院 B',
    value: 2,
  },
  {
    label: '学院 C',
    value: 3,
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
