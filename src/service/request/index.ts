import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { GXRequestInterceptors, GXRequestConfig } from './type'

class GXRequest {
  instance: AxiosInstance
  interceptors?: GXRequestInterceptors

  constructor(config: GXRequestConfig) {
    this.instance = axios.create(config)

    // 保存对应实例的拦截
    this.interceptors = config.interceptors

    // 1、添加所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有实例的拦截器: 请求成功拦截')
        return config
      },
      (err) => {
        // console.log('所有实例的拦截器: 请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有实例的拦截器: 响应成功拦截')
        const data = res.data
        return data
      },
      (err) => {
        // console.log('所有实例的拦截器: 响应失败拦截')
        return err
      }
    )

    // 2、添加实例拦截器(从config中取出对应的实例)
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  // 需要将返回结果类型改为 Promise, 且类型应该是请求者决定，所以使用泛型
  request<T>(config: GXRequestConfig<T>): Promise<T> {
    // 处理成返回一个 promise
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        // 执行请求拦截，执行完将config返回
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          // 将结果 resolve 返回出去
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: GXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: GXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: GXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: GXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default GXRequest
