const Mutation = {
  createItem: async (parent, args, ctx, info) => ctx.db.mutation.createItem({
    data: {...args,},
  }, info),
};

module.exports = Mutation;
