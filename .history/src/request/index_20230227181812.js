import axios from 'axios'

const instance = axios.create({
    baseURL:'/api',
    timeout:3000,
    headers:{
        'Content-Type':'application/json'
    }
})
// 请求拦截
instance.interceptors.request.use(

)
// 响应拦截
instance.interceptors.respense.use(

)


export default instance   