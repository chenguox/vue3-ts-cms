import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router' 'vue-router'

export function mapMenusToRoutes(userMenus: any[]):RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1、先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // 检索 mian 目录下的文件
  const routeFiles = require.context('../router/main',true,/\.ts/)
  console.log('routeFiles:',routeFiles);
  routeFiles.keys().forEach(key=>{
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  for(const item of userMenus){
    const subItem = item.children
  }
}

/**
 * 通过当前路径映射面包屑路径
 * @param userMenus
 * @param currentPath
 */
// export function pathMapBreadcrumbs(userMenus: any[], currentPath: string){
//   const breadcrumbs: IBreadcrumb[] = []
//   pathMapToMenu(userMenus, )
// }

// export function pathMapToMenu()
