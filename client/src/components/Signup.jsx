import { useState } from "react";

function Signup() 
{
    const [f_name, setFName] = useState("");
    const [l_name, setLName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(event) 
    {
        event.preventDefault();
        setMessage("");

        try 
        {
            const response = await fetch("http://localhost:9000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ f_name, l_name, username, password })
            });

            const data = await response.json();
            setMessage(data.message);

            if (response.ok) {
                setFName("");
                setLName("");
                setUsername("");
                setPassword("");
            }
        } catch (error) 
        {
            setMessage("Could not connect to the server");
        }
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={f_name}
                        onChange={(e) => setFName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={l_name}
                        onChange={(e) => setLName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Signup;