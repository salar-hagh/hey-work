import styled from "@emotion/styled";
import { theme } from "../../../theme/theme";

export const SCheckbox = styled.div`
  margin-left: 20px;
  display: inline-block;
  label {
    display: inline-block;
    padding-right: 5px;
    font-size: 14px;
    color: ${theme.palette.secondary[500]};
  }
  input {
    vertical-align: -3px;
  }


`;
