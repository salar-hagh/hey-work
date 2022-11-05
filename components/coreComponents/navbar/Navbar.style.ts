import styled from "@emotion/styled";
import { theme } from "../../../theme/theme";
 
export const SNavbar = styled.div`
  width: 100%;
  background-color: ${theme.palette.secondary[700]};
  box-shadow: 0px 3px 5px #ddd;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  .user-profile {
    display: flex;
    align-items: center;
    position: relative;
    color: ${theme.palette.white};
    .user-avatar {
      background-color: #aaa;
      border-radius: 8px;
      width: 40px;
      height: 40px;
      margin-left: 8px;
      img {
        border-radius: 8px;
        width: 100%;
    height: 100%;
      }
    }
    .user-profile-nav {
      position: absolute;
      right: 0;
      top: 120%;
      width: 100%;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0px 3px 5px #ddd;
      z-index: 9991;
      ul {
        li {
          text-align: right;
          a {
            padding: 8px;
            border-bottom: 1px solid #ddd;
            display: block;
          }
        }
      }
    }
  }
  .navbar-menu {
    nav {
      ul {
        display: flex;
        flex-direction: row-reverse;

        li {
          margin-left: 20px;
          a {
            padding: 5px 10px;
            color: ${theme.palette.white};
          }
        }
      }
    }
  }
`;
