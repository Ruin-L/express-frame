/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-18 17:31:00
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-24 09:18:32
 */
import express from "express";
import articleCtrl from "../controller/article.js";
import auth from "../middleware/auth.js";
import { createArticle, getArticle } from "../validator/article.js";

const router = express.Router();

// 获取文章列表
router.get("/", articleCtrl.getArticles);

// 获取用户关注的作者文章列表
router.get("/feed", articleCtrl.getFeedArticles);

// 获取文章
router.get("/:articleId", getArticle, articleCtrl.getArticle);
// 创建文章
router.post("/", auth.getToken, createArticle, articleCtrl.createArticle);

// 更新文章
router.put("/:articleId", articleCtrl.updateArticle);

// 删除文章
router.delete("/:articleId", articleCtrl.deleteArticle);

// 添加文章评论
router.post("/:articleId/comments", articleCtrl.createArticleComment);

// 获取文章评论
router.get("/:articleId/comments", articleCtrl.getArticleComment);

// 删除文章评论
router.delete("/:articleId/comments/:id", articleCtrl.deleteArticleComment);

// 文章点赞
export default router;
