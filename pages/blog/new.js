import React from "react";
import Container from "@material-ui/core/Container";
import { withStyles } from '@material-ui/core/styles';
import Footer from "../../src/footer";
import Menu from "../../src/components/blog/menu";
import marked from "marked";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import "easymde/dist/easymde.min.css";
import Tags from "../../src/components/tags";
import { parseCookies } from "nookies";
import { withRouter } from 'next/router'

const SimpleMDE = dynamic(import("react-simplemde-editor"), { ssr: false });

const JoinNow = () => (
  <React.Fragment>
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
                          <div style={{ marginTop: "30%" }} className="header-section">
                              <div className="header-frame">
                                <h3 className="color-6">You have to become a member to write</h3>
                                <hr/>
                                  <Link href="/login?redirectTo=http://localhost:3001/blog/new" >
                                      <a style={{fontSize: "24px"}} className="color-6">
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
  </React.Fragment>
);

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
});

const useStyles = theme => ({
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
    color: "#08a6f3",
    '&:after': {
      color: "#08a6f3",
    },
  },
  materialInput: {
    borderBottom: '1px solid green',
    '&:after': {
      borderBottom: '1px solid green',
    },
    fontSize: "28px",
    color: '#08a6f3'
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
      body: ""
    };
  }

  static async getInitialProps(ctx) {
    const { authorization } = parseCookies(ctx)
    const loinState= {
      loggingIn: !!ctx.query.token
    }
    if (authorization) {
      return {
        ...loinState,
        authorization,
        authorized: true
      };
    }
    return {
      ...loinState,
      authorized: false,
    };
  }

  componentDidMount() {
    if (window.location.href.includes("?token=")) {
      window.location.href = window.location.pathname
    }
    setInterval(() => {
      this.setState({ saving: true })
      localStorage.setItem('currentDraft', JSON.stringify(this.state))
    }, 10000)
  }

  handleTagsChange = (tags) => {
    this.setState({ tags })
  }

  handleTextChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value })
  };

  handleEditorChange = (value) => {
    this.setState({ body: value })
  }

  render() {
    const { classes, authorized, loggingIn } = this.props
    if(loggingIn) return <div style={{color: "white"}}>Please wait...</div>
    if (!authorized) {
      return <JoinNow/>
    }

    return (
      <React.Fragment>
        <Head>
          <link href="/static/css/blog.css" rel="stylesheet" />
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
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
          <div style={{ float: "right" }}>
            <Link href="/blog/[meta]" as="/blog/blog-meta">
              <i className="fa fa-save color-green" />
            </Link>
          </div>
          <div className={classes.root}>
            <TextField
              id="postTitle"
              label="Post Title"
              fullWidth={true}
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
              <div style={{ marginTop: "26px" }}>
                <Tags onChange={this.handleTagsChange} />
              </div>
            </Grid>
          </Grid>
          <br />
        </Container>
        {
          this.state.coverPhotoUrl && <Container>
            <img
              style={{ maxHeight: "600px" }}
              src={this.state.coverPhotoUrl}
            />
          </Container>
        }
        <Container
          className="blog-md"
          maxWidth="md"
          style={{
            color: "white",
            fontFamily:
              "'monospaced courier-new', Poppins, sans-serif !important"
          }}
        >
          <h3>Post Body Markdown</h3>
          <SimpleMDE
            onChange={this.handleEditorChange}
            value={this.state.body}
          />
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(useStyles)(NewBlog))