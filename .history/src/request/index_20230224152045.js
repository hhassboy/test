import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:8080',
    timeout:3000,
    headers:{
        'Content-Type':'Access-Control-Allow-Origin'
    }
})

export default instance