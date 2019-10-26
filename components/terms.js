import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { setCookie } from 'nookies';

export default function AcceptTerms({accepted_terms}) {
  const [accepted_terms_now, acceptTerms] = useState(null);
  const agreedToTerms = ()=>{
    acceptTerms('1');
    setCookie({}, 'accepted_terms', '1', {
      maxAge: 10 * 365 * 24 * 60 * 60,
      path: '/',
    });
  };
  if (accepted_terms === '1' || accepted_terms_now === '1') return null;
  return (
    <React.Fragment>
      
      <div style={{
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        zIndex: 9999,
        color: 'white',
        display: 'flex',
        width: '100%',
        backgroundColor: 'black',
        margin: 'auto',
        alignContent: 'center',
        borderTop: 'solid 1px #08a6f3'
      }}>
        <Container style={{ padding: '12px 5px 12px 5px', color: 'white' }} maxWidth="md">
          <span>
              By using this site, you acknowledge that you have read and understand the
            <a className='color-black' target="_blank" rel="noopener noreferrer" href='/cookie_policy'> Cookie Policy</a>,
            <a target="_blank" rel="noopener noreferrer" href='/privacy_policy'> Privacy Policy</a>, and the
            <a target="_blank" rel="noopener noreferrer" href='/terms_conditions'> Terms. </a>
          </span>
          <a href={null} style={{color: 'white'}} onClick={agreedToTerms} > Close </a>
        </Container>

      </div> 
    </React.Fragment>
  );
}

AcceptTerms.propTypes = {
  accepted_terms: PropTypes.string
};
