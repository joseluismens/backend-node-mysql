import { Router } from "express";
import * as PostController from "../controllers/post.controller";
const router=Router();

router.route('/')
    .get(PostController.getPosts)
    .post(PostController.createPost);

router.route('/:postId')
    .get(PostController.getPost)
    .delete(PostController.deletePost)
    .put(PostController.updatePost);

export default router;