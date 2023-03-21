// 防抖
export function debounce(fun,tt) {
    let time = null;
    console.log("参数",tagt);
    return function () {
        if (time) {
            clearTimeout(time);
        }
        time = setTimeout(()=>{
            fun();
        },tt);
    }
}
// 节流
export function throttle(fun,tt) {
    
    let flag = true;
    return function() {
        if (flag) {
            setTimeout(()=>{
                fun();
                flag = true;
            },tt)
        }
        flag = false;
    }
}