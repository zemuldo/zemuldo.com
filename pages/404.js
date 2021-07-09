import React from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
const Styles = {};

const errorWrapper = (code, message) => {
  return (<div 
    style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif', 
      height: '100vh', 
      textAlign: 'center', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center' }}
  >
    <div>
      <h1 
        style={{
          display: 'inline-block', 
          borderRight: '1px solid', 
          margin: 0, marginRight: '10px', 
          padding: '10px 23px 10px 0', 
          fontSize: '24px', 
          fontWeight: 500, 
          verticalAlign: 'top' }}
      >
        {code}
        <span style={{marginLeft: '20px'}}>|</span>
      </h1>
      <div style={{ display: 'inline-block', textAlign: 'left', lineHeight: '49px', height: '49px', verticalAlign: 'middle' }}>
        <h2 style={{ fontSize: '14px', fontWeight: 'normal', lineHeight: 'inherit', margin: 0, padding: 0 }}>{message}{/* */}
        </h2>
      </div>
    </div>
  </div>);
};
  

export default function FourOhFour() {
  return <>
    <div>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: Styles }} />
      </Head>
      <Container className="pt-5 text-center">
        {errorWrapper(404, 'The page can not be found.')}
      </Container>
    </div>
  </>;
}