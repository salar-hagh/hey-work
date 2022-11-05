import styled from "@emotion/styled";
import { theme } from "../../../theme/theme";

export const STextarea = styled.div`
  .text-area {
    width: 100%;

    height: 150px;
    padding: 10px;
    direction: rtl;
    background-color: ${theme.palette.secondary[100]};
    border-radius: 5px;
    outline: none;
  }

  label {
    text-align: right;
    display: block;
  }
`;
