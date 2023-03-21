import request from '..'

export function requestLogin(data) {
    return request({
        method:'POST',
        url:'/login',
        data:{
            "account": data.account,
            "password":data.password
        }
    })
}