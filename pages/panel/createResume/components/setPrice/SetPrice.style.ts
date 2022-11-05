import styled from "@emotion/styled";
import { theme } from "../../../../../theme/theme";

export const SSetPrice = styled.div`
 
  &:hover .edit-set-price {
    display: inline-block;
  }
  position: relative;
  .edit-set-price {
    position: absolute;
    top: 16px;
    left: 16px;
    display: none;
  }

  .set-price-body {
    text-align: center;
    direction: rtl;
    p {
      background-color: ${theme.palette.primary[100]};
      ${theme.typography.bold.estedaad_bold_14}
      color: ${theme.palette.primary[700]};
      padding: 8px 16px;
      display: inline-block;
      border-radius: 10px;
    }
  }
`;
