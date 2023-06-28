import React,{useEffect, useRef} from "react";
import Typed from "typed.js";

const Typing=()=>{
const typingRrf=useRef(null)
    useEffect(()=>{
const option={
    strings:[
        '^2000 React developer',
        '^3000 Frontend developer'
    ],
    typeSpeed:100,
    backSpeed:50,
    backDelay:3000,
    loop:true,
    showCursor:true,
};
const typingInstance=new Typed(typingRrf.current,option);
return()=>{
    typingInstance.destroy();
};
    },[]);
    return(<>
    <div><span ref={typingRrf}/></div>
    </>)
}
export default Typing