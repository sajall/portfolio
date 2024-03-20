
import { Box, Grid , Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Home/bg.jpg";

import "../../App.css";

export default function Header() {


  return (
    <Box
      id="header"
      style={{
        background: "#FFFF",
        position: "sticky",
        top: "0",
        width: "100%",
        zIndex: "2",
        boxShadow: "2px 2px 10px 2px lightgray"

      }}
    >
      <Container>
    
        <Grid
          container
          sx={{ alignItems: "center", pt: "1%"  }}
        >
          <Grid
            item
            lg={4}
            md={4}
            sx={{ display: { sm: "none", xs: "none", md: "block" } }}
          >
            <NavLink to="/">
              <img
                style={{ maxWidth: "100%", width: "20%" , borderRadius:"50%"}}
                src={logo}
                alt="logo"
              />
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
