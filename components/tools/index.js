export const postUrl = (post_id, title) => `/blog/${title.toLowerCase().split(' ').join('-')}-${post_id}`;

export const tools = { postUrl };

export default tools;