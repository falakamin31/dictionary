import React from "react";
import "../Styles/Header.css";
import {

  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles'
import categories from "../Data/Category";

export const Header = ({category,setCategory,word,setWord}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    }, 
  });

  const handleChange = (language) =>{
      setCategory(language);
      setWord("");

  }
  return (
    <div className="header">
      <span className="title"> {word ? word :"Word Ocean"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField  className="search"   label="Search any Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
           />
          <TextField
          className="select"
            
            select
            label="Languages"
            value={category}
            onChange={(e)=> handleChange (e.target.value)}

            
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};
