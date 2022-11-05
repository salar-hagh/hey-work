import styled from "@emotion/styled";

export const SFreelancerList = styled.div`
  .search-section {
    width: 100%;
    height: 50px;
    background-color: #fff;
    margin: 30px 0;
    border-radius: 8px;
    /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); */
  }

  .freelancer-body {
  }

  .freelancer-sidebar {
    width: 100%;

    .freelancer-sidebar-section {
      margin-bottom: 10px;
      background-color: #fff;
      padding: 16px;
      border-radius: 8px;

      h3 {
        text-align: right;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 8px;
      }

      .freelancer-sidebar-section-checkboxs {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: flex-end;
      }
    }
  }

  .freelancer-list {
    width: 100%;
    border-radius: 8px;

    .freelancer-card {
      width: 100%;
      height: 200px;
      margin-bottom: 10px;
      background-color: #fff;
      position: relative;
      padding-right: 166px;
      border-radius: 8px;
      .freelancer-card-avatar-wrapper {
        position: absolute;
        right: 16px;
        top: 0;
        height: 100%;
        display: flex;
        align-items: center;
        .freelancer-card-avatar {
          width: 150px;
          height: 150px;
          background-color: #333;
          border-radius: 8px;
        }
      }

      .freelancer-card-body {
        text-align: right;
        padding: 16px;

        position: relative;
        .freelancer-card-price {
          position: absolute;
          left: 16px;
          top: 30px;
        }

        .freelancer-card-button {
          position: absolute;
          left: 16px;
          top: 85px;
        }
      }
    }
  }
`;
