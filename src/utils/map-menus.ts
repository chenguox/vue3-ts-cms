// import { RouteRecordRaw } from 'vue-router'
// import { IBreadcrumb } from '@/base-ui/breadcrumb'

// let firstMenu: any = null

// export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
//   const routes: RouteRecordRaw[] = []

//   // 1、先去加载默认所有的routes
//   const allRoutes: RouteRecordRaw[] = []
//   const routeFiles = require.context('../router/main', true, /\.ts/)

//   routeFiles.keys().forEach((key) => {
//     const route = require('../router/main' + key.split('.')[1])
//     allRoutes.push(route.default)
//   })

//   // 2、根据菜单获取需要添加的routes
//   const _recurseGetRoute = (menus: any[]) => {
//     for (const menu of menus) {
//       if (menu.type === 2) {
//         const route = allRoutes.find((route) => route.path === menu.url)
//         if (route) routes.push(route)
//         // 获取遍历的菜单中第一个作为mian路径的重定向，通过第一次赋值完不为空避免接下的赋值来实现值获取第一个
//         if (!firstMenu) {
//           firstMenu = menu
//         }
//       } else {
//         _recurseGetRoute(menu.children)
//       }
//     }
//   }

//   _recurseGetRoute(userMenus)

//   return routes
// }

// export function pathMapBreadcrumb(userMenus: any[], currentPath: string) {
//   const breadcrumbs: IBreadcrumb[] = []

//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
//       if (findMenu) {
//         // console.log('menu', menu, 'findMenu', findMenu)
//         breadcrumbs.push({ name: menu.name, path: menu.url })
//         breadcrumbs.push({ name: findMenu.name, path: findMenu.url })
//         return breadcrumbs
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//   }

//   return breadcrumbs
// }

// // pathMapToMenu
// export function pathMapToMenu(userMenus: any[], currentPath: string) {
//   // console.log('currentPath', currentPath)
//   for (const menu of userMenus) {
//     // 如果 type === 1 表示二级菜单，所以需要递归
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
//       if (findMenu) {
//         return findMenu
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       //  拿到菜单对应的 url 来判断是否一致
//       return menu
//     }
//   }
// }

// export { firstMenu }
