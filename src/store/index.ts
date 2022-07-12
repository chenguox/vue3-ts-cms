import { createPinia } from 'pinia'
import useUserStore from './modules/user.ts'
const store = createPinia()

export async function setupStore() {
  const store = useUserStore()
  console.log('执行store1:', store)
  await store.loadLocalLogin()
  console.log('执行store2:', store)
}
export default store
