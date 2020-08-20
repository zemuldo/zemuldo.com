import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { parseCookies } from 'nookies';
import entry from '../../../../components/entry';
import ViewBlog from '../../../../components/blog/view';

const api_url = process.env.API_URL;
const base_url = process.env.UI_URL;
const base_url_domain = process.env.UI_URL_DOMAIN;

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
    let user;
    if (authorization) {
      const res = await fetch(`${api_url}/user`, { headers: { authorization } });
      user = await res.json();
    }
    return {
      user,
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