import axios from "axios"
//Introduction of progress bars   引入进度条  start:进度条开始  done:进度条结束
import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css";

// create an axios instance
const service = axios.create({
    baseURL: "/mock", // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

service.interceptors.request.use((config) => {
    nprogress.start()
    return config;
},
    (error) => {
        // do something with request error
         console.log('interceptors') // for debug
        console.log(error) // for debug
        return Promise.reject(error)
    })

service.interceptors.response.use(
    (res) => {
        nprogress.done()
        return res.data
    },
    (error) => {
        alert("服务器响应数据失败");
     }
)

export default service