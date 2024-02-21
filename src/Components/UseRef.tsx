import { useState,useRef, useEffect } from "react";
import { usePrevious } from "../hooks/usePrevoius";

export function UseRef(){
    const nameInnputRef = useRef<HTMLInputElement>(null);

    const [count,setCount] = useState(0);

    const previousCount = usePrevious(count);

    // useEffect(() =>{
    //     prevoiusCount.current = count;
    // },[count])


    const submit = ()=>{
        if(nameInnputRef.current){
            nameInnputRef.current.focus();
            console.log("nameInnputRef", nameInnputRef,nameInnputRef.current.value)
        }
    }

    return (
        <div>
            Count value with useState : {count}
            <br />
            prevoiusCount value with useref : {previousCount}

            <button onClick={()=> setCount(count+1)}> click me</button>

            <input ref={nameInnputRef} name="userName" value="lucky"/>
            <button type="button" onClick={submit}>Click me</button>
        </div>
    )

}