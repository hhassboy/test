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

export function requestVerify(data) {
    return request({
        method:'POST',
        url:'/verify',
        data:{
            "token":data.token
        }
    })
}