import React, { useContext, useEffect } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { Context } from "../GlobalData/Store";
import Service1 from "../services/Service1";

// import countries from '../ReusabelComponents/Data/countries';
// import SearchableDropDown from "../ReusabelComponents/SearchableDropDown";

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: "1.5em",
    marginBottom: "2em",
  },
}));

function Lookup() {
  const classes = useStyles();
  //   const initialValues = {
  //     id:0,
  //     radio_button_value : "Pre Built Number",
  //     auto_look_up : false,
  //     search_type : " ",
  //     country:" ",
  //     switch : " ",
  //     search_no : 0,
  //     quantity : 0,
  //     exact : false,
  // }
  //const [Values, setValues] = useState(initialValues);
  const [state, setState] = useContext(Context);
  const handleChange = (event) => {
    const { name, value } = event.target;
    // setValues({
    //     ...Values,
    //     [name] : value
    // })
    setState({
      ...state,
      [name]:
        name === "auto_look_up" || name === "exact"
          ? event.target.checked
          : value,
    });
    // console.log(state);
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log("hey,you can refresh now");
      // Send Axios request here
      Service1.updateData(state, state.id).then((res) => {});
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [state]);

  return (
    <Grid>
      <RadioGroup
        value={state.radio_button_value || "Pre Built Number"}
        name="radio_button_value"
        onChange={handleChange}
      >
        <FormControlLabel
          value="BT or Supplier Owned Number"
          label="BT or Supplier Owned Number"
          control={<Radio color="primary" />}
        />
        <FormControlLabel
          value="Customer Owned Number"
          label="Customer Owned Number"
          control={<Radio color="primary" />}
        />
        <FormControlLabel
          value="Pre Built Number"
          label="Pre Built Number"
          control={<Radio color="primary" />}
        />
      </RadioGroup>

      <FormControl variant="outlined" size="small">
        <InputLabel id="select-page3-1">Search Type : </InputLabel>
        <Select
          labelId="select-page3-1"
          label="Search Type"
          id="label-page3-1"
          name="searchType"
          value={state.searchType || " "}
          onChange={handleChange}
        >
          <MenuItem value="search1">search-type 1</MenuItem>
          <MenuItem value="search2">search-type 2</MenuItem>
          <MenuItem value="search3">search-type 3</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <FormControl variant="outlined" size="small">
            <InputLabel id="select-page3-2">Country : </InputLabel>
            <Select
              labelId="select-page3-2"
              label="country"
              id="label-page3-2"
              name="country"
              value={state.country || " "}
              onChange={handleChange}
            >
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="America">America</MenuItem>
              <MenuItem value="Japan">Japan</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <FormControl variant="outlined" size="small">
            <InputLabel id="select-page3-3">Switch </InputLabel>
            <Select
              labelId="select-page3-3"
              label="Switch"
              id="label-page3-3"
              name="switchdd"
              value={state.switchdd || " "}
              onChange={handleChange}
            >
              <MenuItem value="Switch1">Switch 1</MenuItem>
              <MenuItem value="Switch2">Switch 2</MenuItem>
              <MenuItem value="Switch3">Switch 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            size="small"
            type="number"
            variant="outlined"
            label="Search No"
            value={state.search_no || " "}
            name="search_no"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            size="small"
            type="number"
            variant="outlined"
            label="Quantity"
            value={state.quantity || " "}
            name="quantity"
            onChange={handleChange}
            // style={{ width: "75%" }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.auto_look_up ? true : false}
                name="auto_look_up"
                color="primary"
              />
            }
            label="Auto Look Up?"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="exact"
                checked={state.exact ? true : false}
              />
            }
            label="Exact?"
            onChange={handleChange}
          />
        </Grid>
        {/*<Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleShow}
        >
          Show
        </Button>*/}
      </Grid>
    </Grid>
  );
}
export default Lookup;
