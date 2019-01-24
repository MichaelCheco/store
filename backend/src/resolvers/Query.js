const Query = {
  items: (parent, args, ctx, info) => {
    return ctx.prisma.items();
  },
  item: (parent, { id }, ctx, info) => {
    return ctx.prisma.item( { id } )
},
}
module.exports = {
  Query,
};
