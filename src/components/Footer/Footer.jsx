import React from "react";
import { Box, Divider, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

// import crop from "../../assets/footerlogo.jpg";
import logo from "../../assets/Home/portfolio.jpg";
import { LinkedIn, GitHub } from "@mui/icons-material";
import { HeadingTypography, InnerTypography } from "./FooterStyle";

const Footer = () => {
  return (
    <>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor="#0d3256">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <NavLink to="/">
                <img
                  style={{
                    maxWidth: "60%",
                    borderRadius: "110px",
                  }}
                  src={logo}
                  alt="logo"
                />
              </NavLink>
            </Box>
          </Grid>

          <Grid item sx={12} sm={3}>
            <Box>
              <HeadingTypography>Follow ME</HeadingTypography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Box>
                  <a
                    href="https://www.linkedin.com/in/amina-aslam-32a4922a7/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <LinkedIn
                      style={{
                        fontSize: "35px",
                        color: "#FFFFFF",
                      }}
                    ></LinkedIn>
                  </a>
                </Box>

                <Box ml="15%">
                  <a
                    href="https://github.com/sajall"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <GitHub
                      style={{
                        fontSize: "35px",
                        color: "#FFFFFF",
                      }}
                    />
                  </a>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box>
              <HeadingTypography>CONTACT ME</HeadingTypography>
              <Box>
                <InnerTypography>
                  {" "}
                  Phone: +(92) 3286544739
                  <br />
                  <a
                    href="mailto:aminaaslam@gmail.com"
                    rel="noreferrer"
                    style={{ color: "#ffffff", textDecoration: "none" }}
                  >
                    Mail: aminaaslam985@gmail.com
                  </a>
                </InnerTypography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Divider
          sx={{
            mt: "1%",
          }}
        />

        <Box
          sx={{
            textAlign: "center",
            pt: { xs: 2, sm: 5 },
            color: "#ffffff",
          }}
        >
          &copy; {new Date().getFullYear()} all Rights Reserved.
        </Box>
      </Box>
    </>
  );
};

export default Footer;
