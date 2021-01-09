import React from "react";
import SocialSites from "./social_sites";
import Terminal from "./terminal_me";
import CustomLink from "../link";
import { Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  small: {
    marginTop: 1,
    width: theme.spacing(4),
    height: theme.spacing(4),margin: theme.spacing(1)
  },
}));

export default function CurrentCompany() {
  const classes = useStyles();
  return (
    <p >
      <span >Program Manager at {' '} </span>
      
      <span
        itemScope
        itemProp="organization"
        itemType="http://schema.org/Organization"
      >
        <a
        style={{backgroundColor: 'transparent', opacity: .9}}
          itemProp="url"
          href="https://microsoft.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span  itemProp="name">
           <span style={{color: '#F26522'}}>Micr</span>
           <span style={{color: '#FFC20E'}}>o</span>
           <span style={{color: '#8DC63F'}}>Sof</span>
           <span style={{color: '#00AEEF'}}>t</span>
          </span>
        </a>
      </span>
    </p>
  );
}
