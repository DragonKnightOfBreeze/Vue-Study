import axios from "axios"

//REGION 创建axios实例
const $http = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 3600
})

// async function testGet() {
//   const params = {name: "Windea"}
//   return await $http.get("https://httpbin.org", {params})
// }

export default $http
