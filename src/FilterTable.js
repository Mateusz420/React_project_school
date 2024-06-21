import React from 'react';
import { FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import styled from 'styled-components';

const FilterContainer = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const FilterTable = ({ filters, handleFilterChange }) => {
  return (
    <FilterContainer>
      <h2>Filter by Ingredient</h2>
      <FormControl component="fieldset">
        <CategoryTitle>Meats</CategoryTitle>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.chicken}
                onChange={handleFilterChange}
                name="chicken"
                color="primary"
              />
            }
            label="Chicken"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.fish}
                onChange={handleFilterChange}
                name="fish"
                color="primary"
              />
            }
            label="Fish"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.beef}
                onChange={handleFilterChange}
                name="beef"
                color="primary"
              />
            }
            label="Beef"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.pork}
                onChange={handleFilterChange}
                name="pork"
                color="primary"
              />
            }
            label="Pork"
          />
        </FormGroup>
        <CategoryTitle>Diets</CategoryTitle>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.vegetarian}
                onChange={handleFilterChange}
                name="vegetarian"
                color="primary"
              />
            }
            label="Vegetarian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.vegan}
                onChange={handleFilterChange}
                name="vegan"
                color="primary"
              />
            }
            label="Vegan"
          />
        </FormGroup>
        <CategoryTitle>Vegetables</CategoryTitle>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.carrot}
                onChange={handleFilterChange}
                name="carrot"
                color="primary"
              />
            }
            label="Carrot"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.broccoli}
                onChange={handleFilterChange}
                name="broccoli"
                color="primary"
              />
            }
            label="Broccoli"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.spinach}
                onChange={handleFilterChange}
                name="spinach"
                color="primary"
              />
            }
            label="Spinach"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.tomato}
                onChange={handleFilterChange}
                name="tomato"
                color="primary"
              />
            }
            label="Tomato"
          />
        </FormGroup>
        <CategoryTitle>Fruits</CategoryTitle>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.apple}
                onChange={handleFilterChange}
                name="apple"
                color="primary"
              />
            }
            label="Apple"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.banana}
                onChange={handleFilterChange}
                name="banana"
                color="primary"
              />
            }
            label="Banana"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.orange}
                onChange={handleFilterChange}
                name="orange"
                color="primary"
              />
            }
            label="Orange"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.strawberry}
                onChange={handleFilterChange}
                name="strawberry"
                color="primary"
              />
            }
            label="Strawberry"
          />
        </FormGroup>
        <CategoryTitle>Categories</CategoryTitle>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.dessert}
                onChange={handleFilterChange}
                name="dessert"
                color="primary"
              />
            }
            label="Dessert"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.breakfast}
                onChange={handleFilterChange}
                name="breakfast"
                color="primary"
              />
            }
            label="Breakfast"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.dinner}
                onChange={handleFilterChange}
                name="dinner"
                color="primary"
              />
            }
            label="Dinner"
          />
        </FormGroup>
      </FormControl>
    </FilterContainer>
  );
};

export default FilterTable;
