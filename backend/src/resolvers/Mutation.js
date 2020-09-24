const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if user is logged in

    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info);

    return item;
  }

  // createDog(parent, args, context, info) {
  //   global.dogs = global.dogs || [];
    
  //   // here we create a dog and push into global dogs arr
  //   const newDog  = { name: args.name };
  //   global.dogs.push(newDog);
  //   return newDog;
  // }
};

module.exports = Mutations;
