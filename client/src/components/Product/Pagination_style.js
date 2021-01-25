import { colors } from "../utils";
import styled from "styled-components";

const {
  darkColor,
  primaryColor,
} = colors;
export const PaginationStyle = styled.ul`
  ul {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .divLi {
    margin-left: 0.6rem;

    button {
      text-decoration: none;
      padding: 0.26rem;
      color: ${darkColor};
      background: ${primaryColor};
      border: 0.15rem solid ${darkColor};
      border-radius: 0.2rem;
      cursor: pointer;
    }
  }
`;
