import styled from "@emotion/styled";
import { theme } from "../../../../../theme/theme";

export const SBasicInformation = styled.div`
  &:hover .edit-basic-information {
    display: inline-block;
  }
  position: relative;
  .edit-basic-information {
    position: absolute;
    top: 16px;
    left: 16px;
    display: none;
  }
  .avatar-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    .change-avatar {
      width: 150px;
      padding: 10px;
      text-align: center;
      p {
        border: 1px solid ${theme.palette.secondary[300]};
        padding: 7px 14px;
        display: inline-block;
        margin-top: 5px;
        ${theme.typography.regular.estedaad_regular_14}
        border-radius: 5px;
      }
    }
  }
  .upload-avatar {
    width: 150px;
    height: 150px;
    background-color: #fff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    color: ${theme.palette.secondary[500]};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;

    img {
      width: 100%;
    }
  }

  .personal-button {
    display: flex;
    justify-content: right;

    border-radius: 5px;
  }

  .basic-information-body {
    direction: rtl;
    height: 100%;
    cursor: pointer;
    text-align: right;
    h3 {
    }
    h4 {
      border-bottom: 1px solid ${theme.palette.secondary[300]};
      padding: 15px 0;
    }
    p {
      padding: 15px 0;
    }
  }
`;
