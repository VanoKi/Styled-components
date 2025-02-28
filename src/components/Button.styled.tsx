import styled, { css } from "styled-components";
import { MyAnimation } from "../styles/Animations/Animations";

type StyledBtnPropsType = {
  color?: string
  fontSize?: string
  btnType: 'primary' | 'outlined'
  active: boolean
}
export const StyledBnt = styled.button<StyledBtnPropsType>`
  border: none;
  padding: 10px 20px;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;
  border-radius: 10px;
  &:hover{
    background-color: #681368;
  }

  ${props => props.btnType === 'outlined' && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || '#fb3f78'};
    color: ${props => props.color || '#fb3f78'};
    background-color: transparent;
    &:hover {
      border-color: blue;
      color: blue;
      background-color: transparent;
    }
  `}
  ${props => props.btnType === 'primary' && css<StyledBtnPropsType>`
    // primary
    background-color: ${props => props.color || '#fb3f78'};
    color: snow;
  `}
  ${props => props.active === true && css<StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px #25252c;
  `}
`
