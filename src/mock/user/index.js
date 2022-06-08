import Mock from 'mockjs'

// example 相关
Mock.mock('api/users', 'get', function () {
  return Mock.mock({
    code: '200',
    data: '请求成功',
    'data|3': [
      {
        name: '@cname', // Mock.Random.cname(),
        age: '@integer(20,50)'
      }
    ]
  })
})

// 用户登录
// Mock.mock('/login', function (options) {
//   const username = JSON.parse(options.body).username
//   const data = {}
//   if (username === 'admin') {
//     baseData.code = 200
//     baseData.msg = '登录成功'
//     data.nickName = '超级管理员'
//     data.userName = 'admin'
//     data.userId = 1
//     data.roleId = 1
//     data.token = randomString(100)
//     data.roles = [
//       {
//         roleCode: 'ROLE_admin',
//         roleId: 1,
//         roleName: '超级管理员'
//       }
//     ]
//     baseData.data = data
//   } else if (username === 'editor') {
//     baseData.code = 200
//     baseData.msg = '登录成功'
//     data.nickName = '编辑员'
//     data.userName = 'editor'
//     data.userId = 2
//     data.roleId = 2
//     data.token = randomString(100)
//     data.roles = [
//       {
//         roleCode: 'ROLE_editor',
//         roleId: 2,
//         roleName: '网站编辑人员'
//       }
//     ]
//     baseData.data = data
//   } else {
//     baseData.code = 500
//     baseData.data = ''
//     baseData.msg = '用户名或密码错误'
//   }
//   return Mock.mock(baseData)
// })
