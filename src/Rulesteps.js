import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
    textAlign: "center",
  },
  button: {
    marginTop: theme.spacing(2),
    width: "auto", // Set to 'auto' for normal width
    alignSelf: "flex-end",
    textTransform: "capitalize", // Capitalize only the first letter
  },
  radioGroup: {
    flexDirection: "row",
  },
  formControl: {
    marginTop: theme.spacing(3),
  },
}));

function Rulesteps() {
  const classes = useStyles();
  const [step, setStep] = useState(1);
  const [verificationType, setVerificationType] = useState(
    "Compliance Rule Set"
  );
  const [asset, setAsset] = useState("");
  const [criteria, setCriteria] = useState("");

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleReset = () => {
    setStep(1);
    setVerificationType("Compliance Rule Set");
    setAsset("");
    setCriteria("");
  };

  return (
    <div className={classes.root}>
      {step === 1 && (
        <FormControl component="fieldset" className={classes.formControl}>
          <Typography variant="h6" gutterBottom>
            <strong>Step 1: Verify Compliance - Verification Type</strong>
          </Typography>

          <RadioGroup
            className={classes.radioGroup}
            aria-label="verification-type"
            name="verificationType"
            value={verificationType}
            onChange={(e) => setVerificationType(e.target.value)}
          >
            <Typography
              variant="body1"
              gutterBottom
              style={{ marginTop: "18px", marginRight: "16px" }}
            >
              <h4>How would you like to verify compliance(s)?</h4>
            </Typography>
            <FormControlLabel
              value="Compliance Rule Set"
              control={<Radio />}
              label="By Compliance Rule Set (Default)"
            />
            <FormControlLabel
              value="Rule"
              control={<Radio disabled />}
              label="By Rule (To be available in future)"
            />
          </RadioGroup>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
            style={{ marginTop: "18px", marginRight: "16px" }}
          >
            Next: Specify Asset
          </Button>
        </FormControl>
      )}
      {step === 2 && (
        <FormControl component="fieldset" className={classes.formControl}>
          <Typography variant="h6" gutterBottom>
            <strong>Step 2: Verify Compliance - Specify Asset</strong>
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ marginTop: "18px", marginRight: "16px" }}
          >
            <h4>
              Which asset or artifact would you like to verify compliance for?
            </h4>
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "16px",
            }}
          >
            <div style={{ marginRight: "50px" }}>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Search Asset:
              </Typography>
            </div>
            <div style={{ flex: 1 }}>
              <TextField
                label="Asset Type"
                value={asset}
                onChange={(e) => setAsset(e.target.value)}
                fullWidth
                margin="normal"
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "30px", textTransform: "capitalize" }}
            >
              Go
            </Button>
          </div>
          <div
            style={{
              marginTop: "16px",
              marginBottom: "16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ marginRight: "8px" }}>
              {/* Add some horizontal spacing here */}
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                style={{ marginRight: "18px", textTransform: "capitalize" }}
              >
                Next : Specify Criteria
              </Button>
              <Button
                variant="contained"
                onClick={handleBack}
                style={{ textTransform: "capitalize" }}
              >
                Back
              </Button>
            </div>
          </div>
        </FormControl>
      )}

      {step === 3 && (
        <FormControl component="fieldset" className={classes.formControl}>
          <Typography variant="h6" gutterBottom>
            <strong>
              Step 3: Verify Compliance - Specify Verification Criteria
            </strong>
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ marginTop: "18px", marginRight: "16px" }}
          >
            <h4>
              What criteria do you want to Verify against (mode: By CRS | Rule)?
            </h4>
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              padding: "16px", // Added padding
              margin: "16px", // Added margin
            }}
          >
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", marginRight: "10px" }}
            >
              Search Compliance Rule Sets (CRS):
            </Typography>
            <TextField
              label="Compliance Rule Sets (CRS)"
              value={criteria}
              onChange={(e) => setCriteria(e.target.value)}
              fullWidth
              margin="normal"
              style={{ marginRight: "10px" }}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Go
            </Button>
          </div>

          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              style={{ marginLeft: "270px",marginRight:"20px", textTransform: "capitalize" }}
            >
              Next : Confirm & Verify
            </Button>
            <Button
              variant="contained"
              onClick={handleBack}
              style={{ textTransform: "capitalize" }}
            >
              Back
            </Button>
          </div>
        </FormControl>
      )}

      {step === 4 && (
        <div>
          <Typography variant="h6" gutterBottom>
            Confirmation
          </Typography>
          <Typography>Verification Type: {verificationType}</Typography>
          <Typography>Asset: {asset}</Typography>
          <Typography>Verification Criteria: {criteria}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleReset}
            className={classes.button}
          >
            Done
          </Button>
        </div>
      )}
    </div>
  );
}

export default Rulesteps;
