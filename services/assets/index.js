const fs = require('fs');
const path = require('path');

const hightlightCss = fs.readFileSync(path.resolve(__dirname, '../../node_modules/highlight.js/styles/atom-one-light.css'), {
    encoding: 'utf-8',
})
const markdownCss = fs.readFileSync(path.resolve(__dirname, '../../view/github-markdown.css'), {
    encoding: 'utf-8',
})

const resolveAssetsFromView = (relativePath) => {
    const filePath = path.resolve(__dirname, '../../view', relativePath);
    console.log(`filePath: ${filePath}`);
    return fs.readFileSync(filePath, {
        encoding: 'utf-8',
    })
}

module.exports = {
    hightlightCss,
    markdownCss,
    resolveAssetsFromView
}