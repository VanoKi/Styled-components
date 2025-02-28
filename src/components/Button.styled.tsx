import styled, { css } from "styled-components";
import { MyAnimation } from "../styles/Animations/Animations";

type StyledBtnPropsType = {
  color?: string
  fontSize?: string
  primary?: boolean
  outlined?: boolean
}
export const StyledBnt = styled.button<StyledBtnPropsType>`
  border: none;
  /* background-color: red; */
  /* background-color: ${props => props.color || `#fb3f78`}; */
  padding: 10px 20px;
  /* color: snow; */
  /* font-size: 2rem; */
  font-size: ${props => props.fontSize};
  font-weight: bold;
  border-radius: 10px;
  &:hover{
    background-color: #681368;
  }
  /* &:last-child {
    background-color: #304010; */
  /* } */
  ${props => props.outlined && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || '#fb3f78'};
    color: ${props => props.color || '#fb3f78'};
    background-color: transparent;
  `}
  ${props => props.primary && css<StyledBtnPropsType>`
    // primary
    background-color: ${props => props.color || '#fb3f78'};
    color: snow;
  `}
`

// export const SuperBtn = styled(StyledBnt)`
//     border-radius: 5px;
//     background: yellowgreen;
//     color: darkgrey;
//     &:hover{animation: ${MyAnimation} 2s ease-in-out infinite;}
// `