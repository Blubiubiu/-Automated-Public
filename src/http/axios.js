import axios from 'axios'
import store from '@/store'


axios.defaults.timeout = 30000;

class HttpRequest {
  constructor() {
    this.queue = {}
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      if (url.split("?")[0] == "backend/trade/trade/pay/course/page/notify") {
        store.commit("changeGlobalLoading", false)
      } else {
        store.commit("changeGlobalLoading", true)
      }
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      const {
        data,
        status
      } = res
      return {
        data,
        status
      }
    }, error => {
      
      return Promise.reject(error)
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
