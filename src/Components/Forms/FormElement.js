import { Grid, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../GlobalData/Store";

function FormElement(props) {
  const [state, setState] = useContext(Context);
  return (
    // <Grid item xs={6}>
    <Grid>
      <TextField
        id="presentStage"
        size="small"
        variant="outlined"
        label="Present Stage"
        inputProps={{ readOnly: true }}
        placeholder="backend will update status"
        value={state.presentStage||""}
      />
      <TextField
        id="numberStatus"
        size="small"
        variant="outlined"
        label="Number Status"
        inputProps={{ readOnly: true }}
        placeholder="backend will update status"
        value={state.numberStatus||""}
      />
      <TextField
        id="numberAddressStatus"
        size="small"
        variant="outlined"
        label="Network Address Status"
        inputProps={{ readOnly: true }}
        placeholder="backend will update status"
        value={state.numberAddressStatus||""}
      />
      <TextField
        id="errorNotes"
        size="small"
        variant="outlined"
        label="Error/Notes"
        inputProps={{ readOnly: true }}
        placeholder="backend will update status"
        value={state.errorNotes||""}
      />
    </Grid>
  );
}

export default FormElement;
