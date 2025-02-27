import styled from "styled-components";

export const Menu = styled.nav`
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