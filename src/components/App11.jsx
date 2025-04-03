 import React from "react";
 import { Link } from "react-router-dom";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function App11(){
    const Navigate =useNavigate();
    const handleSubmit =() =>{
        Navigate("/app5");
    };
    return(
        <div>
            <h2>App11 Pavan</h2>
            <button onClick={handleSubmit}>Goto App5</button>
            <p>
                <Link to="/app5">App5</Link>
            </p>
        </div>
    );
}