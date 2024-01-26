import { Paper, Typography } from "@mui/material";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { columns } from "./constants";

const UserDataTable = () => {

  const { users } = useSelector((state) => state.users);
  return (
    <Paper>
      <Typography component="h1" variant="h4" align="center">
        USER DETAILS
      </Typography>
      <DataTable
        columns={columns}
        data={users}
        selectableRows
        fixedHeader
        pagination
        highlightOnHover
      />
    </Paper>
  );
};

export default UserDataTable;
