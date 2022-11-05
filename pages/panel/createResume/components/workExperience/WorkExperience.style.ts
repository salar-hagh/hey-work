import styled from "@emotion/styled";
import { theme } from "../../../../../theme/theme";

export const SWorkExperience = styled.div`
  .work-experience-list {
    .edit-work-experience{
      padding: 20px 0;
      border-bottom: 1px solid ${theme.palette.secondary[300]};

    }
    .work-experience-item {
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

      text-align: right;
      padding: 20px 0;
      border-bottom: 1px solid ${theme.palette.secondary[300]};
      cursor: pointer;
      h3 {
        font-size: 18px;
        font-weight: 700;
      }
      h4 {
        font-size: 16px;
        font-weight: 500;
      }
      p {
        font-size: 14px;
        font-weight: 300;
      }
      &:first-child {
        padding-top: 10px;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }

  .add-work-experience {
    margin-top: 20px;
    border-top: 1px solid ${theme.palette.secondary[300]};
    padding-top: 10px;

    .checkbox-wrapper {
      height: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
      padding-top: 16px;
    }
  }

  .work-experience-add-btn{
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  
`;
