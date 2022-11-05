import styled from "@emotion/styled";
import { theme } from "../../../../../theme/theme";

export const SProjects = styled.div`
  .uploded-images {
    text-align: right;
    img {
      width: 100px;
      margin-left: 10px;
      border-radius: 10px;
    }
  }

  .upload-section {
    .upload-box {
      width: 100%;
      padding: 8px;
      background-color: ${theme.palette.primary[100]};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      color: ${theme.palette.primary[300]};
    }

    span {
      margin-bottom: 5px;
      display: block;
      text-align: right;
    }
  }

  .project-body-item {
    text-align: right;
    padding: 10px 0;
    border-bottom: 1px solid ${theme.palette.secondary[300]};

    &:last-child {
      border: none;
    }

    h3 {
      padding-bottom: 10px;
    }
    p {
      padding-bottom: 10px;
      display: inline-block;
    }
    .project-body-item-images {
      padding-bottom: 10px;

      display: flex;
      justify-content: end;
      img {
        width: 50px;
        border-radius: 10px;
        margin-left: 10px;
      }
    }
  }

  .project-add-btn {
    display: flex;
    justify-content: center;
  }

  .project-add-btn {
    margin-top: 20px;

    display: flex;
    justify-content: center;
  }
`;
