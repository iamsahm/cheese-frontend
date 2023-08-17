import "./App.css";
import RandomCheese from "../randomCheese/RandomCheese";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../user/SignUpForm";
import NavigationBar from "../navigation/Navigation";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate, Routes, Route } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: "#fad02d",
        },
        secondary: {
            main: "#3f51b5",
        },
        text: {
            primary: "#000000",
            secondary: "#ffffff",
        },
        link: "#000000",
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        h1: {
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#333",
            font: "Arial",
        },
        h2: {
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#444",
        },
        h3: {
            fontSize: "1.75rem",
            fontWeight: "bold",
            color: "#555",
        },
        button: {
            color: "#551a8b",
        },
    },
    overrides: {
        MuiButton: {
            hidden: false,
            root: {
                borderRadius: "8px",
                textTransform: "none", // Prevent uppercase transformation
            },
            containedPrimary: {
                color: "white",
            },
        },
    },
    spacing: 8, // Adjust spacing between components globally
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
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
