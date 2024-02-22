import { createContext,useState } from "react";
import { DisplayName } from "./DisplayName";
import { DisplayRollNo } from "./DisplayRollno";

export interface IUserDetailContext {
    name:string;
    rollNo: number | null
}

const initialValue = {
    name : "",
    rollNo:null
}

const user = {
    name:"lucky",
    rollNo:7
}

export const userContext = createContext<IUserDetailContext>(initialValue);

export function UseContextHook(){
    const [userDetails,setUserDetails] = useState(user);

    // console.log(userDetails)

    const updateName = (name:string, rollNo:number)=>{
            setUserDetails({
                ...userDetails,
                name:name,
                rollNo:rollNo
            })
    }

    return(
        <userContext.Provider value={userDetails}>
            <DisplayName/>
            <DisplayRollNo/>
            <button type="button" onClick={()=>updateName("luckyShammi",10)}>Update name</button>

        </userContext.Provider>
    )
}