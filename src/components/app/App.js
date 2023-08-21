
import './App.css';
import {RandomCheese} from '../randomCheese/RandomCheese'
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../user/SignUpForm'
import NavigationBar from "../navigation/Navigation";
import IndividualCheese from "../individualCheese/IndividualCheese";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: "#fad02d",
        },
    },
});


const themeOptions = createTheme({
  palette: {
      mode: 'light',
      primary: {
      main: '#ffab00',
      contrastText: '#ff6f00',
      },
      secondary: {
      main: '#f50057',
      },
  },
  typography: {
    h1: {
      fontSize: '50px',
    },
    h2: {
      fontSize: '18px',
      fontWeight: '600',
    },
    randomCheeseFields: {
      fontSize: '18px',
      fontWeight: '400'
    }
  }
});

themeOptions.typography.h1 = {
  fontSize: '50px',
};



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
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
