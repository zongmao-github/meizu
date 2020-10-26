import el from "element-ui/src/locale/lang/el";

export function debounce(func, wait, immediate){
    let timer;
    return function (){
        let context = this;
        let args = arguments;
        if (timer){
            clearTimeout(timer);
        }

        if (immediate){
            let callNow = !timer;
            timer = setTimeout( ()=>{
                timer = null;
            },wait);

            if (callNow){
                func.apply(context, args);
            }
        }else{
            timer = setTimeout(()=>{
                func.apply(context, args);
            },wait);
        }
    }
}