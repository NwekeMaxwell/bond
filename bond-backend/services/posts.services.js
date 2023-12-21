const BaseService = require("./base.service");
const Posts = require("../models/posts.model");

class PostsService extends BaseService {
  constructor(model) {
    super(model);
  }

  async find(filter) {
    return await this.model.findOne(filter, "-deleted").sort({ createdAt: -1 })
    .populate({path: 'author', select: 'username'})
    .populate({
        path: 'comments',
        select: 'content',
        match: {deleted: false},
        populate: {
            path: 'author',
            select: 'username',
            match: {deleted: false}
        }
    })
    .exec()
  }

  async findAll(filter) {
    return await this.model.find(filter, "-deleted")
      .sort({ createdAt: -1 })
      .populate({ path: "author", select: "username" })
      .populate({
        path: "comments",
        select: "content",
        match: { deleted: false },
        populate: {
          path: "author",
          select: "username",
          match: { deleted: false },
        },
      })
      .exec();
  }

  // async updateMany(filter, data) {
  //   return await this.model.updateMany(filter, data);
  // }

  async updateOne(filter, data) {
    return await this.model.updateOne(filter, { $push: { comments: data } });
  }
}

const posts = new PostsService(Posts);
module.exports = posts;