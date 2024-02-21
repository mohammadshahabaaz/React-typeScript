import { count } from "console";
import { Component, useEffect, useState } from "react";

interface IProps {
    initialValue: number
}
interface IState {
    count: number,
    hideComponent: boolean
}

export class LifecycleMethod extends Component<IProps,IState>{

   state: Readonly<IState>={
    count: this.props.initialValue,
    hideComponent: false

   }

    
    // componentDidMount(): void {
    //     console.log("componentDidMount called");

    //     this.setState({count: this.state.count + 1});
    // }

    // componentWillReceiveProps(nextProps: IProps): void {
    //     console.log("componentWillReceiveProps called")
    // }

    // componentDidUpdate(prevProps:IProps, prevState: IState): void {
    //     console.log("componentDidUpdate called",prevProps,prevState);
    // }
    // shouldComponentUpdate(nextProps: IProps, nextState:IState): boolean {
    //     console.log("shouldComponentUpdate called",nextProps,nextState);
    //     return true;
    // }

    increment = () => {
        this.setState({
            count: this.state.count +1,
            hideComponent: true
        })
    }

    render(){
        return (
            <div>
                <h2> Increment the value : {this.state.count}</h2>
                <button type="button" onClick={this.increment}>Increment</button>

                <h2>{ !this.state.hideComponent && <Information/>}</h2>
            </div>
        )
    }

     

}

export class Information extends Component{
    componentWillUnmount(): void {
        console.log("componentWillUnmount called");

        //cleanUp phases
    }
    render(){
        return (
            <div>
                information of unmounted Component
            </div>
        )
    }
}


export function LifecycleMethodWithFunction(props:IProps){
    const [count, setCount] = useState(props.initialValue)

    // only one time componentDidMount
    useEffect(()=>{

        console.log("one time UseEffect , is like ComponentDidMount Component")
        // setCount((count)=>count+1)
        setCount(count+1)
    },[])
    //Will get updated, is like ComponentDidUpdate - > When count value changed
    useEffect(()=>{
        console.log("useEffect   called when count value is changed, works like ComponentDidUpdate Component")
        return ()=>{
            console.log("useEffect clean up pahse")
        }
    },[count])

    //Everytime call

    useEffect(()=>{
        console.log("useEffect called Everytime")
    })

    const increment = ()=>{
        setCount(count+1)
    }

    return(
        <>
        <h1>Testing with Function Component</h1>

        <h2> Current value {count}</h2>
        <button type="button" onClick={increment}>Increment</button>
        </>
    )
}

