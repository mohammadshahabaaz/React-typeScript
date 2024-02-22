import { useContext } from "react";

import {userContext} from './useContextHook';

export function DisplayRollNo(){
    const contextValue = useContext(userContext);
    return <div>Roll no : {contextValue.rollNo}</div>
}