const template = require('art-template');
const marked = require('marked');
const hljs = require('highlight.js');
const { markdownCss, hightlightCss, resolveAssetsFromView } = require('../assets');
const homeHtml = resolveAssetsFromView('./home/home.html');
const homeCss = resolveAssetsFromView('./home/home.css');

module.exports = (blogList) => {
    marked.setOptions({
        highlight: function (code, lang) {
            return hljs.highlight(lang, code).value;
        }
    });

    let html = template.render(homeHtml, {
        blogList: blogList.map((blog) => {
            blog.content = marked(blog.content);
            return blog;
        }),
        markdownCss,
        hightlightCss,
        homeCss,
    })

    return html
}