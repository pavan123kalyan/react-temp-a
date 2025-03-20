import { useState } from "react";

export default function App4() {
    const [user, setUser] = useState({ email: "", password: "" });
    const [msg, setMsg] = useState("");

    const handleSubmit = () => {
        if (user.email === "pavan@gmail.com" && user.password === "1234") {
            setMsg("Welcome kalyan");
        } else {
            setMsg("Access Denied");
        }
    };

    return (
        <div>
            <h3>This is App4</h3>
            <p>{msg}</p>
            <p>
                <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
            </p>
            <p>
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
            </p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}