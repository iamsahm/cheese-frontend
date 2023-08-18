import './App.css';
import './App.css';
import {RandomCheese} from '../randomCheese/RandomCheese'
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../user/SignUpForm'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

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
});

// const theme = {
//   fg: '#FFAB00',
//   bg: 'white',
//   };

// const invertTheme = ({ fg, bg }) => ({
//   fg: bg,
//   bg: fg,
//   });    

// const StyledButton = styled(Button)`
// color: ${(props) => props.theme.fg};
// border: 2px solid ${(props) => props.theme.fg};
// background: ${(props) => props.theme.bg};
// font-size: 1em;
// margin: 1em;
// padding: 0.25em 1em;
// border-radius: 5px;
// `;

function App() {
  return (
    <ThemeProvider theme = {themeOptions}>
      <CssBaseline/>
      <Routes>
          <Route path='/'  element={<RandomCheese navigate={ useNavigate() }/>}/>
          <Route path='/login'  element={<LoginForm  navigate={ useNavigate() }/>}/>
          <Route path='/signup' element={<SignUpForm navigate={ useNavigate() }/>}/>
        </Routes>
    </ThemeProvider>    
  );
}

export default App;
