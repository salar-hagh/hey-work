import styled from "@emotion/styled";
import { theme } from "../../../theme/theme";

export const SContactUs = styled.div`
  padding-top: 50px;

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

  .show-message {
    display: flex;
    justify-content: center;
    a {
      background-color: ${theme.palette.primary[100]};
      color: ${theme.palette.primary[300]};
      border-radius: 5px;
      padding: 5px 10px;
    }
  }

  td {
    padding: 10px;
  }
`;
