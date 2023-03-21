export default function debounce(fun,tt) {
    let time = null;
    return function () {
        if (time) {
            clearTimeout(time);
        }
        time = setTimeout(()=>{
            fun();
        },tt);
    }
}