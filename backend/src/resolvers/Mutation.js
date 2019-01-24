const Mutation = {
  createItem: async (parent, args, ctx, info) => {
    return ctx.prisma.createItem({
      ...args
    })
  }
}

module.exports = {
  Mutation
}