import React from "react";
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  setPersonalInfo,
  setCurrentStep,
} from "../../store/reducers/registration";
import { useDispatch, useSelector } from "react-redux";
import { schemaValidation } from "./SchemaValidation";
import useStyles from "./Registration.styles";

const PersonalDetails = () => {
  const { personalDetails } = useSelector((state) => state.registration);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: personalDetails,
    resolver: yupResolver(schemaValidation),
  });
  const dispatch = useDispatch();
  const classes=useStyles();
  const onSubmit = (data) => {
    dispatch(setPersonalInfo(data));
    dispatch(setCurrentStep(1));
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ marginTop: "16px" }}>
          <TextField
            required
            id="name"
            {...register("name")}
            label="Name"
            fullWidth
            variant="standard"
            error={errors.name ? true : false}
            helperText={errors.name ? errors.name?.message : " "}
            sx={{ paddingBottom: errors.name ? "6px" : "0px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            {...register("age")}
            label="Age"
            fullWidth
            variant="standard"
            error={errors.age ? true : false}
            helperText={errors.age ? errors.age?.message : " "}
            sx={{ paddingBottom: errors.age ? "6px" : "0px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ paddingLeft: "24px" }}>
          <TextField
            required
            id="sex"
            {...register("sex")}
            label="Sex"
            fullWidth
            variant="standard"
            error={errors.sex ? true : false}
            helperText={errors.sex ? errors.sex?.message : " "}
            select
            defaultValue={personalDetails.sex}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="mobileNumber"
            {...register("mobileNumber")}
            label="Mobile Number"
            fullWidth
            variant="standard"
            error={errors.mobileNumber ? true : false}
            helperText={
              errors.mobileNumber ? errors.mobileNumber?.message : " "
            }
            sx={{ paddingBottom: errors.mobileNumber ? "6px" : "0px" }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="govtIssuedIdType"
            {...register("govtIssuedIdType")}
            label="Govt Issued ID Type"
            error={errors.govtIssuedIdType ? true : false}
            helperText={
              errors.govtIssuedIdType ? errors.govtIssuedIdType?.message : " "
            }
            fullWidth
            variant="standard"
            select
            defaultValue={personalDetails.govtIssuedIdType}
          >
            <MenuItem value="Aadhar">Aadhar</MenuItem>
            <MenuItem value="PAN">PAN</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ paddingLeft: "24px" }}>
          <TextField
            required
            id="govtIssuedId"
            {...register("govtIssuedId")}
            label="Govt Issued Id"
            fullWidth
            variant="standard"
            error={errors.govtIssuedId ? true : false}
            helperText={
              errors.govtIssuedId ? errors.govtIssuedId?.message : " "
            }
          />
        </Grid>
      </Grid>
      <DevTool control={control} />
      <Box className={classes.boxStyles}>
        <Button
          onClick={handleSubmit(onSubmit)}
          sx={{ display: "inline-block", marginLeft: "auto" }}
        >
          Next
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default PersonalDetails;
