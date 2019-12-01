const { Blog } = require('../../model')

exports.getBlogList = async () => {
    await Blog.sync({});
    return await Blog.findAll();
}

exports.getBlogById = async (blogId) => {
    await Blog.sync({});
    return await Blog.findOne({
        where: {
            id: blogId,
        }
    })
}