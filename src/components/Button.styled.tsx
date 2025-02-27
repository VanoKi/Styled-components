import styled from "styled-components";

export const StyledBnt = styled.button`
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

export const SuperBtn = styled(StyledBnt)`
    border-radius: 5px;
    background: yellowgreen;
    color: darkgrey;
`