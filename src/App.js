import { CssBaseline } from "@material-ui/core";
import "./App.css";
import Header from "./Components/Header";
import { makeStyles } from "@material-ui/core/styles";
import Persistant from "./Components/Persistant";
import AllComponent from "./Components/Forms/AllComponent";
import StepperApi from "./Components/StepperApi";
import Store from "./Components/GlobalData/Store";
import DropDowncopy from "./SearchableDropDown/DropDowncopy";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Store>
      <div className="App">
        <CssBaseline />

        <Persistant />

        {/* <Header/> */}
        <div className={classes.toolbarMargin} />
        {/* <AllComponent/> */}
      </div>
    </Store>
    // <DropDowncopy/>
  );
}

export default App;
