/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-23 10:39:24
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-24 09:20:55
 */
import { validate } from "../middleware/validate.js";
import { body, param } from "express-validator";
import mongoose from "mongoose";
const createArticle = validate([
  body("article.title").notEmpty().withMessage("文章标题不能为空"),
  body("article.description").notEmpty().withMessage("文章摘要不能为空"),
  body("article.body").notEmpty().withMessage("文章内容不能为空"),
]);

const getArticle = validate([
  param("articleId").custom(async (value) => {
    if (!mongoose.isValidObjectId(value)) {
      // 返回一个失败的Promise
      return Promise.reject("文章ID类型错误");
      //同步失败
      // throw new Error("文章ID类型错误");
    }
    // 同步成功
    // return true;
  }),
]);

export { createArticle, getArticle };
