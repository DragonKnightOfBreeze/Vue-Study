import axios from "axios"

//NOTE 只能新建实例，哪能进行封装啊
//那么多http请求方法，不可能一个个封装的

const $http = axios.create({
  baseURL: "...",
  timeout: 36000
})

$http.interceptors.request.use(value => {
  console.log("请求成功。")
  console.log(`Url: ${value.url}`);
  console.log(`Params: ${value.params}`)

  //使用情况：
  //其中的一些信息不符合服务器要求
  //每次发送网络请求时，显示加载中动画直到响应成功
  //某些网络请求时（例如登录）必须携带特殊信息

  //拦截之后可能需要再次放行
  return value
}, error => {
  console.error("请求失败。")
  console.error(`Error: ${error}`)
})


$http.interceptors.response.use(value => {
  console.log("响应成功。")
  console.log(`Data: ${value.data}`)
  //拦截之后可能需要再次放行
  return value
}, error => {
  console.error("响应失败。")
  console.error(`Error: ${error}`)
})
