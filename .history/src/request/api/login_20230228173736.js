import request from '..'
// 请求登录
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
// 验证token
export function requestVerify(data) {
    return request({
        method:'POST',
        url:'/verify',
        data:{
            "token":data.token
        }
    })
}