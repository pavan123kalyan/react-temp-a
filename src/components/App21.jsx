import React,{useEffect,useState} from "react";
export default function App1(){
    const [count,setCount]=useState(0);
    useEffect(() =>{
        console.log("App21 Mounted");
        return () =>{
            console.log("App21 Unmounted");
        };
    },[]);
    const handleUpdate =() =>{
        setCount(count+1);
        console.log("App21 Updated/reloaded")
    };
    return(
        <div>
            <h2>This is App21</h2>
            <p>
                <button onClick={handleUpdate}>Update</button>
            </p>
            {count}
        </div>
    )
}