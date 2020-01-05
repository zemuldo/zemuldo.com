import React from 'react';
import Home from '../components/home/index';
import Footer from '../components/footer';
import Entry from '../components/entry';
import Head from 'next/head';
import HeaderElements from '../components/home/head_elements';

function Index() {
  return (
    <>
      <Head>
        <HeaderElements/>
        <title>I&apos;m Zemuldo ~ Danstan Onyango, Software Engineer</title>
        <meta name="description" content="Danstan Onyango ~ Zemuldo, Software Engineer - Nairobi, Kenya, Self Taught. Elixir, Node, React, PostgreSQL. Writer @Medium, @Dev.  🚀🚀Geek🚀🚀 " />
      </Head>
      <Home />
      <Footer />
    </>
  );
}

export default Entry(Index);