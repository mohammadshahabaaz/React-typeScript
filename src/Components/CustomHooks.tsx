import {useLocalStorage} from '../hooks/useLocalStorage';

import { useToggle } from '../hooks/useToggle';

import {useDocumentTitle} from '../hooks/useDocumentTitle';
import {useLogger} from '../hooks/useLogger';

export function CustomHooks() {
    const [state,setState,remove] = useLocalStorage("key2", "value2");

    const [isToggle,setisToggle] = useToggle(false);
    useDocumentTitle("Using Custom hooks");

    useLogger("Custom Hook","log with custom hook")

    console.log(state);

    return (
        <div>
            Local Storage value : {state}
            <div>
                <button onClick={()=>setState("update value1")}>Update storage value</button>
            </div>
            <div>
                <button onClick={()=>remove()}>Remove storage value</button>
            </div>
            <div>
              Toggle hook :  {isToggle ? "true" : "false"}
            </div>
            <div>
                <button onClick={()=>setisToggle()}>Toggle value</button>
            </div>
        </div>
    )
}