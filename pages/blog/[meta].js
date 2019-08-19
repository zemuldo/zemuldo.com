import React from "react";
import Container from "@material-ui/core/Container";
import post1 from "../../src/components/blog/template.md";
import Footer from "../../src/footer";
import Menu from "../../src/components/blog/menu";
import marked from "marked";
import dynamic from "next/dynamic";
import Head from "next/head";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "next/link";
import "easymde/dist/easymde.min.css";

const Highlight = dynamic(import("react-highlight"));

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
});

export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: post1
    };
  }
  handleChange = value => {
    this.setState({
      textValue: value
    });
  };

  handleEdit = () => this.setState({ edit: true });
  handleExit = () => this.setState({ edit: false });
  render() {
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
            fontFamily:
              "'monospaced courier-new', Poppins, sans-serif !important",
            fontSize: "18px"
          }}
        >
          <Menu />
          <div style={{ float: "right" }}>
            <Tooltip title="Twitter" placement="right-start">
              <i className="fa fa-twitter color-blue" />
            </Tooltip>
            <br />
            <Tooltip title="LinkedIn" placement="right">
              <i className="fa fa-linkedin color-blue" />
            </Tooltip>
            <br />
            <Link href="/blog/[meta]/edit" as="/blog/blog-meta/edit">
              <i className="fa fa-pencil-square-o color-green" />
              </Link>
          </div>
          <Highlight innerHTML>{marked(this.state.textValue)}</Highlight>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}
