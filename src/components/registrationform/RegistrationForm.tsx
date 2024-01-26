import React, { FC } from "react";
import {
  Container,
  Step,
  Stepper,
  StepButton,
  Typography,
  Paper,
} from "@mui/material";
import PersonalDetails from "./PersonalDetails";
import Addressdetails from "./Addressdetails";
import Summary from "./Summary";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep } from "../../store/reducers/registration";
import { RootState } from "../../store/store";
import { steps } from "./constants";


interface RegistrationFormProps {}

const RegistrationForm: FC<RegistrationFormProps> = () => {
  const { currentStep } = useSelector(
    (state: RootState) => state.registration
  );
  const dispatch = useDispatch();
  const handleStep = (step: number) => () => {
    dispatch(setCurrentStep(step));
  };
  const renderStep = (step: number) => {
    switch (step) {
      case 0:
        return <PersonalDetails />;
      case 1:
        return <Addressdetails />;
      case 2:
        return <Summary />;
      default:
        return null;
    }
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          REGISTER
        </Typography>
        <Stepper
          alternativeLabel
          activeStep={currentStep}
          sx={{ pt: 3, pb: 5 }}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>{renderStep(currentStep)}</React.Fragment>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;