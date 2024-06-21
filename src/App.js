import "./App.css";
import { Searchbar } from "./SearchBar";
import Header from "./Header";
import FilterTable from "./FilterTable";
import { useState, useEffect } from "react";
import { RecipesList } from "./RecipesList";
import { Box, Grid } from "@mui/material";
import { styled } from '@mui/system';

const Container = styled(Box)`
  margin: 20px;
  @media (max-width: 600px) {
    margin: 10px;
  }
`;

const MobileGrid = styled(Grid)`
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filters, setFilters] = useState({
    chicken: false,
    fish: false,
    beef: false,
    vegetarian: false,
    pork: false,
    vegan: false,
    carrot: false,
    broccoli: false,
    spinach: false,
    tomato: false,
    apple: false,
    banana: false,
    orange: false,
    strawberry: false,
    dessert: false,
    breakfast: false,
    dinner: false,
  });

  const fetchRecipesWithFilters = async () => {
    const activeFilters = Object.keys(filters).filter(key => filters[key]);
    const query = activeFilters.join(',');

    if (query) {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=d53f0278&app_key=d2f77ee494bde5b8f0147f34d09a8f2f`
      );

      if (!response.ok) {
        console.error('Network response was not ok', response.statusText);
        return;
      }

      const data = await response.json();
      setRecipes(data.hits);
    } else {
      setRecipes([]);
    }
  };

  useEffect(() => {
    fetchRecipesWithFilters();
  }, [filters]);

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <MobileGrid container spacing={2}>
          <Grid item xs={12} sm={4} md={3}>
            <FilterTable filters={filters} handleFilterChange={handleFilterChange} />
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Searchbar setRecipes={setRecipes} />
            <RecipesList recipes={recipes} />
          </Grid>
        </MobileGrid>
      </Container>
    </div>
  );
}

export default App;
