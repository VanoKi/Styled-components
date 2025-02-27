import { useState } from 'react'
import './App.css'
import styled from 'styled-components'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
        <Box>
            <StyledBnt as={StyledLink} href={'#'}>Link Component</StyledBnt>
            <StyledBnt as="a" href={'#'}>Link</StyledBnt>
            <StyledBnt>Hello</StyledBnt>
            <SuperBtn>Bye</SuperBtn>
        </Box>
    </div>
  )
}

export default App

const StyledBnt = styled.button`
  border: none;
  background-color: red;
  padding: 10px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;
`
const StyledLink = styled.a`
  border: none;
  background-color: lightblue;
  padding: 10px;
  color: blue;
  font-size: 2rem;
  font-weight: bold;
`

const SuperBtn = styled(StyledBnt)`
    border-radius: 5px;
    background: yellowgreen;
    color: darkgrey;
`

const Box = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
`
