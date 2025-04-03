import { useState } from "react";
export default function App2(){
    // return(<h1>This is App2</h1>)
    const [count,setCount]=useState(0);
    const increment =() => {
        setCount(count+1)
    }
    const decrement =() =>{
        setCount(count-1)
    }
    return(
        <div>
            <h2>This is App2</h2>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
        </div>
    );
}
