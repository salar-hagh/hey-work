import { theme } from "./../../../../../theme/theme";
import styled from "@emotion/styled";

export const SFreelancerCart = styled.div`

  position: relative;
  .delete-profile {
    top: 10px;
    right: 15px;
    position: absolute;
  }
  .profile-img {
    display: flex;
    justify-content: center;
    padding: 15px 0px;
  }
  .profile-name {
    display: flex;
    justify-content: center;
  }

  .profile-specialty {
    padding: 15px;
    display: flex;
    justify-content: space-between;
  }

  .profile-skills {
    display: flex;
    justify-content: center;
    span {
      font-size: 14px;
      margin: 5px;
      padding: 5px;
      border-radius: 3px;
      color: ${theme.palette.primary[500]};
      background-color: ${theme.palette.primary[100]};
    }
  }
  .contact-info {
    margin: 10px;
  }
`;
