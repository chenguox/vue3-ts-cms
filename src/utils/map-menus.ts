import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'
// const files = require.context('@/components/home', false, /\.vue$/)

let firstMenu: any = null

export async function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1、先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // 检索 mian 目录下的文件
  // 在 vite 中通过 import.meta.glob 从文件系统导入多个模块
  const routeFiles = import.meta.glob('@/router/main/*/*/*.ts')
  for (const path in routeFiles) {
    const module = await routeFiles[path]()
    allRoutes.push(module.default)
  }

  // 2.根据菜单获取需要添加的routes
  for (const item of userMenus) {
    for (const subItem of item.children) {
      const route = allRoutes.find((route) => route.path === subItem.menuUrl)
      if (route) routes.push(route)
      // 用于 main 做重定向
      if (!firstMenu) {
        firstMenu = subItem
      }
    }
  }

  return routes
}

/**
 * 通过当前路径映射面包屑路径
 * @param userMenus
 * @param currentPath
 */
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  for (const item of userMenus) {
    for (const subItem of item.children) {
      if (currentPath === subItem.menuUrl) {
        breadcrumbs.push({ name: item.menuName, path: item.menuUrl })
        breadcrumbs.push({ name: subItem.menuName, path: subItem.menuUrl })
      }
    }
  }

  console.log(breadcrumbs)
  return breadcrumbs
}

export { firstMenu }
