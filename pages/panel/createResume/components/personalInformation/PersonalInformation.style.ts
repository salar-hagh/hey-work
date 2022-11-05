import styled from "@emotion/styled";
import { theme } from "../../../../../theme/theme";

export const SPersonalInformation = styled.div`
  &:hover .edit-personal-information {
    display: inline-block;
  }
  position: relative;
  .edit-personal-information {
    position: absolute;
    top: 16px;
    left: 16px;
    display: none;
  }

  .gender-section {
    margin-top: 20px;

    text-align: right;

    p {
      margin-bottom: 10px;
      color: ${theme.palette.secondary[500]};
    }
  }

  .marital-status {
    text-align: right;
    margin-top: 20px;

    p {
      margin-bottom: 10px;
      color: ${theme.palette.secondary[500]};
    }
  }

  .personal-information-body {
    cursor: pointer;
    .personal-information-body-item {
      padding: 10px 0;
      text-align: right;
      h3 {
        color: ${theme.palette.secondary[700]};
        ${theme.typography.medium.estedaad_medium_16}
        margin-bottom: 5px;
      }
      p {
        color: ${theme.palette.secondary[500]};
        ${theme.typography.regular.estedaad_regular_14}
      }
    }
  }
`;
