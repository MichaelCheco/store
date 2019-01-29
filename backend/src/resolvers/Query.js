const { forwardTo } = require('prisma-binding')
const Query = {
  items: (parent, args, ctx, info) => ctx.db.query.items(),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
};
module.exports = Query;
