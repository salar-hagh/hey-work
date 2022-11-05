import styled from "@emotion/styled";
import { theme } from "../../../../../theme/theme";

export const SCommunicationWays = styled.div`
  &:hover .edit-communication-ways {
    display: inline-block;
  }
  position: relative;
  .edit-communication-ways {
    position: absolute;
    top: 16px;
    left: 16px;
    display: none;
  }
  .communication-ways-body {
    text-align: right;
    cursor: pointer;
    .communication-ways-body-item {
        padding: 10px 0;
      h3 {
        color: ${theme.palette.secondary[700]};
        ${theme.typography.medium.estedaad_medium_16}
        margin-bottom: 5px;
      }
      p {
         ${theme.typography.regular.estedaad_regular_14}
         text-overflow: ellipsis;
         overflow: hidden;
         color: ${theme.palette.secondary[500]};

      }
    a{
     p{
      color: ${theme.palette.primary[300]};
     }

    }
    }
  }
`;
