/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-21 15:31:40
 * @LastEditors: 刘引
 * @LastEditTime: 2022-03-03 13:59:54
 */
import mongoose from "mongoose";
import { baseModel } from "./base-model.js";
const Schema = mongoose.Schema;
// 创建schema
const articleSchema = mongoose.Schema({
  ...baseModel,
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  body: {
    type: "string",
    required: true,
  },
  tagList: {
    type: [String],
    default: null,
  },
  favoritesCount: {
    type: Number,
    default: 0,
  },
  // 将用户信息从user集合中获取 将author替换成user中的数据
  author: {
    type: Schema.Types.ObjectId,
    //填充User model中的数据
    ref: "User",
    required: true,
  },
});

export { articleSchema };
