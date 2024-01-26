import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";

const AutoComplete = ({ control }) => {
  const [countries, setCountry] = useState([]);

  const getApiData = async () => {
    const res = await axios.get(`https://restcountries.com/v3.1/all`);
    setCountry(res.data);
  };
  useEffect(() => {
    getApiData();
  }, []);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (inputValue.length > 0) {
      setOpen(true);
    }
  };
  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    if (newInputValue.length > 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const country = countries.map((country) => country.name.common);
  return (
    <Controller
      control={control}
      name="country"
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          options={country}
          onChange={(event, values) => onChange(values)}
          open={open}
          onOpen={handleOpen}
          onClose={() => setOpen(false)}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          getOptionLabel={(option) => option}
          value={value}
          renderInput={(params) => (
            <TextField
              {...params}
              id="country"
              label="Country"
              fullWidth
              variant="standard"
              onChange={onChange}
            />
          )}
        />
      )}
    />
  );
};

export default AutoComplete;
