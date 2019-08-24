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
      textValue: ""
    };
  }

  handleTagsChange = (tags) =>{
    this.setState({tags})
  }

  handleChange = value => {
    this.setState({
      textValue: value
    });
  };

  handleEdit = () => this.setState({ edit: true });
  handleExit = () => this.setState({ edit: false });
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
              id="outlined-dense"
              label="Post Title"
              fullWidth={true}
              InputProps={{
                className: classes.materialInput
              }}
              InputLabelProps={{
                className: classes.floatingLabelFocusStyle,
              }}
            />
          </div>
            <br/>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                 id="outlined-dense"
                 label="Cover Photo Url"
                 fullWidth={true}
                 InputProps={{
                   className: classes.materialInput
                 }}
                 InputLabelProps={{
                   className: classes.floatingLabelFocusStyle,
                 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
             <div style={{marginTop: "26px"}}>
             <Tags onChange={this.handleTagsChange}/>
             </div>
            </Grid>
          </Grid>
         <br/>
        </Container>
        <Container>
          <img
            style={{ maxHeight: "600px" }}
            src="https://miro.medium.com/max/1000/1*vKd5tDJmDFznrOkMh1kQGg.png"
          />
        </Container>
        <Container
          className="blog-md"
          maxWidth="md"
          style={{
            color: "white",
            fontFamily:
              "'monospaced courier-new', Poppins, sans-serif !important"
          }}
        >
          <SimpleMDE
            onChange={this.handleChange}
            value={this.state.textValue}
          />
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(NewBlog)