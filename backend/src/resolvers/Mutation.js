const Mutation = {
  createItem: async (parent, args, ctx, info) => ctx.db.mutation.createItem({
    data: {...args,},
  }, info),
  updateItem: async (parent, args, ctx, info) => {
    const updates = {...args};
    delete updates.id;
    return ctx.db.mutation.updateItem({
      data: updates,
      where: {
        id: args.id
      }
    }, info)
  }
};

module.exports = Mutation;
