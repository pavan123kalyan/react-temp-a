import { useState} from "react";
export default function App4(){
    const [user,setUser]=useState({});
    const [msg,setMsg]=useState({});
    const handleSubmit =() =>{
        if(user.email==="pavan@gmail.com" && user.password==="143"){
            setMsg("Welcome pavanuu")
        }
        else{
            setMsg("Access Denied")
        }
    }

    return(
        <div>
            <h2>Pavan App4</h2>
            {msg}
            <p>
                <input type="text" placeholder="Email" onChange={(e) => setUser({...user,email:e.target.value})}></input>
            </p>
            <p>
                <input type="password" placeholder="Password" onChange={(e) => setUser({...user,password:e.target.value})}></input>
            </p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}