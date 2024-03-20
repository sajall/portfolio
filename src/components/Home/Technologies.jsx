import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { GenerelTypography, HeaderTypography, TechBox } from "./HomeStyle";
import { Technology } from "../utils/Utils";

export default function Technologies() {
  const myfontsize = useMediaQuery("(max-width: 900px)");



  return (
    <>
      <Box>
        <Container>
          <Grid container>
            <Grid item xs={2} lg={2}></Grid>
            <Grid item xs={8} lg={8} textAlign="center">
              <Box>
                
                  <HeaderTypography myfontsize={myfontsize}>
               MY SKILLSET
                  </HeaderTypography>
                
                  <GenerelTypography>
                  Skilled in MongoDB, React, Node.js, Express, HTML5, CSS3,
                   Tailwind CSS, Material-UI, GraphQL, React Hooks, and Redux.
                    I build user-friendly web apps that work smoothly 
                    from the backend to the frontend.
                  </GenerelTypography>
                
              </Box>
            </Grid>
            <Grid item xs={2} lg={2}></Grid>
          </Grid>

          <Grid container>
            {Technology.map((i, index) => {
              return (
                <Grid key={i} my={2} item lg={4} md={6} xs={6}>
                  
                    <TechBox>
                      <Box>
                        {" "}
                        <img
                          style={{ height:"70px" }} 
                          src={i.img}
                          alt=""
                        />{" "}
                      </Box>
                      <Box mt={3}> {i.name} </Box>
                    </TechBox>
                  
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
