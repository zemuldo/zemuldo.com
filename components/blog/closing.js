import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import CustomLink from '../link';

const CustomButton = withStyles({
  root: {
    width: '100%',
    minWidth: '250px',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#08a6f3',
    borderColor: '#08a6f3',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#08a6f3',
      borderColor: '#08a6f3',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#08a6f3',
      borderColor: '#08a6f3',
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  hrRoot: {
    flexGrow: 1,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  kofiLogo: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
  },
}));

export default function Closing() {
  const classes = useStyles();

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <div className={classes.hrRoot}>
        <Grid
          justify="center"
          alignItems="center"
          container
          item
          xs={12}
          spacing={2}
        >
          <Grid item xs={5}>
            <hr style={{ background: 'linear-gradient(to left, #08a6f3, rgba(255, 0, 0, 0))' }} />
          </Grid>
          <Grid container item justify="center" xs={1}>
            <InfoIcon style={{ fill: '#08a6f3' }} />
          </Grid>
          <Grid item xs={5}>
            <hr style={{ background: 'linear-gradient(to right, #08a6f3, rgba(255, 0, 0, 0))' }} />
          </Grid>
        </Grid>
      </div>
      <p>
        Thank you for finding time to read my post. I hope you found this
        helpful and it was insightful to you. I enjoy creating content like this
        for knowledge sharing, my own mastery and reference.
      </p>
      <p>
        If you want to contribute, you can do any or all of the following 😉.
        It will go along way! Thanks again and Cheers!
      </p>

      <div className={classes.hrRoot}>
        <Grid justify="space-between" container spacing={1}>
          <Grid item xs={12} sm={3}>
            <CustomLink
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/intent/user?screen_name=Zemuldo"
            >
              <CustomButton
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<i className="fa fa-twitter color-white" />}
              >
                Follow me on Twitter
              </CustomButton>
            </CustomLink>
          </Grid>
          <Grid item xs={12} sm={3}>
            <CustomLink
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/zemuldo"
            >
              <CustomButton
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<i className="fa fa-github" />}
              >
                Follow me on GitHub
              </CustomButton>
            </CustomLink>
          </Grid>
          {/* <Grid item xs={12} sm={3}>
            <CustomLink
              rel="noopener noreferrer"
              target="_blank"
              href="https://ko-fi.com/zemuldo"
            >
              <CustomButton
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={
                  <Avatar
                    className={classes.kofiLogo}
                    src="/images/social/ko-fi.png"
                  />
                }
              >
                Support me on Ko-Fi
              </CustomButton>
            </CustomLink>
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
}
