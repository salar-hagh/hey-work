import styled from "@emotion/styled";
import { theme } from "../../../theme/theme";

interface SContent {
  background?: string;
}

export const SContent = styled.div<SContent>`
  background-color: ${(props) => props.background || theme.palette.white};
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 20px;
  overflow: hidden;
  h2 {
    text-align: right;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .content-buttons {
    display: flex;
    margin-top: 10px;
    button {
      margin-right: 5px;
    }
  }
`;
