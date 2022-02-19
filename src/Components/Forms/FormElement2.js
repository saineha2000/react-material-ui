import { Grid, TextField } from "@material-ui/core";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import React from "react";
import theme from "../Theme";
import { Context } from "../GlobalData/Store";
import Service1 from "../services/Service1";

const useStyle = makeStyles((theme) => ({
  rootClass: {
    "& .MuiAutocomplete-root": {
      width: "50%",
      margin: theme.spacing(1),
    },
  },
}));

// const initialValues = {
//   requestNumber: "",
//   countryOfOrigin: "",
//   accessType: "",
//   isMultiBuild: false,
//   bulkAccessNoWorkflow: "",
//   sioAcceptanceDate: "",
//   commitDate: "",
// };

function FormElement2() {
  const classes = useStyle();
  //const [Values, setValues] = useState(initialValues);
  const [state, setState] = useContext(Context);
  const handleInputs = (event, values) => {
    const { name, value } = event.target;
    if (name === "multiBuild") {
      setState({
        ...state,
        ["multiBuild"]: event.target.checked,
      });
    } else {
      setState({
        ...state,
        [name]: value,
      });
    }

    //   Service1.updateData(state, id).then((res) => {})
  };
  const id = state.id;
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log("hey,you can refresh now");
      // Send Axios request here
      Service1.updateData(state, id).then((res) => {});
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [state]);

  const handleShow = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <>
      <TextField
        id="requestNumber"
        size="small"
        variant="outlined"
        label="Request No"
        value={state.requestNumber || ""}
        name="requestNumber"
        onChange={handleInputs}
      />
      <FormControl variant="outlined" size="small" onChange={handleInputs}>
        <InputLabel id="select-label1">Country Of Origin</InputLabel>
        <Select
          labelId="select-label1"
          value={state.countryOfOrigin ? state.countryOfOrigin : ""}
          id="select1"
          label="countryOfOrigin"
          name="countryOfOrigin"
          onChange={handleInputs}
          defaultValue=""
        >
          <MenuItem value="Value1">Value 1</MenuItem>
          <MenuItem value="Value2">Value 2</MenuItem>
          <MenuItem value="Value3">Value 3</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" size="small">
        <InputLabel id="select-label2">Inbound Access Type</InputLabel>
        <Select
          labelId="select-label2"
          value={state.accessType ? state.accessType : ""}
          label="accessType"
          id="select2"
          name="accessType"
          onChange={handleInputs}
          defaultValue=""
        >
          <MenuItem value="Value1">Value 1</MenuItem>
          <MenuItem value="Value2">Value 2</MenuItem>
          <MenuItem value="Value3">Value 3</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" size="small">
        <InputLabel id="select-label3">Bulk Access No Workflow</InputLabel>
        <Select
          labelId="select-label3"
          value={state.bulkAccessNoWorkflow ? state.bulkAccessNoWorkflow : ""}
          label="bulkAccessNoWorkflow"
          id="select3"
          name="bulkAccessNoWorkflow"
          onChange={handleInputs}
          defaultValue=""
        >
          <MenuItem value={1}>NO 1</MenuItem>
          <MenuItem value={2}>NO 2</MenuItem>
          <MenuItem value={3}>NO 3</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            size="small"
            id="date1"
            label="SIO Acceptatnce Date"
            value={state.sioAcceptanceDate || ""}
            type="date"
            // defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            name="sioAcceptanceDate"
            onChange={handleInputs}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            id="date1"
            label="Customer Commit Date"
            type="date"
            value={state.commitDate || ""}
            // defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            name="commitDate"
            onChange={handleInputs}
          />
        </Grid>
      </Grid>

      <FormControlLabel
        control={<Checkbox checked={state.multiBuild?true:false} name="multiBuild" />}
        label="Multi Build"
        onChange={handleInputs}
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleShow}
      >
        Show
      </Button>
    </>
  );
}

export default FormElement2;
