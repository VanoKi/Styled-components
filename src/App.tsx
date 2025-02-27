import { useState } from 'react'
import './App.css'
import styled from 'styled-components'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Menu>
        <ul>
          <li><a href="#">menu item 1</a></li>
          <li><a href="#">menu item 2</a></li>
          <li><a href="#">menu item 3</a></li>
        </ul>
      </Menu>
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
  
  &:hover{
    background-color: #681368;
  }
  &:last-child {
    background-color: #304010;
  }
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

    button {
      cursor: pointer;
    }

    ${StyledLink} {
      cursor: zoom-out;
    }

`

const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    li > a {
      color: green;
    }
    li + li {
      margin-left: 20px;
    }
  }
`