import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Footer from '../../../components/footer';
import Menu from '../../../components/blog/menu';
import marked from 'marked';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Tags from '../../../components/tags';
import Router, { withRouter } from 'next/router';
import SaveIcon from '@material-ui/icons/Save';
import Avatar from '@material-ui/core/Avatar';
import PublishIcon from '@material-ui/icons/Publish';
import PublishDialogue from '../../../components/publish_modal';
import fetch from 'isomorphic-unfetch';
import { parseCookies } from 'nookies';
import PropTypes from 'prop-types';
import Notification from '../../../components/notification';
import Entry from '../../../components/entry';

const SimpleMDE = dynamic(import('react-simplemde-editor'), { ssr: false });

const api_url = process.env.API_URL;

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

class NewBlog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggingIn: props.loggingIn,
      body: '',
      postTitle: '',
      coverPhotoUrl: '',
      description: '',
      publishDialogueOpen: false,
      _update: {}
    };
  }

  static async requiresAuth(){
    return true;
  }

  static async getInitialProps(ctx) {
    const { draftId } = ctx.query;
    const { authorization } = parseCookies(ctx);

    if (!authorization) return {statusCode: 401};

    const draftRes = await fetch(`${api_url}/post/draft/${draftId}`, {
      method: 'get',
      headers: { authorization, 'Accept': 'application/json', 'Content-Type': 'application/json' }
    });

    if (draftRes.status !== 200) {
      return {statusCode: 400, authorization};
    }
    
    let data;
    try {
      data = await draftRes.json();
    } catch (_e){
      data = null;
    }
    return { draft: data, authorization };
  }

  componentDidMount() {
    const { draft } = this.props;
    if (draft) {
      this.setState({
        coverPhotoUrl: draft.coverPhotoUrl || '',
        postTitle: draft.title || '',
        body: draft.body || '',
        tags: draft.tags,
        description: draft.description || ''
      });
      this.autoSave = setInterval(() => {
        this.setState({ saving: true });
        this.handleSave();
      }, 10000);
    }
  }

  sync = (draft) =>{
    this.setState({
      coverPhotoUrl: draft.coverPhotoUrl || '',
      postTitle: draft.title || '',
      body: draft.body || '',
      tags: draft.tags,
      description: draft.description || '',
      changed: false
    });
  }

  handleSave = async () => {
    if (!this.state.changed) return;
    this.setState({changed: false});
    window.notification('Saving...');
    const { draft } = this.props;
    
    if (!draft) return;
    const last_update = this.state._update.updatedAt || draft.updatedAt;
    const { authorization } = this.props;
    const _res = await fetch(`${api_url}/post/draft/${draft._id}`, {
      method: 'put',
      headers: { authorization, 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: this.state.postTitle,
        body: this.state.body,
        tags: this.state.tags || [],
        description: this.state.description,
        coverPhotoUrl: this.state.coverPhotoUrl,
        last_update
      })
    });

    if (_res.status === 200){
      const data = await _res.json();
      if (data.rejected) this.sync(data);
      this.setState({ _update: data, });
      return window.notification('Saved');
    } 
    window.notification('Error while saving..', {error: true});
  }
  handleOpenPublishDialogue = () => this.setState({ publishDialogueOpen: true })
  handleClosePublishDialogue = () => this.setState({ publishDialogueOpen: false })
  handlePublish = async () => {
    const { authorization, draft } = this.props;
    const res = await fetch(`${api_url}/post`, {
      method: 'post',
      headers: { authorization, 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: this.state.postTitle,
        body: this.state.body,
        tags: this.state.tags || [],
        description: this.state.description,
        coverPhotoUrl: this.state.coverPhotoUrl,
        draftId: draft._id
      })
    });
    const data = await res.json();
    if (parseInt(res.status, 10) !== 200) return alert(data[0].errorMessage);
    Router.push(`/blog/${data.post._id}`);
    this.handleClosePublishDialogue();
    localStorage.removeItem(`state_${draft._id}`);
  }

  componentWillUnmount() {
    clearInterval(this.autoSave);
  }
  handleTagsChange = (tags) => {
    this.setState({ tags, changed: true });
  }

  handleTextChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value, changed: true });
  };

  handleEditorChange = (value) => {
    this.setState({ body: value, changed: true });
  }

  handleGrammarCorrect = (e) => {
    const { value } = e.target;
    this.setState({ body: value, changed: true });
  }

  render() {
    const { classes, authorization, draft } = this.props;
    const { publishDialogueOpen } = this.state;
    return (
      <>
        <PublishDialogue
          message="Are you sure this is ready for publishing? Clicking publish will publish this post. If you still have editing to do, just click Not yet!"
          handlePublish={this.handlePublish}
          handleClose={this.handleClosePublishDialogue}
          open={publishDialogueOpen}
        />
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
            <Menu authorization = {authorization}>
              <Avatar onClick={this.handleSave} className={classes.greenAvatar}>
                <SaveIcon />
              </Avatar>
              <Avatar onClick={this.handleOpenPublishDialogue} className={classes.greenAvatar}>
                <PublishIcon />
              </Avatar>
            </Menu>
          </Grid>
        </Container>
        <Grid container justify="center" alignItems="center">
          <Grid container spacing={4}>
            {
              !draft && 
              <div className='center-content'>
                <h1>Sorry Nothing here 😭😭</h1>
              </div>
             
            }
          </Grid>
        </Grid>
        {
          draft && <>
            <Container
              maxWidth="md"
              style={{
                color: 'white',
                fontFamily: '\'Courier New\', Courier, monospace',
                fontSize: '18px'
              }}
            >

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
                    <Tags defaultValue={this.state.tags} onChange={this.handleTagsChange} />
                  </div>
                </Grid>
              </Grid>
              <br />
              <a rel='noopener noreferrer' target='_blank' href={`/blog/draft/${draft._id}/preview`} >Preview</a>
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
          </>
       
        }
        <Footer />
        <Notification/>
      </>
    );
  }
}

NewBlog.propTypes = {
  classes: PropTypes.object.isRequired,
  loggingIn: PropTypes.bool,
  authorization: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  draft: PropTypes.object.isRequired
};

export default Entry(withRouter(withStyles(useStyles)(NewBlog)));