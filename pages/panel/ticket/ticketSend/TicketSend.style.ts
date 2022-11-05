import styled from "@emotion/styled";
import { theme } from "../../../../theme/theme";

export const STcketSend = styled.div`
  padding-top: 50px;

  .ticket-file-wrapper {
    direction: rtl;
  }
  .upload-file {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 200px;
    height: 40px;
    border: 1px solid ${theme.palette.secondary[300]};
    border-radius: 5px;
  }
  .ticket-send-button {
    direction: rtl;
    margin-top: 30px;
    margin-bottom: 5px;
  }
`;
