import React from "react";
import { withStyles } from "@material-ui/core/styles";
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
import Footer from "../src/footer";
import Blogs from "../src/components/blog/blogs";
import Menu from "../src/components/blog/menu";
import LinearProgress from '@material-ui/core/LinearProgress';
import { getCookies } from 'cookies-next'
import axios from 'axios'
import { parseCookies } from "nookies";

const styles = theme => ({
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
    border: "solid 1px grey",
    borderRadius: "7px",
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
      padding: theme.spacing(3),
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
});

class Blog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: this.props.posts,
      lastLength: 10,
      limit: 10
    }
  }

  componentDidMount() {
    // axios.get('http://localhost:8090/user/auth/user',  {
    //   withCredentials: true
    // })
    // .then(res=>{
    //   console.log(res)
    // })

  }

  static async getInitialProps(ctx) {
    const { authorization } = parseCookies(ctx)
    const res = await fetch('http://localhost:8090/posts?skip=0&limit=10',
      {
        headers: {
          authorization
        }
      }
    );
    const data = await res.json();
    return {
      authorization,
      posts: data
    };
  }

  infiniteScroll = async (inView, _) => {
    const { lastLength, limit } = this.state
    if (inView && lastLength != 0) {
      this.setState({ fetching: true })
      const res = await fetch(`http://localhost:8090/posts?skip=${this.state.posts.length}&limit=${limit}`,
        {
          headers: {
            authorization: this.props.authorization
          }
        }
      )
      const data = await res.json();
      this.setState({ posts: this.state.posts.concat(data), lastLength: data.length })
      this.setState({ fetching: false })
    }

  }


  render() {
    const { classes } = this.props;
    const { posts } = this.state;
    return (
      <React.Fragment>
        <Container style={{ color: "white" }} maxWidth="md">
          <h4 style={{ float: "right" }}>
            <Link style={{ color: "#08a6f3" }} href="/blog/new" as="/blog/new">
              Create
            </Link>
            {' | '}
            <Link style={{ color: "#08a6f3" }} href={`/login?redirectTo=http://localhost:3001/blog`}>
              Join
            </Link>
          </h4>
          <Menu />

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
                <div className={classes.mainFeaturedPostContent}>
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
                    Multiple lines of text that form the lede, informing new
                    readers quickly and efficiently about what&apos;s most
                    interesting in this post&apos;s contents.
                    </Typography>
                  <Link style={{ color: "#08a6f3" }} href="/blog/[meta]" as="/blog/blog-meta">
                    Read Now
                    </Link>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Blogs infiniteScroll={this.infiniteScroll} posts={posts} />
          <br />
          {this.state.fetching && <div style={{ flexGrow: 1, color: "white" }}><LinearProgress /> </div>}
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(Blog);