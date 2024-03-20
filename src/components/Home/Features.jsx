import { Box, Container, Divider, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import {
  HeaderTypography,
  GenerelTypography,
  FeatureBox,
  MidTypography,
} from "./HomeStyle";
import { homeFeature } from "../utils/Utils";

export default function Features() {
  const myfontsize = useMediaQuery("(max-width: 900px)");

  return (
    <>
      <Box my={5}>
        <Container>
          <Grid container>
            <Grid item xs={2} lg={2}></Grid>
            <Grid xs={8} lg={8} textAlign="center">
              <Box>
                <HeaderTypography myfontsize={myfontsize}>
                  MY PERSONAL PROJECTS
                </HeaderTypography>

                <GenerelTypography textAlign="center !important">
                  I developed these projects independently, driven by a passion
                  for learning and implementing new concepts. Each project
                  represents a journey of exploration and growth, where I honed
                  my skills and embraced new technologies. They stand as
                  testaments to my ambition and dedication to continuous
                  improvement in the field of web development.
                </GenerelTypography>
              </Box>
            </Grid>
            <Grid item xs={2} lg={2}></Grid>
          </Grid>

          <Grid container mt={5} spacing={5}>
            {homeFeature.map((i, index) => {
              return (
                <Grid key={i} item xs={12} md={6} lg={6}>
                  <FeatureBox>
                    <Box textAlign="center">
                      <a target="blank" href={i.link}>

                      <Box >
                        {" "}
                        <img
                          style={{ height: "220px" }}
                          src={i.img}
                          alt=""
                          />{" "}
                      </Box>
                          </a>
                      <Box>
                        {" "}
                        <MidTypography myfontsize={myfontsize}>
                          {" "}
                          {i.name}{" "}
                        </MidTypography>
                      </Box>
                    </Box>
                    <Divider />
                    <Box py="3%" px="0%">
                      <GenerelTypography>{i.desc}</GenerelTypography>
                    </Box>
                  </FeatureBox>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
