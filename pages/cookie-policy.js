import React from 'react';
import { Container } from '@material-ui/core';
import Head from 'next/head';
import Entry from '../components/entry';

function CookiePolicy() {
  return (
    <Container maxWidth="sm" >
      <Head>
        <title>Zemuldo - Website Cookie Policy</title>
        <meta name="description" content="This page describes the cookie policy that applies to this website. Users of this website expected to read and understand this policy." />
      </Head>
      <div style={{color: 'white'}}>
        <h1>Cookie Policy</h1>

        <p>
          This is the Cookie Policy for Website Zemuldo, accessible from 
          <a href='https://zemuldo.com/cookie_policy'> here. </a>
        </p>

        <h2>What Are Cookies</h2>

        <p>
          As is common practice with almost all professional websites this site uses cookies, 
          which are tiny files that are downloaded to your computer, to improve your experience. 
          This page describes what information the site gathers, how it uses it and why the 
          site sometimes need to store these cookies. 
          This page also shares how you can prevent these cookies from being 
          stored however this may downgrade or <b>break</b> certain elements of the sites functionality.
        </p>

        <p>
          For more general information on cookies see this
          <a href='https://en.wikipedia.org/wiki/HTTP_cookie'>
            {' '} Wikipedia article on HTTP Cookies.
          </a>
        </p>

        <h2>How This Site Uses Cookies</h2>

        <p>
          This site uses cookies for a variety of reasons detailed below.
          Unfortunately in most cases there are no industry standard options for 
          disabling cookies without completely disabling the functionality and features they add to this site.
          It is recommended that you leave on all cookies if you are not sure whether 
          you need them or not in case they are used to provide a service that you use.
        </p>

        <h2>Disabling Cookies</h2>

        <p>
          You can prevent the setting of cookies by adjusting the settings on your browser 
          (see your browser Help for how to do this).
          Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.
          Disabling cookies will usually result in also disabling certain functionality and features of the this site.
          Therefore it is recommended that you do not disable cookies.
        </p>

        <h2>The Cookies Site Sets Cookies</h2>

        <ul style={{marginLeft: '20px'}}>
          <li>
            <p>Login related cookies</p>
            <p>
              The site uses cookies when you are logged in so that you stay signed in for better experience.
              This prevents you from having to log in every single time you visit a new page.
              These cookies are typically removed or cleared when you log out to ensure that you can only access
              restricted features and areas when logged in.
            </p>
          </li>
        </ul>

        <h2>Third Party Cookies</h2>

        <p>
          In some special cases the site also use cookies provided by trusted third parties. 
          The following section details which third party cookies you might encounter through this site.
        </p>

        <ul style={{marginLeft: '20px'}}>

          <li>
            <p>
              This site uses Google Analytics which is one of the most widespread and trusted 
              analytics solution on the web for helping us to understand how you use the site 
              and ways that the site can be improved your experience. 
              These cookies may track things such as how long you spend on the site and the pages 
              that you visit so the site can continue to produce engaging content.</p>
            <p>
              For more information on Google Analytics cookies, see the official Google Analytics page.
            </p>
          </li>

        </ul>

        <h2>More Information</h2>

        <p>
          Hopefully that has clarified things for you and as was previously 
          mentioned if there is something that you are not sure whether you 
          need or not it is usually safer to leave cookies enabled in case it does 
          interact with one of the features you use on our site. 
          This Cookies Policy was created with the help of the 
        </p>

        <p>
          However if you are still looking for more information then you can contact me 
          through email on the home page.
        </p>
      </div>
    </Container>

  );
}

export default Entry(CookiePolicy);