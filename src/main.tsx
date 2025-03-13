// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GlobalStyles } from './styles/GlobalStyles/GlobalStyles.tsx'
import { ThemeProvider } from 'styled-components'
import { myTheme } from './styles/Theme.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={myTheme}>
    <App />
    <GlobalStyles></GlobalStyles>
  </ThemeProvider>,
)
