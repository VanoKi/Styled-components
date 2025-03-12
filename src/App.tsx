import './App.css'
import styled from 'styled-components'
import {myTheme} from './styles/Theme.styled'
import photo from './assets/Rectangle 1.png'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <StyledCard>
            <Img src={photo} alt={'photo'}></Img>
            <Title>Headline</Title>
            <SubTitle>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</SubTitle>
            <BtnWrap>
                <Btn >See more</Btn>
                <Btn>Save</Btn>
            </BtnWrap>
        </StyledCard>
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
const Img = styled.img`
    border-radius: 10px;
    width: 280px;
    height: 170px;
`
const Title = styled.h1`
    font-weight: 700;
    font-size: 16px;
    color: #000;
`
const SubTitle = styled.p`
    padding: 0 10px;
    font-weight: 500;
    font-size: 12px;
    line-height: 167%;
    //text-align: justify;
    color: #abb3ba;
`
const BtnWrap = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
`
const Btn = styled.button`
    width: 86px;
    height: 30px;
    border: 2px solid #4e71fe;
    border-radius: 5px;
    color: #4e71fe;
    background: transparent;
    &:hover {
        background: #4e71fe;
        color: #fff;
    }
`