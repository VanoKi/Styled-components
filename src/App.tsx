import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { StyledBnt} from './components/Button.styled'
import { myTheme } from './styles/Theme.styled'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
        <Card>

        </Card>
    </div>
  )
}

export default App

const Card = styled.div`
    margin: auto;
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    /* gap: 20px; */
    justify-content: center;
    align-items: center;
    background: #fff;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    border-radius: 15px;

    button {
      cursor: pointer;
    }

    @media ${myTheme.media.tablet} {
      flex-direction: column;
    }
`