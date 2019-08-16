import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  }
}));



export default function Menu() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar}>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        className={classes.toolbarTitle}
      />
      <IconButton>
        <SearchIcon style={{ color: "white" }} />
      </IconButton>
      <Button style={{ color: "white" }} variant="outlined" size="small">
        Join Me
      </Button>
      <Link href="/" style={{ color: "white", marginLeft: "10px" }}>
        HOME
      </Link>
    </Toolbar>
  );
}
