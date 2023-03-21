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
    console.log("111",flag);
    return function() {
        if (flag) {
            setTimeout(()=>{
                fun();
                console.log("222",flag);
                // fun.call(this);
                flag = true;
            },tt)
        }
        flag = false;
    }
}