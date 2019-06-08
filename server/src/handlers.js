const UrlModel = require('./model')();

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

    const inserted = await UrlModel.insert({ url });

    ctx.body = inserted;
    ctx.status = 201;
  }
};
