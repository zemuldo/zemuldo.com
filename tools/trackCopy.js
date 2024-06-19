const api_url = process.env.NEXT_PUBLIC_API_URL;

 const trackCodeCopy = (post_id) => {
  fetch(`${api_url}/post/${post_id}/track_code_copy`, { method: 'post', })
    .then(res => res)
    .catch(e => e);
 };

 export default trackCodeCopy;