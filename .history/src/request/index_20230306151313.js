import axios from 'axios'
import { Message } from 'element-ui';
import { Base64 } from 'js-base64'

const instance = axios.create({
    // baseURL: '/api',
    baseURL:'http://localhost:8080',
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json'
    }
})
// 请求拦截
instance.interceptors.request.use((config) => {

    const token = localStorage.getItem('token');
    if (token) {
        // bese64接受的参数account:password
        const encode = Base64.encode(`${token}:`);
        config.headers['Authorization'] = `Basic ${encode}`
    }
    return config
}, (error) => {
    return Promise.reject(error);
})
// 响应拦截
instance.interceptors.response.use((res) => {
    console.log("interceptors", res);
    if (res.status === 200) {
        return res
    } else if ([400, 600].includes(res.status)) {
        Message.error(res.data.message)
    } else {
        Message.error(res.data.message)
    }
}, (error) => {
    return Promise.reject(error)
})


export default instance   