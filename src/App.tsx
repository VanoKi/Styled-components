import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { StyledBnt } from './components/Button.styled'
import { StyledLink } from './components/StyledLink.styled'

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