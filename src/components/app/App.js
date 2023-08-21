import "./App.css";
import RandomCheese from "../randomCheese/RandomCheese";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../user/SignUpForm";
import NavigationBar from "../navigation/Navigation";
import IndividualCheese from "../individualCheese/IndividualCheese";
import CheeseList from "../cheeseList/CheeseList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate, Routes, Route } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: "#fad02d",
        },
    },
});

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <NavigationBar />
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
                    <Route path="/cheeses/:id" element={<IndividualCheese />} />
                    <Route
                        path="/cheeses/type/:type"
                        element={<CheeseList />}
                    />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
