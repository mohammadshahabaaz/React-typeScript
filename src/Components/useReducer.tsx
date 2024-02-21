import { useReducer } from "react";

interface IState{
    count :number;
}

const initialState: IState = {
    count : 0
}

function reducer(state: IState,action:any) {

    switch (action.type) {
        case 'increment':
            return {count : state.count + 1}
        case 'decrement':
            return {count : state.count - 1}
        case 'reset':
            return {count : 0}
        default: 
            return {count : state.count}
    }
}

export function UseReducer(){
    const [currentState,dispatch] = useReducer(reducer,initialState);

    return(
        <div>
            <h1>Count using UseReducer : {currentState.count}</h1>
            <button type="button" onClick={()=>dispatch({type:"increment"})}>Increment</button>
            <button type="button" onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
            <button type="button" onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </div>
    )
}