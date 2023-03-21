export function debounce(fun,tt) {
    let time = null;
    console.log("44545");
    return function () {
        if (time) {
            clearTimeout(time);
        }
        time = setTimeout(()=>{
            fun();
        },tt);
    }
}

export function throttle(fun,tt) {
    let flag = true;
    if (flag) {
        setTimeout(()=>{
            fun();
            flag = true;
        },tt)
    }
    flag = false;
}