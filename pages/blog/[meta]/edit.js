import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Footer from '../../../components/footer';
import Menu from '../../../components/blog/menu';
import marked from 'marked';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Tags from '../../../components/tags';
import MetaTags from '../../../components/metaTags';
import { parseCookies } from 'nookies';
import Router, { withRouter } from 'next/router';
import SaveIcon from '@material-ui/icons/Save';
import Avatar from '@material-ui/core/Avatar';
import PublishIcon from '@material-ui/icons/Publish';
import PublishDialogue from '../../../components/publish_modal';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import Entry from '../../../components/entry';


const SimpleMDE = dynamic(import('react-simplemde-editor'), { ssr: false });

const api_url = process.env.API_URL;
const base_url = process.env.UI_URL;

const JoinNow = () => (
  <>
    <Head>
      <title>Join</title>
    </Head>
    <div
      className="home-section-background"
      data-stellar-background-ratio="0.6"
    >
      <div className="display-table">
        <div className="display-table-cell">
          <div className="container">
            <div className="row">
              <div style={{ marginTop: '30%' }} className="header-section">
                <div className="header-frame">
                  <Link href={'/blog/login?redirectTo=/blog/new'} >
                    <a style={{ fontSize: '24px' }} className="color-6">
                      <u>Click here to login</u>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
});

const useStyles = theme => ({
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#08a6f3',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
  floatingLabelFocusStyle: {
    color: '#08a6f3',
    '&:after': {
      color: '#08a6f3',
    },
  },
  materialInput: {
    borderBottom: '1px solid green',
    '&:after': {
      borderBottom: '1px solid green',
    },
    fontSize: '28px',
    color: '#08a6f3'
  },
  materialTextArea: {
    border: '1px solid transparent',
    '&:after': {
      border: '1px solid transparent',
    },
    fontSize: '16px',
    color: 'white',
    '& label.Mui-focused': {
      color: '#08a6f3',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'transparent',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'green',
      },
      '&:hover fieldset': {
        borderColor: 'green',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    }
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
});

class EditBlog extends React.Component {
  constructor(props) {
    super(props);
    const {post, body} = props;
    this.state = {
      postTitle: post.title,
      body: body.body,
      tags: post.tags,
      metaTags: (post.metaTags || []).map(t=>  {
        return {value: t, label: t};
      }),
      description: post.description,
      coverPhotoUrl: post.coverPhotoUrl,
      publishDialogueOpen: false
    };
  }

  static async getInitialProps(ctx) {
    const { authorization } = parseCookies(ctx);
    const { meta } = ctx.query;
    const _meta = meta.split('@');
    const metaLength = _meta.length;
    const __meta = _meta[metaLength-1] || _meta[0];
    const loinState = {
      loggingIn: !!ctx.query.token
    };
    let authorized =  false;
    if (authorization) {
      authorized = true;
    }
    const tagsRes = await fetch(`${api_url}/tag`);

    const options = await tagsRes.json();
    const res = await fetch(`${api_url}/post/${__meta}`);
    const data = await res.json();
    return {
      ...loinState,
      authorization,
      post: data.post,
      body: data.postBody,
      authorized,
      options,
    };
  }
  

  componentDidMount() {
    const draft = localStorage.getItem(`state_${this.props.post._id}`);
    if (draft) {
      const data = JSON.parse(draft);
      this.setState({
        coverPhotoUrl: data.coverPhotoUrl || '',
        postTitle: data.postTitle,
        body: data.body,
        tags: data.tags,
        description: data.description
      });
    }

    this.autoSave = setInterval(() => {
      this.setState({ saving: true });
      localStorage.setItem(`state_${this.props.post._id}`, JSON.stringify(this.state));
    }, 20000);
    
  }

  handleSave = () => localStorage.setItem(`state_${this.props.post._id}`, JSON.stringify(this.state))
  handleOpenPublishDialogue = () => this.setState({publishDialogueOpen: true})
  handleClosePublishDialogue = () => this.setState({publishDialogueOpen: false})
  handlePublish = async () => {
    const res = await fetch(`${api_url}/post/${this.props.post._id}`, {
      method: 'put',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        _id: this.props.post._id,
        authorId: this.props.post.authorId,
        update: {
          title: this.state.postTitle,
          body: this.state.body,
          tags: this.state.tags || [],
          metaTags: this.state.metaTags.map(t=>t.value) || [],
          description: this.state.description,
          coverPhotoUrl: this.state.coverPhotoUrl
        }

      })
    });
    if (res.status !== 200) return alert('Action failed');
    const data = await res.json();
    if (parseInt(res.status, 10) === 200) localStorage.removeItem(`state_${this.props.post._id}`);
    Router.push(`/blog/${data.post._id}`);
    this.handleClosePublishDialogue();
  }

  componentWillUnmount() {
    clearInterval(this.autoSave);
  }
  handleTagsChange = (tags) => {
    this.setState({ tags });
  }
  handleMetaTagsChange = (metaTags) => {
    this.setState({ metaTags });
  }
  handleTextChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleEditorChange = (value) => {
    this.setState({ body: value });
  }

  handleGrammarCorrect = (e) => {
    const { value } = e.target;
    this.setState({ body: value, changed: true });
  }

  render() {
    const { classes, authorized, loggingIn, options } = this.props;
    const {publishDialogueOpen} = this.state;
    if (loggingIn) return <div style={{ color: 'white' }}>Please wait...</div>;
    if (!authorized) {
      return <JoinNow />;
    }

    return (
      <>
        <PublishDialogue submitText={'Update'} message="Are you sure to update?" handlePublish={this.handlePublish} handleClose={this.handleClosePublishDialogue} open={publishDialogueOpen}/>
        <Head>
          <link href="/css/blog.css" rel="stylesheet" />
          <link href="/css/easymde.min.css" rel="stylesheet" />
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
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
            <Menu authorized={authorized}>
              <Avatar onClick={this.handleSave} className={classes.greenAvatar}>
                <SaveIcon />
              </Avatar>
              <Avatar onClick={this.handleOpenPublishDialogue} className={classes.greenAvatar}>
                <PublishIcon />
              </Avatar>
            </Menu>
           
          </Grid>

          <div className={classes.root}>
            <TextField
              id="postTitle"
              label="Post Title"
              fullWidth={true}
              value={this.state.postTitle}
              InputProps={{
                className: classes.materialInput
              }}
              InputLabelProps={{
                className: classes.floatingLabelFocusStyle,
              }}
              onChange={this.handleTextChange}
            />
          </div>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="coverPhotoUrl"
                label="Cover Photo Url"
                value={this.state.coverPhotoUrl}
                fullWidth={true}
                InputProps={{
                  className: classes.materialInput
                }}
                InputLabelProps={{
                  className: classes.floatingLabelFocusStyle,
                }}
                onChange={this.handleTextChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ marginTop: '26px' }}>
                <Tags defaultValue = {this.state.tags} onChange={this.handleTagsChange} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ marginTop: '26px' }}>
                <MetaTags options={options} defaultValue = {this.state.metaTags} onChange={this.handleMetaTagsChange} />
              </div>
            </Grid>
          </Grid>
          <br />
          <TextField
            id="description"
            label="Post Description"
            multiline
            rows="4"
            value={this.state.description}
            className={classes.materialTextArea}
            margin="normal"
            variant="outlined"
            fullWidth
            InputProps={{
              className: classes.materialTextArea
            }}
            InputLabelProps={{
              className: classes.floatingLabelFocusStyle,
            }}
            onChange={this.handleTextChange}
          />
        </Container>
        <Container
          className="blog-md"
          maxWidth="md"
          style={{
            color: 'white',
            fontFamily:
              '\'monospaced courier-new\', Poppins, sans-serif !important'
          }}
        >
          <h3>Post Body Markdown</h3>
          <SimpleMDE
            onChange={this.handleEditorChange}
            value={this.state.body}
          />
          <TextField
            id="grammar-check"
            label="Post Grammar Checker"
            multiline
            rows="40"
            value={this.state.body}
            className={classes.materialTextArea}
            margin="normal"
            variant="outlined"
            fullWidth
            InputProps={{
              className: classes.materialTextArea
            }}
            InputLabelProps={{
              className: classes.floatingLabelFocusStyle,
            }}
            onChange={this.handleGrammarCorrect}
          />
        </Container>
        <Footer />
      </>
    );
  }
}

EditBlog.propTypes = {
  post: PropTypes.object.isRequired,
  body: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  authorized: PropTypes.bool,
  loggingIn: PropTypes.bool,
  options: PropTypes.array.isRequired
};

export default Entry(withRouter(withStyles(useStyles)(EditBlog)));