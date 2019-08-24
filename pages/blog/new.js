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

const SimpleMDE = dynamic(import("react-simplemde-editor"), { ssr: false });

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

  componentDidMount (){
    setInterval(()=>{
      this.setState({saving: true})
      localStorage.setItem('currentDraft', JSON.stringify(this.state))
    }, 10000)
  }

  handleTagsChange = (tags) => {
    this.setState({ tags })
  }

  handleTextChange = e => {
    const {id, value} = e.target;
    this.setState({[id]:  value})
  };

  handleEditorChange = (value)=>{
    this.setState({body: value})
  }

  render() {
    const { classes } = this.props
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

export default withStyles(useStyles)(NewBlog)