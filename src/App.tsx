import { useState } from 'react'
import './App.css'
import styled from 'styled-components'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <StyledBnt>Hello</StyledBnt>
    </div>
  )
}

export default App

const StyledBnt = styled.button`
  border: none;
  background-color: red;
  padding: 10px;
  border-radius: 5px;
  color: snow;
  font-size: 2rem;
`