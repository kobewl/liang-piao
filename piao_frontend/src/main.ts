import TDesign from 'tdesign-vue-next'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css'
import App from './App.vue'
import router from './router'
import CreateTicket from '@/views/admin/CreateTicket.vue'
import SendTicket from '@/views/admin/SendTicket.vue'
import UseTicket from '@/views/user/UseTicket.vue'
import UseHistory from '@/views/user/UseHistory.vue'
import ManageTicket from '@/views/admin/ManageTicket.vue'

const app = createApp(App)

// 将路由组件添加到已有的路由配置中
router.addRoute({ path: '/create/ticket', component: CreateTicket })
router.addRoute({ path: '/send/ticket', component: SendTicket })
router.addRoute({ path: '/manage/ticket', component: ManageTicket })
router.addRoute({ path: '/use/ticket', component: UseTicket })
router.addRoute({ path: '/use/history', component: UseHistory })

app.use(createPinia())
app.use(router)
app.use(TDesign)

app.mount('#app')
