const template = require('art-template');
const marked = require('marked');
const hljs = require('highlight.js');
const { markdownCss, hightlightCss, resolveAssetsFromView } = require('../assets');
const postHtml = resolveAssetsFromView('./post/post.html');
const postCss = resolveAssetsFromView('./post/post.css');

module.exports = (blog) => {
    marked.setOptions({
        highlight: function (code, lang) {
            return hljs.highlight(lang, code).value;
        }
    });

    blog.content = marked(blog.content);

    let html = template.render(postHtml, {
        blog,
        markdownCss,
        hightlightCss,
        postCss,
    })
    return html
}