import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function PleaseWait() {
    
  return (
    <>
      <Container maxWidth="md">

        <Grid container justify="center" alignItems="center">
          <Grid container spacing={4}>
            <div className='center-content'>
              <h1>Please wait</h1>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}