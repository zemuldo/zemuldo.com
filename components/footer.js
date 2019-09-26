import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

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
          <span className='color-1' >Zemuldo Website and Blog</span>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
        >
          Want to talk? Check my <a href='https://calendly.com/zemuldo' target='_blank' rel='noopener noreferrer'  >Calendly</a>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
        >
          <span>Learning while Writing more cool stuff everyday.</span>
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
