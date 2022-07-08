import { createPinia } from 'pinia'
import useUserStore from './user/user.ts'
const store = createPinia()

export function setupStore(){
  const store = useUserStore()
  store.loadLocalLogin()
}
export default store
