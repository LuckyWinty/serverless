const render = require('../../services/home/render');
const { getBlogList } = require('../../services/data')
const { htmlResponse } = require('../../services/response')

exports.homeController = async (ctx) => {
    const blogList = await getBlogList()
    const html = render(blogList)
    htmlResponse(ctx, html)
}