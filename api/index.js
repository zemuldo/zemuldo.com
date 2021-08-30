const ex_api_url = process.env.EX_API_URL;

export const trackCodeCopy = (post_id) => {
  fetch(`${ex_api_url}/api/posts/${post_id}/copied_code`, { method: 'post', })
    .then(res => res)
    .catch(e => e);
};