import { useState } from "react";

export function ToogleButton(){
    const [checked, setChecked] = useState(false);

    const toogleButton=()=>{
        setChecked(!checked);
        console.log(checked)
    }

    return (
        <div>
            <input 
            type="checkbox"
            checked={checked}
            onChange={toogleButton}/>
        </div>
    )
}