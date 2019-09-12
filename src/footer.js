import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

const useStyles =  makeStyles(theme => ({
  footer: {
    color: 'white',
    marginTop: theme.spacing(8),
    padding: theme.spacing(2, 0)
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Zemuldo Blog
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
        >
          Writing more cool stuff everyday.
        </Typography>
        <Typography variant="body2" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://zemuldo.com/">
            Zemuldo
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
}
