import axios from 'axios'
import { Message } from 'element-ui';

const instance = axios.create({
    baseURL:'/api',
    timeout:3000,
    headers:{
        'Content-Type':'application/json'
    }
})
// 请求拦截
// instance.interceptors.request.use((config)=>{

//     return config
// },(error)=>{
//     return Promise.reject(error);
// })
// // 响应拦截
// instance.interceptors.response.use((res)=>{
//     console.log("interceptors",res);
//     if(res.status === 200) {
//         return res.data
//     }else if ([400,600].includes(res.status)) {
//         Message.error(res.data.message)
//     }else {
//         Message.error(res.data.message)
//     }
// },(error)=>{
//     return Promise.reject(error)
// })


export default instance   