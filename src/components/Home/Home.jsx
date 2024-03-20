import React from "react";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import { HeaderTypography, GenerelTypography, AboutButton } from "./HomeStyle";
import Features from "./Features";
import Testimonial from "./Testimonial";
import Technologies from "./Technologies";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import background from "../../assets/Home/bg.png";

export default function Home() {
  const largeScreen = useMediaQuery("(min-width: 1200px)");
  const myfontsize = useMediaQuery("(max-width: 900px)");
  return (
    <>
      <Box
        sx={{
          mt: "5%",
        }}
      >
        <Container>
          <Grid container alignItems="center" marginBottom={10}>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                textAlign: "center",
              }}
            >
              <Box>
                <HeaderTypography
                  myfontsize={myfontsize}
                  color="#114D94"
                  lineHeight="normal"
                >
                  Hello, Its me
                </HeaderTypography>
                <HeaderTypography
                  myfontsize={myfontsize}
                  color="#79B5D9 !important"
                >
                  AMINA ASLAM
                </HeaderTypography>
                <Box px={4}>
                  <GenerelTypography
                    sx={{
                      textAlign: largeScreen
                        ? "justify !important"
                        : "center !important",
                    }}
                  >
                    "As a new MERN stack developer, I'm eager to kickstart my
                    career. I'm proficient in MongoDB, Express, React, and
                    Node.js, and I'm keen to learn and grow. Ready to bring
                    energy and enthusiasm to your team!"
                  </GenerelTypography>
                </Box>
                <AboutButton>
                  <a
                  target="blank"
                    href="https://github.com/sajall"
                    style={{ color: "#ffffff", textDecoration: "none" }}
                  >
                    GitHub
                  </a>
                </AboutButton>
{" "}
                <AboutButton>
                  <a
                   target="blank"
                    href="https://drive.google.com/file/d/1SLvJEXLkc5cgZdqdYd0IzQBi6U-8VwTq/view?usp=drive_link"
                    style={{ color: "#ffffff", textDecoration: "none" }}
                  >
                    Resume
                  </a>
                </AboutButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <img
                  style={{
                    width: "100%",
                  }}
                  src={background}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>

          <Technologies />
          <Features />
          <Box my="5%">
            <Testimonial />
          </Box>
          <ScrollArrow />
        </Container>
      </Box>
      <Footer />
    </>
  );
}
