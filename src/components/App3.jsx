import {useState} from "react";
export default function App3(){
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [msg,setMsg]=useState();
    const handleSubmit = () =>{
        if(email==="pavan@gmail.com" && password==="143"){
            setMsg("Welcome Pavan")
        }
        else{
            setMsg("Access Dennied")
        }
    }
    return(
        <div>
            <h2>This is App3</h2>
            {msg}
            <p><input type="text" placeholder ="Email address" onChange={(e) => setEmail(e.target.value)}></input></p>
            <p><input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input></p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}