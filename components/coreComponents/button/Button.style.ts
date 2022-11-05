import styled from "@emotion/styled";
import { theme } from "../../../theme/theme";

export const SButton = styled.button`
  border: none;
  background-color: ${theme.palette.primary[300]};
  color: ${theme.palette.white};
  border-radius: 5px;
  padding: 7px 20px;
  display: inline-flex;
  cursor: pointer;
  span {
    width: 100%;
    text-align: center;
  }
  img {
    width: 40px;
  }
`;
