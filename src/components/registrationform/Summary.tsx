import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { resetInfo } from "../../store/reducers/registration";
import useStyles from "./Registration.styles";

const Summary = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetInfo());
  };
  return (
    <>
      <Typography className={classes.headingStyles}>
        Form is Submitted Successfully
      </Typography>
      <Box className={classes.boxStyles}>
        <Button
          onClick={handleReset}
          sx={{ display: "inline-block", marginLeft: "auto" }}
        >
          New Registration
        </Button>
      </Box>
    </>
  );
};

export default Summary;
