import './App.css'
import styled from 'styled-components'
import {myTheme} from './styles/Theme.styled'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <div>
            <StyledCard>
                <Img></Img>
                <Title>Headline</Title>
                <SubTitle>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</SubTitle>
                <BtnWrap>
                    <Btn></Btn>
                    <Btn></Btn>
                </BtnWrap>
            </StyledCard>
        </div>
    )
}

export default App

const StyledCard = styled.div`
    margin: auto;
    padding: 10px;
    width: 300px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

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
const Img = styled.img``
const Title = styled.h1`
    font-weight: 700;
    font-size: 16px;
    color: #000;
`
const SubTitle = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 167%;
    color: #abb3ba;
`
const BtnWrap = styled.div`
    display: flex;
    gap: 12px;
`
const Btn = styled.button`
    width: 86px;
    height: 30px;
`