import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import fetch from 'isomorphic-unfetch';
import Footer from '../components/footer';
import Blogs from '../components/blog/blogs';
import Menu from '../components/blog/menu';
import LinearProgress from '@material-ui/core/LinearProgress';
import { parseCookies } from 'nookies';
import Head from 'next/head';
import PropTypes from 'prop-types';
import CustomLink from '../components/link';
import Entry from '../components/entry';

const api_url = process.env.API_URL;

const styles = theme => ({
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#08a6f3',
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
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundColor: 'transparent',
    opacity: '0.9',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    border: 'solid 1px grey',
    borderRadius: '7px',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: 'flex'
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
    super(props);
    this.state = {
      posts: this.props.posts,
      lastLength: 10,
      limit: 10
    };
  }

  static async getInitialProps(ctx) {
    const { authorization } = parseCookies(ctx);
    const res = await fetch(`${api_url}/post?skip=0&limit=10`);
    const data = await res.json();
    const res_featured = await fetch(`${api_url}/post/latest`);
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
    const { lastLength, limit } = this.state;
    if (inView && lastLength !== 0) {
      this.setState({ fetching: true });
      const res = await fetch(`${api_url}/post?skip=${this.state.posts.length}&limit=${limit}`);
      const data = await res.json();
      this.setState({ posts: this.state.posts.concat(data), lastLength: data.length });
      this.setState({ fetching: false });
    }

  }


  render() {
    const { classes, featurePost, authorization } = this.props;
    const { posts } = this.state;
    return (
      <>
        <Head>
          <title>Zemuldo Blog - I write and Share my Experience.</title>
          <meta name="description" content="Blog by Danstan Onyango, Software Engineer, Nairobi, Kenya. Tech articles, Tutorials and Reviews. Sharing content that inspires." />
        </Head>
        <Container style={{ color: 'white' }} maxWidth="md">

          <Grid container justify="center" alignItems="center">
            <Menu authorization={authorization} />

          </Grid>
        </Container>
        <Container style={{ color: 'white' }} maxWidth="md">

          <CustomLink href={`/blog/${featurePost.post.title.toLowerCase().split(' ').join('-')}-${featurePost.post._id}`}>
            {
              featurePost && featurePost.post &&
              <Paper style={{
                backgroundImage: `url(${featurePost.post.coverPhotoUrl})`
              }} className={classes.mainFeaturedPost}>
                <div style={{ backgroundColor: 'rgb(23, 23, 23)', opacity: .7 }} className={classes.overlay} />
                <Grid style={{ minHeight: '400px' }} className="eph" container>
                  <Grid item md={6}>

                    <div className={classes.mainFeaturedPostContent}>
                      <Typography
                        component="h1"
                        variant="h3"
                        color="inherit"
                        gutterBottom
                        style={{
                          color: '#08a6f3',
                          fontFamily: '\'Courier New\', Courier, monospace'
                        }}
                      >
                        {featurePost.post.title}
                      </Typography>
                      <Typography style={{ color: 'white' }} variant="h5" color="inherit" paragraph>
                        {featurePost.post.description}
                      </Typography>
                      <span>Read Now</span>
                    </div>

                  </Grid>
                </Grid>
              </Paper>
            }
          </CustomLink>
          <Blogs _infiniteScroll={this.infiniteScroll} posts={posts} />
          <br />
          {this.state.fetching && <div style={{ flexGrow: 1, color: 'white' }}><LinearProgress /> </div>}
        </Container>
        <Footer />
      </>
    );
  }
}

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  authorization: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  user: PropTypes.object,
  featurePost: PropTypes.object.isRequired,
};

export default Entry(withStyles(styles)(Blog));