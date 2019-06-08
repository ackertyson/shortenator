const Router = require('koa-router');

const UrlHandler = require('./handlers');

const tinyRouter = new Router()
  .get('/:id', UrlHandler.get);

const urlRouter = new Router()
  .get('/', UrlHandler.all)
  .get('/:id', UrlHandler.get)
  .post('/', UrlHandler.post);

const router = new Router();
router
  .use('/t', tinyRouter.routes(), tinyRouter.allowedMethods({ throw: true }))
  .use('/urls', urlRouter.routes(), urlRouter.allowedMethods({ throw: true }));

module.exports = router;
