import styled from "@emotion/styled";
import { theme } from "../../../../theme/theme";

export const STicketChat = styled.div`
  padding-top: 50px;


.chat-wrapper{
    width: 100%;
    height: 300px;
    background-color: ${theme.palette.secondary[100]};
}

.chat-send-wrapper{
    padding-top: 20px;
}

.chat-send-file{
    margin-top: 10px;
    text-align: right;
    label{
        display: inline-block;
        border: 1px solid ${theme.palette.secondary[300]};
        padding: 8px 50px;
        border-radius: 5px;
    }
}

.chat-send-btn{
margin-top: 30px;
   display: flex;
   justify-content: end;
}

`