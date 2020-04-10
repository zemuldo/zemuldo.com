import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Footer from '../../components/footer';
import Menu from '../../components/blog/menu';
import marked from 'marked';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Tags from '../../components/tags';
import Router, { withRouter } from 'next/router';
import SaveIcon from '@material-ui/icons/Save';
import Avatar from '@material-ui/core/Avatar';
import PublishIcon from '@material-ui/icons/Publish';
import PublishDialogue from '../../components/publish_modal';
import fetch from 'isomorphic-unfetch';
import { parseCookies } from 'nookies';
import PropTypes from 'prop-types';
import Entry from '../../components/entry';


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
      publishDialogueOpen: false
    };
  }

  static async getInitialProps(ctx) {
    const { authorization } = parseCookies(ctx);

    return { authorization };
  }

  componentDidMount() {
    const {authorization} = this.props;
    if (!authorization) window.location = '/blog/login?redirectTo=/blog/new';

    const draft = localStorage.getItem('currentDraft');
    if (draft) {
      
      const data = JSON.parse(draft);
      const { postTitle, coverPhotoUrl, tags, description } = data;
      if (postTitle || coverPhotoUrl || tags || description) this.setState({
        coverPhotoUrl: data.coverPhotoUrl || '',
        postTitle: data.postTitle,
        body: data.body,
        tags: data.tags,
        description: data.description
      });

    }

    this.autoSave = setInterval(() => {
      this.setState({ saving: true });
      const { postTitle, coverPhotoUrl, tags, description } = this.state;
      if (postTitle || coverPhotoUrl || tags || description) localStorage.setItem('currentDraft', JSON.stringify(this.state));
    }, 5000);
  }

 
  handleSave = async () => {
    const { authorization } = this.props;
    const res = await fetch(`${api_url}/post/draft`, {
      method: 'post',
      headers: {authorization, 'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: this.state.postTitle,
        body: this.state.body,
        tags: this.state.tags || [],
        description: this.state.description,
        coverPhotoUrl: this.state.coverPhotoUrl
      })
    });

    const data =  await res.json();
    localStorage.removeItem('currentDraft');
    Router.push(`/blog/draft/${data._id}`);
  }

  handleOpenPublishDialogue = () => this.setState({ publishDialogueOpen: true })
  handleClosePublishDialogue = () => this.setState({ publishDialogueOpen: false })
  handlePublish = async () => {
    const {authorization} = this.props;
    const res = await fetch(`${api_url}/post`, {
      method: 'post',
      headers: { authorization, 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: this.state.postTitle,
        body: this.state.body,
        tags: this.state.tags || [],
        description: this.state.description,
        coverPhotoUrl: this.state.coverPhotoUrl
      })
    });
    const data = await res.json();
    if (parseInt(res.status, 10) !== 200) return alert(data[0].errorMessage);
    localStorage.removeItem('currentDraft');
    Router.push(`/blog/${data.post._id}`);
    this.handleClosePublishDialogue();
  }

  componentWillUnmount() {
    clearInterval(this.autoSave);
  }
  handleTagsChange = (tags) => {
    this.setState({ tags });
  }

  handleTextChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleEditorChange = (value) => {
    this.setState({ body: value });
  }

  render() {
    const { classes, authorization } = this.props;
    const { publishDialogueOpen } = this.state;
    if (!authorization) return <div style={{ color: 'white' }}>Please wait...</div>;
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
            <Menu authorization = {authorization} >
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
                <Tags defaultValue={this.state.tags} onChange={this.handleTagsChange} />
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
        </Container>
        <Footer />
      </>
    );
  }
}

NewBlog.propTypes = {
  classes: PropTypes.object.isRequired,
  loggingIn: PropTypes.bool,
  authorization: PropTypes.string
};

export default Entry(withRouter(withStyles(useStyles)(NewBlog)));