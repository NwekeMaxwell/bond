const posts = require("../services/posts.services");
const user = require("../services/user.services");

class PostController {
  // Creating a post
  async createPost(req, res) {
    try {
      const { content, image1, image2, image3, image4 } = req.body;
      const userId = req.user.id;

      // Finds the user making the post request
      const existingUser = await user.find({ _id: userId, deleted: false });

      if (!content)
        return res.status(401).json({
          message: `Please input your post!`,
          success: false,
        });

      let newPost = await posts.create({
        author: existingUser._id,
        content,
        image1,
        image2,
        image3,
        image4,
      });
      await newPost.save();

      await user.updateOne({ _id: existingUser._id }, newPost);

      newPost = await posts.find({ _id: newPost._id });

      return res.status(200).json({
        message: `Your post has been uploaded successfully!`,
        success: true,
        data: newPost,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
        success: false,
      });
    }
  }

  // Updating a post
  async updatePost(req, res) {
    try {
      const { id } = req.params;
      const { content, image1, image2, image3, image4 } = req.body;
      const userId = req.user.id;

      // Finds the post
      const existingPost = await posts.find({ _id: id });

      if (!existingPost)
        return res.status(404).json({
          message: `Oops, we couldn't find this post as it does not exist or may have already been deleted by you!`,
          success: false,
        });
      console.log("req id", userId);
      console.log("author", existingPost.author);
      if (userId !== existingPost.author._id.toString())
        return res.status(403).json({
          message: `You cannot edit this post because you're not the author`,
          success: false,
        });

      if (!content)
        return res.status(401).json({
          message: `Please write your post`,
          success: false,
        });

      const updatedPost = await posts.update(id, {
        content: content,
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
      });

      return res.status(200).json({
        message: `Your post has been updated successfully!`,
        success: true,
        data: updatedPost,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
        success: false,
      });
    }
  }

  // Deleting a post
  async deletePost(req, res) {
    try {
      const { id } = req.params;
      const userId = req.user.id;

      // Finds the post
      const existingPost = await posts.find({ _id: id });

      if (!existingPost)
        return res.status(404).json({
          message: `Oops, we couldn't find this post as it does not exist or may have already been deleted by you!`,
          success: false,
        });

      if (userId !== existingPost.author._id.toString())
        return res.status(403).json({
          message: `You cannot delete this post because you're not the author`,
          success: false,
        });

      // Deletes the post
      existingPost.deleted = true;
      await existingPost.save();

      // Sends a success message and displays the deleted post
      return res.status(200).json({
        message: `Your post was deleted successfully!`,
        success: true,
        data: existingPost,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
        success: false,
      });
    }
  }

  // Getting one post by id
  async getPost(req, res) {
    try {
      let { id } = req.params;
      const existingPost = await posts.find({ _id: id, deleted: false });

      // Sends a message if the specified post does not exist
      if (!existingPost)
        return res.status(404).json({
          message: `Oops, we couldn't find this post as it does not exist or may have been deleted by its author!`,
          success: false,
        });

      // Sends a success message and displays post
      return res.status(200).json({
        message: `Post fetched successfully!`,
        success: true,
        data: existingPost,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
        success: false,
      });
    }
  }

  // Getting all posts
  async getPosts(req, res) {
    try {
      const allPosts = await posts.findAll({ deleted: false });

      // Sends a message if no posts exist
      if (!allPosts)
        return res.status(404).json({
          message: `Oops, there are no posts to display yet!`,
          success: false,
        });

      // Sends a success message and displays posts
      return res.status(200).json({
        message: `Posts fetched successfully!`,
        success: true,
        data: allPosts,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
        success: false,
      });
    }
  }

  // Getting a user's posts
  async getUserPosts(req, res) {
    try {
      const { userid } = req.params;
      // console.log("requester", userid);
      const existingUser = await user.find({ _id: userid });

      if (!existingUser)
        return res.status(404).json({
          message: `Oops, it seems like you're trying to fetch a resource that doesn't exist`,
          success: false,
        });

      const postsList = await posts.findAll({ author: userid, deleted: false });

      // Sends a message if no posts exist
      if (!postsList)
        return res.status(404).json({
          message: `Oops, it seems like this user has no posts to display`,
          success: false,
        });

      // Sends a success message and displays posts
      return res.status(200).json({
        message: `Posts fetched successfully!`,
        success: true,
        data: postsList,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
        success: false,
      });
    }
  }

  // Getting a user's post by id
  async getUserPostById(req, res) {
    try {
      const { userid, id } = req.params;
      const existingUser = await user.find({ _id: userid });

      if (!existingUser)
        return res.status(404).json({
          message: `Oops, it seems like you're trying to fetch a resource that doesn't exist`,
          success: false,
        });

      const existingPost = await posts.find({
        _id: id,
        author: userid,
        deleted: false,
      });

      // Sends a message if the specified postit does not exist
      if (!existingPost)
        return res.status(404).json({
          message: `Oops, we couldn't find this post as it does not exist or may have been deleted by its author!`,
          success: false,
        });

      // Sends a success message and displays postit
      return res.status(200).json({
        message: `Post fetched successfully!`,
        success: true,
        data: existingPost,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
        success: false,
      });
    }
  }

  // Getting a user's posts by handle
  async getUserPostsByHandle(req, res) {
    try {
      const { handle } = req.params;
      const existingUser = await user.find({ username: handle });

      if (!existingUser)
        return res.status(404).send({
          success: false,
          message: `Oops, it seems like this user does not exist`,
        });

      const existingPosts = await posts.findAll({
        author: existingUser._id,
        deleted: false,
      });

      // Sends a message if the specified postit does not exist
      if (!existingPosts)
        return res.status(404).json({
          message: `Oops, it seems like this user has no posts to display`,
          success: false,
        });

      // Sends a success message and displays post
      return res.status(200).json({
        message: `Posts fetched successfully!`,
        success: true,
        data: existingPosts,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
        success: false,
      });
    }
  }
}

module.exports = new PostController();
