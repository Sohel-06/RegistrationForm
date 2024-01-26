import React from "react";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddressInfo,
  setCurrentStep,
} from "../../store/reducers/registration";
import { setRegisteredUserDetails } from "../../store/reducers/users";
import AutoComplete from "./AutoComplete";
import { addressFields } from "./constants";
import { addressSchemaValidation } from "./SchemaValidation";
import { formatName } from "./utils";
import useStyles from "./Registration.styles";

const Addressdetails = () => {
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(addressSchemaValidation),
  });
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleBack = () => {
    dispatch(setCurrentStep(0));
  };
  const { personalDetails } = useSelector((state) => state.registration);
  const onSubmit = (data) => {
    dispatch(setCurrentStep(2));
    dispatch(setAddressInfo(data));
    dispatch(setRegisteredUserDetails({ ...personalDetails, ...data }));
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Address Details
      </Typography>
      <Grid container spacing={3} sx={{ marginBottom: "16px" }}>
        {addressFields.map((fieldName, index) => (
          <Grid item xs={12} sm={fieldName.size} key={index}>
            <TextField
              id={formatName(fieldName.name)}
              label={fieldName.name}
              fullWidth
              variant="standard"
              {...register(formatName(fieldName.name))}
              type={fieldName.name === "PinCode" ? "number" : ""}
            />
          </Grid>
        ))}
        <Grid item xs={12} sm={6}>
          <AutoComplete control={control} />
        </Grid>
      </Grid>
      <Box className={classes.boxStyles}>
        <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          sx={{ display: "inline-block", marginLeft: "auto" }}
        >
          Submit
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default Addressdetails;
