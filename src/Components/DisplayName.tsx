import { useContext } from "react";
import {userContext} from './useContextHook';

export function DisplayName(){
    const contextValue = useContext(userContext);
    return <div>Name : {contextValue.name}</div>

}