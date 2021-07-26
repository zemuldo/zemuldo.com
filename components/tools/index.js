export const postUrl = (post) => `/blog/${post.title.toLowerCase().split(' ').join('-')}-${post._id}`

export default { postUrl }