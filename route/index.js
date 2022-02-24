/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-18 16:23:42
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-23 08:57:14
 */
import express from "express";
import user from "./user.js";
import profile from "./profile.js";
import article from "./article.js";
import tag from "./tag.js";
const router = express.Router();
// 用户相关路由
router.use(user);

// 用户资料相关路由
router.use("/profiles", profile);

// 文章相关路由
router.use("/articles", article);

// 标签相关路由
router.use("/tag", tag);

export default router;
