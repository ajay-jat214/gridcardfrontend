import React from "react";
import {
  Grid,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";

const useStyles = makeStyles(() => ({
  HeaderColor: {
    background: "#884EA0",
  },
  typography: {
    flex: 1,
    position: "relative",
    paddingLeft: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <AppBar className={classes.HeaderColor} position='static'>
      <Toolbar>
        <div className={classes.typography}>
          <Button
            onClick={() => props.callBack()}
            style={{ color: "white", fontFamily: "cursive" }}
          >
            Show Users
          </Button>
        </div>
        <IconButton>
          <AcUnitRoundedIcon style={{ color: "white" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
