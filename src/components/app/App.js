import "./App.css";
import RandomCheese from "../randomCheese/RandomCheese";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../user/SignUpForm";

import { useNavigate, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<RandomCheese navigate={useNavigate()} />}
                />
                <Route
                    path="/login"
                    element={<LoginForm navigate={useNavigate()} />}
                />
                <Route
                    path="/signup"
                    element={<SignUpForm navigate={useNavigate()} />}
                />
            </Routes>
        </div>
    );
}

export default App;
