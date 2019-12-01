exports.htmlResponse = (ctx, html) => {
    ctx.set('Content-Type', 'text/html');
    ctx.body = html
    ctx.status = 200
}