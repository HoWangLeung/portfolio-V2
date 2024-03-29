import {
  Button,
  Grid,
  ThemeProvider,
  StyledEngineProvider,
  Paper,
  Typography,
  createTheme,
  Link,
  adaptV4Theme,
} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

import { Item } from "./Item";
import { List } from "./List";
import "./style.css";
import featured1_1 from "../../../../Common/Images/featured1_1.jpg";
import featured1_2 from "../../../../Common/Images/featured1_2.jpg";
import featured1_3 from "../../../../Common/Images/featured1_3.jpg";
import featured1_4 from "../../../../Common/Images/featured1_4.jpg";
import featured1_5 from "../../../../Common/Images/featured1_5.jpg";
import featured1_6 from "../../../../Common/Images/featured1_6.jpg";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import { useHistory } from "react-router-dom";

const whiteTheme = createTheme(adaptV4Theme({ palette: { primary: { main: "#fff" } } }));

const useStyles = makeStyles({
  container: {
    position: "relative",
    marginBottom: "90px",
  },

  description: {
    "&>*": {
      margin: "10px 0px",
    },
  },
  title: {
    position: "absolute",
    top: "0px",
    left: "65%",
    color: "#fff",
    ["@media (max-width:1280px)"]: {
      display: "none",
    },
  },
  paper: {
    "&>*": {
      margin: "10px 0px",
    },
    padding: "50px",
    background: "#2FA687",
    position: "absolute",
    left: "51%",

    ["@media (max-width:1280px)"]: {
      position: "relative",
      left: "0%",
      width: "70%",
    },
  },
  button: {
    zIndex: "999",
    position: "absolute",
    right: "2%",
    bottom: "5%",
    fontWeight: "600",
  },
});

export default function FeaturedProjects(props) {
  let classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push("/projectDetail/99");
  };
  let { isTableView } = props;
  console.log(props);
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid
        lg={8}
        container
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={featured1_1}
          alt="asd"
          style={{
            borderRadius: "5px",
            height: "100%",
            width: "70%",
          }}
        />
      </Grid>

      <Grid
        container
        item
        lg={4}
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.description}
      >
        <Typography variant="h4" className={classes.title}>
          Ecommerce
        </Typography>

        <Paper elevation={15} className={classes.paper}>
          <StarsRoundedIcon
            style={{
              position: "absolute",
              right: "1%",
              top: "1%",
              fill: "#fff",
              fontSize: "250%",
            }}
          />
          <Typography
            align="left"
            style={{ color: "white", fontWeight: "400" }}
          >
            Ecommerce website with authentication, payment , profile and
            order management{" "}
          </Typography>
          <Typography
            align="left"
            style={{ color: "white", fontWeight: "400" }}
          >
            Support English and Chinese version
          </Typography>
          <Typography
            align="left"
            style={{ color: "white", fontWeight: "400" }}
          >
            Responsive in all devices
          </Typography>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={whiteTheme}>
              <Link to="/projectDetail/99">
                <Button
                  className={classes.button}
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={handleClick}
                >
                  Detail
                </Button>
              </Link>
            </ThemeProvider>
          </StyledEngineProvider>
        </Paper>
      </Grid>
    </Grid>
  );
}
