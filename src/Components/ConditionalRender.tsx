import { useEffect, useState } from "react";
// import { useQuery } from "react-query";

const fetchUsers = async() =>{
    await new Promise((resolve, reject) => setTimeout(resolve,5000));
    return "Succesful";
    // throw new Error("getting error in fetching users");
}

export function ConditionalRender (){

    const [data, setData] = useState("");
    const[isError,setIsError] = useState(false);
    const [isFetching,setIsFetching] = useState(false);

    useEffect(() =>{
        const fetchingData = async () =>{
            setIsFetching(true);
            try {
                const data = await fetchUsers();
                setData(data);
                setIsError(false);
            }catch (e) {
                setIsError(true)
            }finally{
                setIsFetching(false);
            }

        };
        fetchingData()
    },[])


    const renderData = () => {
        if(isFetching){
            console.log("isFetching",isFetching);
            return <h2>Data is fetching</h2>
            
        }else if(isError){
            console.log("isError",isError);
            return <h2>Error in fetching Data</h2>
            
        }else if(data){
            console.log("Data",data);
            return <h2>{data}</h2>
            
        }else{
            console.log("no data");
            return <h2> No data</h2>
            
        }
    }


    return (
        <div>
            {renderData()}
            {isFetching && <div>Loading Data</div>} 
            {isFetching ? <div>Data 1</div> :<div>Data 2</div>}
            {/* {isLogin ? <div>Login Succesfull</div>: <div> Login Failed</div>} */}
        </div>
    )
    
  
}





//using react useQuery try this function too


// const {data,isError, isFetching }= useQuery("fetchUsers",fetchUsers);

//   if(isFetching){
//     return <h2>Data is fetching</h2>
//   }else if(isError){
//     return <h2>Error in fetching Data</h2>
//   }else{
//     return <h2>{data}</h2>
//   }




