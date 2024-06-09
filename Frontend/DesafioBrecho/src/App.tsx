import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/globalStyle"
import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={defaultTheme}>

          <div>
            <h1>Meu Brechó</h1>
          </div>

      </ThemeProvider>

    </>
  )
}

export default App
