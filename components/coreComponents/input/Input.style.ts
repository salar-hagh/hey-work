import styled from "@emotion/styled";
import { theme } from "../../../theme/theme";

export const SInput = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    text-align: right;
    margin-bottom: 5px;
    color: ${theme.palette.secondary[500]};
  }

  input {
    width: 100%;
    background-color: ${theme.palette.secondary[100]};
    outline: none;
    direction: rtl;
    border-radius: 5px;
    padding: 8px;
  }
`;
