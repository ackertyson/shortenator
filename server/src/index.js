const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const helmet = require('koa-helmet');
const { errors } = require('./middleware');
const router = require('./router');

const whitelist = [
  'http://localhost:3000',
  process.env.PROD_API_URI
];

const corsOpts = {
  origin: function (ctx) {
    const { origin } = ctx.headers;
    if (whitelist.includes(origin)) {
      return origin;
    }

    throw new Error(`Not allowed by CORS: ${origin}`);
  }
};

const port = process.env.PORT || 5000;
const app = new Koa();
app
  .use(helmet())
  .use(errors)
  .use(cors(corsOpts))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods({ throw: true }))

  .on('error', (err, ctx) => { // middleware errors will also emit here
    const status = err.statusCode || ctx.status || err.status;
    console.error('Error', status || '', err); //eslint-disable-line no-console
  })

  .listen(port, () => {
    console.log(`Listening on ${port}...`); //eslint-disable-line no-console
  });


module.exports = app; // for testing purposes only
