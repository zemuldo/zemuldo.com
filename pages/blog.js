import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import fetch from "isomorphic-unfetch";
import Footer from "../src/footer";
import Blogs from "../src/components/blog/blogs";
import Menu from "../src/components/blog/menu";
import LinearProgress from '@material-ui/core/LinearProgress';
import { parseCookies } from "nookies";
import Avatar from '@material-ui/core/Avatar';
import NewIcon from '@material-ui/icons/NoteAdd';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Head from "next/head";

const api_url = process.env.API_URL
const base_url = process.env.BASE_URL

const styles = theme => ({
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: "#08a6f3",
  },
  avatar: {
    margin: 10,
  },
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

  static async getInitialProps(ctx) {
    const { authorization } = parseCookies(ctx)
    const res = await fetch(`${api_url}/posts?skip=0&limit=10`);
    const data = await res.json();
    const res_featured = await fetch(`${api_url}/posts/latest`);
    const data_featured = await res_featured.json();
    let user;
    if (authorization) {
      const res = await fetch(`${api_url}/user`, { headers: { authorization } });
      user = await res.json();
    }
    return {
      featurePost: data_featured,
      user,
      authorization,
      posts: data
    };
  }

  infiniteScroll = async (inView, _) => {
    const { lastLength, limit } = this.state
    if (inView && lastLength != 0) {
      this.setState({ fetching: true })
      const res = await fetch(`${api_url}/posts?skip=${this.state.posts.length}&limit=${limit}`)
      const data = await res.json();
      this.setState({ posts: this.state.posts.concat(data), lastLength: data.length })
      this.setState({ fetching: false })
    }

  }


  render() {
    const { classes, featurePost } = this.props;
    const { posts } = this.state;
    return (
      <React.Fragment>
        <Head>
          <title>Zemuldo-Blog</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@zemuldo" />
          <meta name="twitter:creator" content="@zemuldo" />
          <meta name="twitter:title" content="Danstan Onyango - Zemuldo Blog" />
          <meta name="twitter:description" content="A blog by user @zemuldo writing on tech topics" />
          <meta name="twitter:image" content="https://zemuldo.com/static/images/logo/black.jpg" />
        </Head>
        <Container style={{ color: "white" }} maxWidth="md">
          <Menu />
          <Grid container justify="center" alignItems="center">
           {
             this.props.authorization &&
             <Link href="/blog/new">
             <Avatar className={classes.greenAvatar}>
               <NewIcon />
             </Avatar>
           </Link>
           }

            {this.props.user && <Avatar alt="User profile" src="/static/images/avatar/1.jpg" className={classes.avatar} src={this.props.user.profilePhotoUrl} />}
            {
              !this.props.user &&
              <Link href={`/login?redirectTo=${base_url}/blog`}>
             <Avatar className={classes.greenAvatar}>
               <AddCircleOutlineIcon />
             </Avatar>
             </Link>
            }
          </Grid>
        </Container>
        <Container style={{ color: "white" }} maxWidth="md">

          {
            featurePost && featurePost.post &&
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
            <Grid style ={{minHeight: "400px"}} className="eph" container>
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
                    {featurePost.post.title}
                    </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    {featurePost.post.description}
                    </Typography>
                  <Link style={{ color: "#08a6f3" }} href={`/blog/${featurePost.post._id}`}>
                    Read Now
                    </Link>
                </div>
              </Grid>
            </Grid>
          </Paper>
          }
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