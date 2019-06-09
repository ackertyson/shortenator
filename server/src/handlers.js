const UrlModel = require('./model')();

const urlMask = /^https?:\/\/[-_.a-zA-Z]+\.[-_.a-zA-Z]+/;

module.exports = {
  all: async (ctx) => {
    ctx.body = await UrlModel.all();
  },

  get: async (ctx) => {
    const record = await UrlModel.get(ctx.params.id);
    if (!record) {
      ctx.throw(404);
    }

    await UrlModel.update(record.id, { hits: record.hits += 1 });
    ctx.redirect(record.url);
  },

  post: async (ctx) => {
    const { url } = ctx.request.body;
    if (!url) return ctx.throw(422);

    if (!urlMask.test(url)) return ctx.throw(422, 'Bad URL format');

    const inserted = await UrlModel.insert({ url });
    ctx.body = inserted;
    ctx.status = 201;
  }
};
