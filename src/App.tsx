import './App.css'
import styled, {css} from 'styled-components'
import {myTheme} from './styles/Theme.tsx'
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
type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType: 'primary' | 'secondary'
    active: boolean
}
const Btn = styled.button<StyledBtnPropsType>`
    width: 86px;
    height: 30px;
    border: 2px solid ${myTheme.colors.accent};
    border-radius: 5px;
    color: ${myTheme.colors.accent};
    background: transparent;
    &:hover {
        background: ${myTheme.colors.accent};
        color: #fff;
    }
`