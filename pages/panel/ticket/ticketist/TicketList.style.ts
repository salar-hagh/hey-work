 import styled from "@emotion/styled";
import { theme } from "../../../../theme/theme";
export const STicketList = styled.div`
  padding-top: 50px;

  .new-ticket {
    margin: 10px 0px;
    display: flex;
    justify-content: end;
    a {
      border: none;
      background-color: ${theme.palette.primary[300]};
      color: ${theme.palette.white};
      border-radius: 5px;
      padding: 5px 10px;
    }
  }

  .table-wrapper {
    padding: 30px;
  }

  table {
    width: 100%;
    direction: rtl;

    th {
      padding: 25px;
    }
  }

  tbody tr {
    border: 1px solid ${theme.palette.secondary[300]};

    text-align: center;

    direction: rtl;

    background: #ffffff;
    border: 1px solid ${theme.palette.secondary[300]};
  }

  .show-ticket {
    display: flex;
    justify-content: center;
    a {
      background-color: ${theme.palette.primary[100]};
      color:${theme.palette.primary[300]};
      border-radius: 5px;
      padding: 5px 10px;
    }
  }

  .new-ticket {
  }

  td {
    padding: 10px;
  }
`;
