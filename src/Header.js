import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)`
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
`;

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" component="div" sx={{ fontFamily: 'Cursive', fontWeight: 'bold', color: '#fff' }}>
              Recipe Finder
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ fontFamily: 'Cursive', fontStyle: 'italic', color: '#fff' }}>
              Find your recipe
            </Typography>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}