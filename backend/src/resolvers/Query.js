const Query = {
  items: (parent, args, ctx, info) => ctx.db.query.items(),
};
module.exports = Query;
