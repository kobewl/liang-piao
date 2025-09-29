/// <reference types="vite/client" />

// 为Vue单文件组件提供类型声明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}