const Mutation = {
  createItem: async (parent, args, ctx, info) => {
    return ctx.prisma.createItem({
      ...args
    })
  },
  updateItem: async (parent, args, ctx, info) => {
    const updates = { ...args };
    delete updates.id;
    const item = await ctx.prisma.updateItem({
      where: { id: args.id },
      data: updates,
    })
    return item;
  },
}

module.exports = {
  Mutation
}