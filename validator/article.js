/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-23 10:39:24
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-25 11:10:58
 */
import { validate, validObjectId } from "../middleware/validate.js";
import { body } from "express-validator";
import { modelData } from "../model/index.js";
const createArticle = validate([
  body("article.title").notEmpty().withMessage("文章标题不能为空"),
  body("article.description").notEmpty().withMessage("文章摘要不能为空"),
  body("article.body").notEmpty().withMessage("文章内容不能为空"),
]);

const getArticle = validate([
  validObjectId(["params"], "articleId"),
  // param("articleId").custom(async (value) => {
  //   if (!mongoose.isValidObjectId(value)) {
  //     // 返回一个失败的Promise
  //     return Promise.reject("文章ID类型错误");
  //     //同步失败
  //     // throw new Error("文章ID类型错误");
  //   }
  //   // 同步成功
  //   // return true;
  // }),
]);

// 验证id是否有效
const updateArticle = [
  validate([validObjectId(["params"], "articleId")]),
  async (req, res, next) => {
    // 检验文章是否存在
    const articleId = req.params.articleId;
    const article = await modelData.Article.findById(articleId);
    req.article = article;
    if (!article) {
      // 如果文章不存在
      return res.status(404).end();
    }
    next();
  },
  // 验证文章是否是当前登录用户
  async (req, res, next) => {
    // 数据库默认查出来是对象需要转换成字符串类型进行判定
    if (req.user._id.toString() != req.article.author.toString()) {
      return res.status(403).end();
    }
    next();
  },
];

//删除文章相关验证
const deleteArticle = updateArticle;
export { createArticle, getArticle, updateArticle, deleteArticle };
