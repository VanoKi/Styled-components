import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { StyledBnt, SuperBtn } from './components/Button.styled'
import { StyledLink } from './components/StyledLink.styled'
import { Menu } from './components/Menu.styled'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Menu>
        <ul>
          <li><a href="#">menu item 1</a></li>
          <li><a href="#">menu item 2</a></li>
          <li><a href="#">menu item 3</a></li>
        </ul>
      </Menu> */}
        <Box>
            {/* <StyledBnt as={StyledLink} href={'#'}>Link Component</StyledBnt>
            <StyledBnt as="a" href={'#'}>Link</StyledBnt> */}
            <StyledBnt color='green'
                      fontSize={'20px'}
              >Hello</StyledBnt>
            <StyledBnt color='red'>Hello</StyledBnt>
            <StyledBnt fontSize={'30px'}>Hello</StyledBnt>
            {/* <SuperBtn>Bye</SuperBtn> */}
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

    ${StyledLink} {
      cursor: zoom-out;
    }

    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
`