import { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";

function App() 
{
    const [view, setView] = useState("signup");

    return (
        <div>
            <h1>ICSI 418Y - PA2</h1>
            <div>
                <button onClick={() => setView("signup")}>Signup</button>
                <button onClick={() => setView("login")}>Login</button>
            </div>
            <hr />
            {view === "signup" ? <Signup /> : <Login />}
        </div>
    );
}

export default App;