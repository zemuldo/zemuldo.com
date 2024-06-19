import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { parseCookies } from 'nookies';
import entry from '../../../../components/entry';
import ViewBlog from '../../../../components/blog/ViewBlog';

const api_url = process.env.NEXT_PUBLIC_API_URL;
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const base_url_domain = process.env.NEXT_PUBLIC_BASE_URL_DOMAIN;

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: ''
    };
  }

  static async getInitialProps(ctx) {
    const { authorization } = parseCookies(ctx);
    const { draftId } = ctx.query;
    
    const res = await fetch(`${api_url}/post/draft/${draftId}`, { headers: { authorization } });
    const data = await res.json();
    return {
      authorization,
      post: data,
      body: data
    };
  }
  render() {
    return <ViewBlog {...this.props}/>;
  }
}

Blog.propTypes = {
  post: PropTypes.object.isRequired,
  body: PropTypes.object.isRequired,
  authorization: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};
  
export default entry(Blog);