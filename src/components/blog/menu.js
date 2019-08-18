import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
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
    <div style={{margin: "10px 0px 10px 0px"}}>
      <Link href="/">
        <a>HOME</a>
      </Link>
    </div>
  );
}
