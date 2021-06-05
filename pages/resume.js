import React, { useState } from 'react';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import PageLayout from '../components/PageLayout';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ShouldRender from '../components/tools/ShoulRender';

import ReCAPTCHA from 'react-google-recaptcha';


const ex_api_url = process.env.EX_API_URL;

function validateEmail(mail) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
    return (true);
  }
  return (false);
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '37ch',
    },
  },
  floatingLabelFocusStyle: {
    color: '#08a6f3',
    '&:after': {
      color: '#08a6f3',
    },
  },
  materialInput: {
    borderBottom: '1px solid green',
    '&:after': {
      borderBottom: '1px solid green',
    },
    fontSize: '22px',
    color: '#08a6f3',
  },
  materialTextArea: {
    width: '305px',
    height: '80px',
    border: '1px solid transparent',
    '&:after': {
      border: '1px solid transparent',
    },
    fontSize: '14px',
    color: 'white',
    '& label.Mui-focused': {
      color: '#08a6f3',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'transparent',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#393939',
      },
      '&:hover fieldset': {
        borderColor: '#393939',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#393939',
      },
    },
  },
}));

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    width: '305px',
    height: '60px',
    fontSize: 28,
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
      backgroundColor: '#0063cc',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#08a6f3',
      borderColor: '#08a6f3',
    },
    '&:disabled': {
      boxShadow: 'none',
      backgroundColor: '#393939',
      borderColor: '#393939',
    },
    '&:focus': {
      backgroundColor: '#0063cc',
    },
  },
})(Button);

const ResumePage = () => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [recaptchaChallengeValue, setRecaptchaChallengeValue] = useState(null);
  const [emailValid, setEmailValid] = useState(false);
  const [resumeSent, setResumeSent] = useState(false);
  const [operationError, setOperationError] = useState(null);

  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
    setEmailValid(validateEmail(e.target.value));
  };

  const sendEmail = async () =>{
    const res = await fetch(`${ex_api_url}/api/resume/share`, {
      method: 'post',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        recaptchaChallengeValue
      }),
    });

    if (res.status === 200){
      setResumeSent(true);
    } else setResumeSent(setOperationError('Something went wrong. Please try again.'));
  };

  return (
    <>
      <Head>
        <title>I&apos;m Danstan ~ Resume</title>
      </Head>
      <PageLayout style={{ marginTop: '30%' }}>
        <Grid
          style={{ marginTop: '30%' }}
          justify="space-between"
          container
          spacing={2}
        >
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={12}>
            <ShouldRender condition={!resumeSent} >
              <h2 style={{ color: '#08a6f3' }}>
              I am currently engaged and not actively looking for a new role..{' '}
              </h2>
              <h4>You can still get my Resume sent to your E-mail.</h4>
              <div className={classes.root}>
                <TextField
                  id="visitor-email"
                  label="Your Email"
                  value={email}
                  className={classes.materialTextArea}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    className: classes.materialTextArea,
                  }}
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                  }}
                  onChange={handleEmailChange}
                />
                <br />
                <br />
                <ReCAPTCHA
                  size={3}
                  style={{ width: '100%' }}
                  sitekey="6LclNpEaAAAAAOT0OhneHJiBdl5yvTG5jBzrUeO2"
                  onChange={(value) => setRecaptchaChallengeValue(value)}
                />
                <br/> 

                <BootstrapButton
                  onClick={sendEmail}
                  disabled={!emailValid || !recaptchaChallengeValue}>
                  Send Resume
                </BootstrapButton>
              </div>
            </ShouldRender>
            <ShouldRender condition={resumeSent && !operationError}>
              <h2 style={{ color: '#08a6f3' }}>
              Sent! Please check your email.
              </h2>
            </ShouldRender>

            <ShouldRender condition={operationError}>
              <h2 style={{ color: '#08a6f3' }}>
                {operationError}
              </h2>
            </ShouldRender>
          </Grid>
        </Grid>
      </PageLayout>
    </>
  );
};

export default ResumePage;
