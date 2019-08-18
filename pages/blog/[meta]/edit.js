import React from "react";
import Container from "@material-ui/core/Container";
import post1 from "../../../src/components/blog/template.md";
import Footer from "../../../src/footer";
import Menu from "../../../src/components/blog/menu";
import "easymde/dist/easymde.min.css";
import marked from "marked";
import dynamic from "next/dynamic";
import Head from "next/head";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "next/link";

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
        <Container
          className="blog-md"
          maxWidth="md"
          style={{
            color: "white",
            fontFamily:
              "'monospaced courier-new', Poppins, sans-serif !important",
            fontSize: "18px"
          }}
        >
            <Head>
          <link href="/static/css/blog.css" rel="stylesheet" />
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
        </Head>
        <Menu />
          <div style={{  zIndex: "9999999 !important" }}>
            <Tooltip title="Save" placement="right">
              <Link href="/blog/id">
                <i className="fa fa-floppy-o color-green" />
              </Link>
            </Tooltip>
          </div>
          <div style={{ backgroundColor: "" }}>
            <SimpleMDE
              onChange={this.handleChange}
              value={this.state.textValue}
            />
          </div>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}
