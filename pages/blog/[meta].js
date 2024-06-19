import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { parseCookies } from 'nookies';
import ViewBlog from '../../components/blog/ViewBlog';
import entry from '../../components/entry';

const api_url = process.env.NEXT_PUBLIC_API_URL;
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const base_url_domain = process.env.NEXT_PUBLIC_BASE_URL_DOMAIN;
const ex_api_url = process.env.EX_API_URL;


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
      statusCode: res.status === 200 ? null : res.status
    };
  }


  render() {
    const post_id = this?.props?.post._id;
    return <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.onload = function() {
              const trackedView = sessionStorage.getItem('view_record_${ post_id}');
              if (trackedView !== '1') {
                  sessionStorage.setItem('view_record_${post_id}', '1');
                  var url = '${api_url}/post/${post_id}/track_views'
                  fetch(url, { method: 'POST', })
                      .then(res => {
                          if (res.status === 200) sessionStorage.setItem('view_record_${post_id }', '1');
                      });
              }
            }
          `
        }}
      />
      <ViewBlog {...this.props} />
    </>;
  }
}

Blog.propTypes = {
  post: PropTypes.object.isRequired,
  body: PropTypes.object.isRequired,
  authorization: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

export default entry(Blog);