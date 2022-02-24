/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-21 15:31:34
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-22 14:14:54
 */
import mongoose from "mongoose";
import { baseModel } from "./base-model.js";
import { encryption } from "../util/md5.js";
// 创建schema
const userSchema = mongoose.Schema({
  ...baseModel,
  // required 代表必填项
  username: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
    // 格式处理
    set: (value) => encryption(value),
    // 不将此数据返还给客户端
    select: false,
  },
  bio: {
    type: "string",
    default: null,
  },
  image: {
    type: "string",
    default: null,
  },
});

export { userSchema };
