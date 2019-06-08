module.exports = async (ctx, next) => {
  try {
    return await next();
  } catch (e) {
    const status = e.statusCode || e.status || 500;
    const response = {
      message: e.message,
      status
    };

    if (e.errors && e.errors.length > 0) { // 422 errors may include this field
      response.errors = e.errors;
    }

    if (e.detail) { // postgres errors may include this field
      response.detail = e.detail;
    }

    ctx.status = status;
    ctx.body = response;
    ctx.app.emit('error', e, ctx);
  }
};
