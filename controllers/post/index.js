const render = require('../../services/post/render');
const { getBlogById } = require('../../services/data')
const { htmlResponse } = require('../../services/response')

exports.postController = async (ctx) => {
    const { id } = ctx.query 
    const blog = await getBlogById(id)
    const html = render(blog)
    htmlResponse(ctx, html)
}