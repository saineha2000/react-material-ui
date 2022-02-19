import { Button, IconButton, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Service1 from "../Components/services/Service1";
import CloseIcon from "@mui/icons-material/Close";
function DropDown() {
  const [data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [wordEntered, setwordEntered] = useState("");
  const [searchWord, setsearchWord] = useState("");


  useEffect(() => {
    Service1.getCountryData("in")
      .then((res) => res.data)
      .then((res) => {
        setData(res.content);
        console.log(data);
      });
  }, []);

  const filterData = (event) => {
    setsearchWord(event.target.value);
    console.log(event.target.value);
    setwordEntered(event.target.value);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (newFilter === "") {
      setfilteredData([]);
    } else {
      setfilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setfilteredData([]);
    setwordEntered("");
  };
  return (
    <div>
      <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 0 }}>
        <TextField
          id="dd"
          size="small"
          variant="outlined"
          label="search"
          value={wordEntered}
          placeholder="SEARCH HERE..."
          onChange={filterData}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {filteredData.length === 0 && searchWord.length === 0 ? (
                  <IconButton disableRipple>
                    <SearchIcon />
                  </IconButton>
                ) : (
                  <IconButton disableRipple onClick={clearInput}>
                    <CloseIcon />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
      </div>
      {filteredData.length !== 0 && (
        <div
          style={{
            marginTop: 0,
            marginLeft: 22,
            width: 255,
            height: 200,
            overflow: "hidden",
            overflowY: "auto",
            boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px",
          }}
        >
          <div style={{ marginLeft: 13, WebkitScrollBar: { display: "none" } }}>
            {filteredData.slice(0, 15).map((countries, index) => {
              return (
                <Button key={index} variant="text" fullWidth>
                  {countries.name}
                </Button>
              );
            })}
          </div>
        </div>
      )}
      <br></br>
      <br></br>
    </div>
  );
}

export default DropDown;
