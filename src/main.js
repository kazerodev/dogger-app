import { createApp } from 'vue'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import naive from 'naive-ui'
import router from './router'
import App from './App.vue'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity
    }
  }
})

const app = createApp(App)
app.use(router)
app.use(naive)
app.use(VueQueryPlugin, { queryClient })
app.mount('#app')
