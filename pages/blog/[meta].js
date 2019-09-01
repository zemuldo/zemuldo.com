import React from "react";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import post1 from "../../src/components/blog/template.md";
import Footer from "../../src/footer";
import Menu from "../../src/components/blog/menu";
import marked from "marked";
import dynamic from "next/dynamic";
import Head from "next/head";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "next/link";
import "easymde/dist/easymde.min.css";
import { maxHeight } from "@material-ui/system";
import { format } from "date-fns";
import fetch from "isomorphic-unfetch";
import { parseCookies } from "nookies";
import Avatar from '@material-ui/core/Avatar';
import NewIcon from '@material-ui/icons/NoteAdd';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EditIcon from '@material-ui/icons/Edit';
import Grid from "@material-ui/core/Grid";

const Highlight = dynamic(import("react-highlight"));

const api_url = process.env.API_URL
const base_url = process.env.BASE_URL
const base_url_domain = process.env.BASE_URL_DOMAIN


const styles = theme => ({
  devTo: {
    border: "3px solid #08a6f3",
    margin: 10,
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: "green",
    '&:hover': {
      cursor: "pointer"
    }
  },
  twitterAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: "#08a6f3",
    '&:hover': {
      cursor: "pointer"
    }
  },
  fbAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: "#00f",
    '&:hover': {
      cursor: "pointer"
    }
  },
  linkedinAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: "#08a6f3",
    '&:hover': {
      cursor: "pointer"
    }
  }
});

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
});

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: post1
    };
  }

  static async getInitialProps(ctx) {
    const { authorization } = parseCookies(ctx)
    const { meta } = ctx.query;
    const res = await fetch(`${api_url}/posts/${meta}`);
    const data = await res.json();
    let user;
    if (authorization) {
      const res = await fetch(`${api_url}/user`, { headers: { authorization } });
      user = await res.json();
    }
    return {
      user,
      authorization,
      post: data.post,
      body: data.postBody
    };
  }
  linkedInShare = () =>{
    const {post} = this.props
    const initial = 'https://www.linkedin.com/sharing/share-offsite?mini=true&url='
    const shareURL = `${initial}https%3A%2F%2Fzemuldo.com/blog/${post._id}&title=${post.title.split(' ').join('+')}`
    window.open(shareURL, 'sharer', 'toolbar=0,status=0,width=548,height=325')
  }
  fbShare = () => {
    const { post } = this.props
    const postUrl = `https%3A%2F%2Fzemuldo.com${window.location.pathname}`
    let fbShareURL = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`
    let shareURL = fbShareURL + "&amp;src=sdkpreparse'"
    window.open(shareURL, 'sharer', 'toolbar=0,status=0,width=548,height=325')
  }
  tweetShare = () => {
    const { post } = this.props
    let hashTgs = '&hashtags=' + post.tags.map(p => p.label).join(',')
    let via = '&via=zemuldo'
    let url = `&url=https%3A%2F%2F${base_url_domain}${window.location.pathname}`
    let fullURL = `${url}${via}${hashTgs}`
    let shareURL = `https://twitter.com/intent/tweet?text=${post.title}` + fullURL
    window.open(shareURL, 'sharer', 'toolbar=0,status=0,width=548,height=325')
  }
  render() {
    const { post, body, classes } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>Zemuldo Blog - {post.title}</title>
          <link href="/static/css/blog.css" rel="stylesheet" />
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@zemuldo" />
          <meta name="twitter:creator" content="@zemuldo" />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.description} />
          <meta name="twitter:image" content={post.coverPhotoUrl} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.description} />
          <meta property="og:image" content={post.coverPhotoUrl} />
          <meta property="og:url" content={`${base_url}/blog/${post._id}`} />
        </Head>
        <Container
          maxWidth="md"
          style={{
            color: "white",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "18px"
          }}
        >
          <Menu />

          <br />
          <Grid container justify="center" alignItems="center">
            {
              this.props.authorization &&
              <Link href={`/blog/${post._id}/edit`}>
                <Avatar className={classes.greenAvatar}>
                  <EditIcon />
                </Avatar>
              </Link>
            }
            <Avatar onClick={this.tweetShare} className={classes.twitterAvatar}>
              <i className="fa fa-twitter" />
            </Avatar>
            <Avatar onClick={this.fbShare} className={classes.fbAvatar}>
              <i className="fa fa-facebook" />
            </Avatar>
            <Avatar onClick={this.linkedInShare} className={classes.linkedinAvatar}>
                <i className="fa fa-linkedin" />
            </Avatar>
          </Grid>
          <h1>{post.title}</h1>
          <br />
          <p>{format(new Date(post.createdAt), "PPPP")}</p>
          {
            post.tags.map(tag => <button key={tag.value}>{tag.label}</button>)
          }
        </Container>
        <Container>
          <img
            style={{ maxHeight: "600px" }}
            src={post.coverPhotoUrl}
          />
        </Container>

        <Container
          maxWidth="md"
          style={{
            color: "white",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "18px"
          }}
        >
          <br />
          <Highlight innerHTML>{marked(body.body)}</Highlight>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Blog)