import { useRef, useState,useEffect } from "react";

export function UseRefExample(){
    const [inputValue, setInputValue] = useState("");

    // const count = useRef(0);
    const previousValue = useRef("");

    useEffect(() =>{
        // count.current = count.current + 1   
        previousValue.current = inputValue
    },[inputValue])

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />

            <h1>Render Count : {previousValue.current}</h1>
        </div>
    )
}