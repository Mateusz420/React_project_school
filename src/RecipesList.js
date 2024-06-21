import { Grid, Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  height: 100%;
`;

export const RecipesList = ({ recipes }) => {
  if (recipes.length === 0) {
    return <Typography>No recipes found.</Typography>;
  }

  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={5}
      padding={{ xs: 0, md: 3, lg: 5 }}
    >
      {recipes.map((recipe) => (
        <Grid item xs={12} md={6} lg={4} key={recipe.recipe.uri}>
          <StyledCard>
            <CardMedia
              sx={{ height: 140 }}
              image={recipe.recipe.image}
              title={recipe.recipe.label}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.recipe.label}
              </Typography>
              {recipe.recipe.ingredientLines.map((ingredientLine, index) => (
                <Chip label={ingredientLine} key={index} variant="outlined" sx={{ margin: '2px' }} />
              ))}
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};