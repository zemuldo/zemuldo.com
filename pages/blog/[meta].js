import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Footer from '../../components/footer';
import Menu from '../../components/blog/menu';
import Head from 'next/head';
import Link from 'next/link';
import { format } from 'date-fns';
import fetch from 'isomorphic-unfetch';
import { parseCookies } from 'nookies';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Entry from '../../components/entry';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../components/md/codeBlock';
import Image from '../../components/md/image';
import MarkdownLink from '../../components/md/link';
import ShouldRender from '../../components/tools/shouldRender';
import NoContent from '../../components/NoContent';

const api_url = process.env.API_URL;
const base_url = process.env.UI_URL;
const base_url_domain = process.env.UI_URL_DOMAIN;

const styles = () => ({
  devTo: {
    border: '3px solid #08a6f3',
    margin: 10,
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: 'green',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  twitterAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#08a6f3',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  fbAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#00f',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  linkedinAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#08a6f3',
    '&:hover': {
      cursor: 'pointer'
    }
  }
});


const urlMetaIdentifier = (meta) => {
  if (meta.includes('@')) return '@';
  return '-';
};

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: ''
    };
  }

  static async getInitialProps(ctx) {
    const { authorization } = parseCookies(ctx);
    const { meta } = ctx.query;
    const _meta = meta.split(urlMetaIdentifier(meta));
    const metaLength = _meta.length;
    const __meta = _meta[metaLength - 1] || _meta[0];
    const res = await fetch(`${api_url}/post/${__meta}`);
    const data = res.status === 200 ? await res.json() : {};
    let user;
    if (authorization) {
      const res = await fetch(`${api_url}/user`, { headers: { authorization } });
      user = await res.json();
    }
    return {
      user,
      authorization,
      post: data.post,
      body: data.postBody,
      statusCode: res.status === 200? null : res.status
    };
  }
  linkedInShare = () => {
    const { post } = this.props;
    const initial = 'https://www.linkedin.com/sharing/share-offsite?mini=true&url=';
    const shareURL = `${initial}https%3A%2F%2Fzemuldo.com/blog/post/${post._id}&title=${post.title.split(' ').join('+')}`;
    window.open(shareURL, 'sharer', 'toolbar=0,status=0,width=548,height=325');
  }
  fbShare = () => {
    const postUrl = `https%3A%2F%2Fzemuldo.com${window.location.pathname}`;
    let fbShareURL = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`;
    let shareURL = fbShareURL + '&amp;src=sdkpreparse\'';
    window.open(shareURL, 'sharer', 'toolbar=0,status=0,width=548,height=325');
  }
  tweetShare = () => {
    const { post } = this.props;
    let hashTgs = '&hashtags=' + post.tags.map(p => p.value).join(',');
    let via = '&via=zemuldo';
    let url = `&url=https%3A%2F%2Fzemuldo.com${window.location.pathname}`;
    let fullURL = `${url}${via}${hashTgs}`;
    let shareURL = `https://twitter.com/intent/tweet?text=${post.title}` + fullURL;
    window.open(shareURL, 'sharer', 'toolbar=0,status=0,width=548,height=325');
  }
  render() {
    const { post, body, classes, authorization } = this.props;
    return (
      <>
        <ShouldRender if={false}>
          <Head>
            <title>Zemuldo Blog - {post.title}</title>
            <link href="/css/blog.css" rel="stylesheet" />
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
            <meta property="og:site_name" content='Zemuldo Blog' />
            <meta property="article:published_time" content={post.createdAt} />
            <meta property="article:modified_time" content={post.updatedAt} />
            <meta property="article:author" content={'Danstan Onyango'} />
            <meta property="article:section" content={'Technology'} />
            <meta property="article:tag" content={'Technology'} />
            <meta property="og:description" content={post.description} />
            <meta property="og:image" content={post.coverPhotoUrl} />
            <meta property="og:url" content={`${base_url}/blog/${post._id}`} />

            <meta name="keywords" content={(post.metaTags || []).join(',')}/>
          </Head>
          <Container
            maxWidth="md"
            style={{
              color: 'white',
              fontFamily: '\'Courier New\', Courier, monospace',
              fontSize: '18px'
            }}
          >
            <Grid container justify="center" alignItems="center">
              <Menu authorization={authorization}>
                {
                  this.props.authorization &&
                <Link href={`/blog/${post._id}/edit`}>
                  <Avatar className={classes.greenAvatar}>
                    <EditIcon />
                  </Avatar>
                </Link>
                }
              </Menu>

            </Grid>
            <h1>{post.title}</h1>

            <p>Posted {format(new Date(post.createdAt), 'PPPP')}</p>
            <div className='blog-tags'>

              {
                post.tags.map(tag =>
                  <span className='blog-tags' style={{ color: tag.color, boxShadow: '0 8px 15px 0 rgba(95, 91, 95, .33)', backgroundColor: 'black', border: 'solid 2px transparent', borderRadius: '3px', cursor: 'pointer' }} key={tag.value}>
                    {tag.label}
                  </span>)
              }
            </div>
            <Grid className='blog-share-buttons' container>
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
          </Container>
          <Container>
            <img
              style={{ maxHeight: '720px', marginTop: '10px'}}
              src={post.coverPhotoUrl}
              alt={post.title}
            />
          </Container>

          <Container
            className='blog-body'
            maxWidth="md"
            style={{
              color: 'white',
              fontFamily: '\'Courier New\', Courier, monospace',
              fontSize: '18px'
            }}
          >
            <br />
            <ReactMarkdown
              source={body.body}
              renderers={{ code: CodeBlock, image: Image, link: MarkdownLink }}
            />
          </Container>
        
        </ShouldRender>
        <ShouldRender if={!post}>
          <NoContent/>
        </ShouldRender>
        <Footer />
      </>
    );
  }
}

Blog.propTypes = {
  post: PropTypes.object.isRequired,
  body: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  authorization: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

export default Entry(withStyles(styles)(Blog));