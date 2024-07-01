import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/globalStyle"
import { defaultTheme } from "./styles/themes/default"
import {BrowserRouter} from 'react-router-dom';
import {Router} from './Router';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
