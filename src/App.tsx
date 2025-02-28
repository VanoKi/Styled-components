import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { StyledBnt} from './components/Button.styled'
import { myTheme } from './styles/Theme.styled'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
        <Box>
          
        </Box>
    </div>
  )
}

export default App

const Box = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;

    button {
      cursor: pointer;
    }

    @media ${myTheme.media.tablet} {
      flex-direction: column;
    }
`