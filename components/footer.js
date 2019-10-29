import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CustomLink from './link';
import Container from '@material-ui/core/Container';

const useStyles =  makeStyles(theme => ({
  footer: {
    color: 'white',
    marginTop: theme.spacing(8),
    padding: theme.spacing(2, 0),
    marginBottom: '30px'
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography  variant="body1" align="center" gutterBottom>
          <span className='color-1' >Danstan Onyango ~ Zemuldo</span>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
        >
          Want to talk? Check my <a href='https://calendly.com/zemuldo/general-chat' target='_blank' rel='noopener noreferrer'  >Calendly</a>
        </Typography>
        <Typography variant="body2" align="center">
          {'Copyright © '}
          <CustomLink color="inherit" href="https://zemuldo.com/">
            Zemuldo
          </CustomLink>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
}
