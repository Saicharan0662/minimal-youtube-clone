import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm); //sending prop value to parent
      setTimeout(() => {
        setSearchTerm('')
      }, 500);
    }
  }

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField fullWidth label="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={onKeyPress} />
    </Paper>
  );
}

export default SearchBar;