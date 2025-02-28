import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { StyledBnt} from './components/Button.styled'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
        <Box>
            <StyledBnt btnType={'primary'} active>Hello</StyledBnt>
            <StyledBnt btnType={'outlined'} active>Hello</StyledBnt>
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

    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
`