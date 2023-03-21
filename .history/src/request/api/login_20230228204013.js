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
// 验证权限
export function permissionValidation(data) {
    return request({
        method:'POST',
        url:'/testVerify',
        Headers:{
            'Authorization':data()
        }
    })
}