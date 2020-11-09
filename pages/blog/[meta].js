import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { parseCookies } from 'nookies';
import ViewBlog from '../../components/blog/view';
import entry from '../../components/entry';


const api_url = process.env.API_URL;
const base_url = process.env.UI_URL;
const base_url_domain = process.env.UI_URL_DOMAIN;


const urlMetaIdentifier = (meta) => {
  if (meta.includes('@')) return '@';
  return '-';
};

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps(ctx) {
    const { authorization } = parseCookies(ctx);
    const { meta } = ctx.query;
    const _meta = meta.split(urlMetaIdentifier(meta));
    const metaLength = _meta.length;
    const __meta = _meta[metaLength - 1] || _meta[0];
    const res = await fetch(`${api_url}/post/${__meta}`);
    const data = res.status === 200 ? await res.json() : {};
    return {
      authorization,
      post: data.post,
      body: data.postBody,
      statusCode: res.status === 200? null : res.status
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