interface IProps{
    name:string;
}

function Welcome (props:IProps){
    const {name} = props
    return <>Welcome {name}</>
}

export default Welcome;