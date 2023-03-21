export default function debounce(fun,tt) {
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