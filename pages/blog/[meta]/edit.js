import React from "react";
import Container from "@material-ui/core/Container";
import post1 from "../../../src/components/blog/template.md";
import Footer from "../../../src/footer";
import Menu from "../../../src/components/blog/menu";
import marked from "marked";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import "easymde/dist/easymde.min.css";

const SimpleMDE = dynamic(import("react-simplemde-editor"), { ssr: false });

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
          <h1>How to use Ecto as a query validation utility.</h1>
          <br />
          <p>
            <button>JavaScript</button>
          </p>
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
