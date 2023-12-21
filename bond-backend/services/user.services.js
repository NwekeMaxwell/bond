const Users = require("../models/user.model");
const BaseService = require("./base.service");

class UserService extends BaseService {
  constructor(model) {
    super(model);
  }

  async find(filter) {
    return this.model.findOne(
      filter,
      "-posts -replies -likes -password -deleted"
    );
  }

  async findWithDetails(filter) {
    return await this.model.findOne(filter);
  }

  async findAll(filter) {
    return await this.model.find(
      filter,
      "-posts -replies -likes -password -deleted"
    );
  }

  async updateOne(filter, data) {
    return await this.model.updateOne(filter, { $push: { posts: data } });
  }
}

module.exports = new UserService(Users);
