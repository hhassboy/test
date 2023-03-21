import request from '..'

export function requestLogin() {
    return ({
        method:'POST',
        url:'/login'
    })
}