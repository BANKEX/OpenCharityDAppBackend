import ts from '../helpers/TagAndSource';

export default {

  async add(ctx) {
    ctx. body = await ts.add(ctx, 0);
  },

  async del(ctx) {
    ctx. body = await ts.del(ctx, 0);
  },

  async find(ctx) {
    ctx. body = await ts.find(ctx, 0);
  },
  
  async edit(ctx) {
    ctx. body = await ts.edit(ctx, 0);
  },

  async all(ctx) {
    ctx. body = await ts.all(ctx, 0);
  },
};
