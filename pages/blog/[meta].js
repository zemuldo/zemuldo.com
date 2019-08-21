import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import post1 from "../../src/components/blog/template.md";
import Footer from "../../src/footer";
import Menu from "../../src/components/blog/menu";
import marked from "marked";
import dynamic from "next/dynamic";
import Head from "next/head";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "next/link";
import "easymde/dist/easymde.min.css";
import { maxHeight } from "@material-ui/system";
import { format } from "date-fns";

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
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "18px"
          }}
        >
          <Menu />
          <br />
          <div style={{ float: "right" }}>
            <Link href="/blog/[meta]/edit" as="/blog/blog-meta/edit">
              <i className="fa fa-pencil-square-o color-green" />
            </Link>
          </div>
          <h1>How to use Ecto as a query validation utility.</h1>
          <br />
          <p>{format(new Date(), "PPPP")}</p>
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
          maxWidth="md"
          style={{
            color: "white",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "18px"
          }}
        >
          <br />
          <Highlight innerHTML>{marked(this.state.textValue)}</Highlight>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}
