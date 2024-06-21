import { TextField, InputAdornment, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");

  async function fetchRecipes() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=d53f0278&app_key=d2f77ee494bde5b8f0147f34d09a8f2f`
    );

    if (!response.ok) {
      console.error('Network response was not ok', response.statusText);
      return;
    }

    const data = await response.json();
    setRecipes(data.hits);
  }

  function handleChange(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    fetchRecipes();
  }, [query]);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <TextField
        label="Search"
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={fetchRecipes}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
    </Box>
    );
};