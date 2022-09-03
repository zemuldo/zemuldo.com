import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../footer';
import Menu from './Menu';
import Head from 'next/head';
import { format } from 'date-fns';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import HighlightIcon from '@material-ui/icons/Highlight';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../md/code_block';
import Image from '../md/image';
import MarkdownLink from '../md/link';
import Heading from '../md/heading';
import ShouldRender from '../tools/shouldRender';
import NoContent from '../NoContent';
import { withRouter } from 'next/router';
import Closing from './closing';
import { postUrl } from '../tools';

const { STATIC_IMAGES_URL } = process.env

const api_url = process.env.API_URL;
const base_url = process.env.UI_URL;
const base_url_domain = process.env.UI_URL_DOMAIN;
const ex_api_url = process.env.EX_API_URL;

const useStyles = makeStyles(() => ({
  devTo: {
    border: '3px solid #08a6f3',
    margin: 10,
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: 'green',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  twitterAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#08a6f3',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  fbAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#00f',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  linkedinAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#08a6f3',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const ViewBlog = (props) => {
  useEffect(() => {
    const anchored = window.location.href.split('#')?.[1];
    if (anchored) {
      const elm = document.getElementById(anchored);
      elm.scrollIntoView();
    }
  },  []);
  const classes = useStyles();
  const { post, body, authorized } = props;

  const setAsFeatured = async () => {
    const { authorization, post} = props;
    await fetch(`${api_url}/post/${post._id}/set_as_featured`, {
      method: 'POST',
      headers: { authorization}
    });
  };

  const linkedInShare = () => {
    const { post } = props;
    const initial =
      'https://www.linkedin.com/sharing/share-offsite?mini=true&url=';
    const shareURL = `${initial}https%3A%2F%2Fzemuldo.com/blog/post/${post._id
    }&title=${post.title.split(' ').join('+')}`;
    window.open(shareURL, 'sharer', 'toolbar=0,status=0,width=548,height=325');
  };
  const fbShare = () => {
    const postUrl = `https%3A%2F%2Fzemuldo.com${window.location.pathname}`;
    let fbShareURL = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`;
    let shareURL = fbShareURL + '&amp;src=sdkpreparse\'';
    window.open(shareURL, 'sharer', 'toolbar=0,status=0,width=548,height=325');
  };
  const tweetShare = () => {
    const { post } = props;
    let hashTgs = '&hashtags=' + post.tags.map((p) => p.value).join(',');
    let via = '&via=zemuldo';
    let url = `&url=https%3A%2F%2Fzemuldo.com${window.location.pathname}`;
    let fullURL = `${url}${via}${hashTgs}`;
    let shareURL =
      `https://twitter.com/intent/tweet?text=${post.title}` + fullURL;
    window.open(shareURL, 'sharer', 'toolbar=0,status=0,width=548,height=325');
  };

  const url = postUrl(post._id, post.title);
  return (
    <>
      <ShouldRender if={!!post}>
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
          <meta property="og:site_name" content="Zemuldo Blog" />
          <meta property="article:published_time" content={post.createdAt} />
          <meta property="article:modified_time" content={post.updatedAt} />
          <meta property="article:author" content={'Danstan Onyango'} />
          <meta property="article:section" content={'Technology'} />
          <meta property="article:tag" content={'Technology'} />
          <meta property="og:description" content={post.description} />
          <meta property="og:image" content={post.coverPhotoUrl} />
          <meta property="og:url" content={`${base_url}/blog/${post._id}`} />

          <meta name="keywords" content={(post.metaTags || []).join(',')} />
        </Head>
        <Menu authorized={authorized} />
        <Container
          maxWidth="md"
          style={{
            fontSize: '18px',
          }}
        >

          <h1>{post.title}</h1>

          <p>Posted {format(new Date(post.createdAt), 'PPPP')}</p>
          <div className="blog-tags">
            {post.tags.map((tag) => (
              <span
                className="blog-tags"
                style={{
                  color: tag.color,
                  boxShadow: '0 8px 15px 0 rgba(95, 91, 95, .33)',
                  backgroundColor: 'black',
                  border: 'solid 2px transparent',
                  borderRadius: '3px',
                  cursor: 'pointer',
                }}
                key={tag.value}
              >
                {tag.label}
              </span>
            ))}
          </div>
          <Grid className="blog-share-buttons" container>
            <Avatar
              onClick={tweetShare}
              className={classes.twitterAvatar}
            >
              <i className="fa fa-twitter" />
            </Avatar>
            <Avatar onClick={fbShare} className={classes.fbAvatar}>
              <i className="fa fa-facebook" />
            </Avatar>
            <Avatar
              onClick={linkedInShare}
              className={classes.linkedinAvatar}
            >
              <i className="fa fa-linkedin" />
            </Avatar>
            {authorized && (
              <>
                <Avatar
                  onClick={() =>
                    props.router.push(`/blog/${post._id}/edit`)
                  }
                  className={classes.greenAvatar}
                >
                  <EditIcon />
                </Avatar>

                <Avatar
                  onClick={() =>
                    setAsFeatured()
                  }
                  className={classes.greenAvatar}
                >
                  <HighlightIcon />
                </Avatar>
              </>
            )}
          </Grid>
        </Container>
        <Container>
          <img
            style={{ maxHeight: '720px', marginTop: '10px' }}
            src={post.coverPhotoUrl.replace('https://zemuldo.com/z-site-images', STATIC_IMAGES_URL)}
            alt={post.title}
          />
        </Container>

        <Container
          className="blog-body"
          maxWidth="md"
         
        >
          <br />
          <ReactMarkdown
            source={body.body}
            renderers={{
              /* eslint-disable */
              code: (props) => <CodeBlock post_id={post._id} {...props} />,
              image: Image,
              link: MarkdownLink,
              /* eslint-disable */
              heading: (props) => <Heading href={url} {...props}  />,
            }}
          />
        </Container>
        <Container
          maxWidth="md"
          style={{
            fontFamily: '\'Roboto\', Courier, monospace',
            fontSize: '18px',
          }}
        >
          <Closing />
        </Container>
      </ShouldRender>
      <ShouldRender if={!post}>
        <NoContent />
      </ShouldRender>
      <Footer />
    </>
  );
};

ViewBlog.propTypes = {
  post: PropTypes.object.isRequired,
  body: PropTypes.object.isRequired,
  router: PropTypes.object,
  authorized: PropTypes.bool,
  authorization: PropTypes.string,
};

export default withRouter((ViewBlog));
