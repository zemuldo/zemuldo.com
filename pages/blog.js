import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import post1 from "../src/components/blog/template.md";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Footer from '../src/footer'
import Blogs from "../src/components/blog";
import Menu from "../src/components/blog/menu";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundColor: "transparent",
    opacity: "0.9",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  }
}));

const featuredPosts = [
  {
    id: "f8a27bc3d",
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content."
  },
  {
    id: "7bf8a2c3d",
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content."
  }
];

const social = ["GitHub", "Twitter", "Facebook"];

export default function Blog() {
  const classes = useStyles();

  return (
    
          <React.Fragment>
            <CssBaseline />
            <Container style={{color: "white"}} maxWidth="lg">
              <Menu/>
              <main>
                {/* Main featured post */}
                <Paper className={classes.mainFeaturedPost}>
                  {/* Increase the priority of the hero background image */}
                  {
                    <img
                      style={{ display: "none" }}
                      src="https://source.unsplash.com/user/erondu"
                      alt="background"
                    />
                  }
                  <div className={classes.overlay} />
                  <Grid className="eph" container>
                    <Grid item md={6}>
                      <div  className={classes.mainFeaturedPostContent}>
                        <Typography
                          component="h1"
                          variant="h3"
                          color="inherit"
                          gutterBottom
                          style={{
                            color: "#08a6f3",
                            fontFamily: "'Courier New', Courier, monospace"
                          }}
                        >
                          How to use Ecto as a query validation utility.
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                          Multiple lines of text that form the lede, informing
                          new readers quickly and efficiently about what&apos;s
                          most interesting in this post&apos;s contents.
                        </Typography>
                        <Link style={{color: "#08a6f3"}} href="/blog/hello-web">Read Now</Link>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
                <Blogs/>
              </main>
            </Container>
            <Footer/>
          </React.Fragment>
  );
}

Blog.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};
