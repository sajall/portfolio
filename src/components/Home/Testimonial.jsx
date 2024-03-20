import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";
import { HeaderTypography } from "./HomeStyle";

export default function Testimonial() {
  const myfontsize = useMediaQuery("(max-width: 900px)");

  return (
    <>
      <Container>
        <Box>
          <HeaderTypography
            myfontsize={myfontsize}
            textAlign="center !important"
            Container
          >
            MY ALL PROJECTS
          </HeaderTypography>
        </Box>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <Box>
              <Carousel />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
