const Router = require('koa-router');
const { homeController } = require('../controllers/home')
const { postController } = require('../controllers/post')

const router = new Router();

router
    .get('/', homeController)
    .get('/post', postController)

module.exports = router;