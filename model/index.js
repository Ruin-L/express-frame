/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-21 15:31:45
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-23 11:01:17
 */
// 导入数据库
import mongoose from "mongoose";
import { URL } from "../config/config.default.js";
import { userSchema } from "./user.js";
import { articleSchema } from "./article.js";
//连接mongoDB
const connectDb = () => {
  mongoose.connect(URL.dbUri, {
    authSource: "admin",
    user: "root",
    pass: "31415926",
  });
  const db = mongoose.connection;

  // 当连接失败的时候
  db.on("error", (err) => {
    console.error("MongoDB 数据库连接失败", err);
  });
  // 当连接成功的时候
  db.once("open", function () {
    console.log("MongoDB 数据库连接成功");
  });
};
// 组织导出模型构造函数
const modelData = {
  // 到数据库中会自动加s
  User: mongoose.model("User", userSchema),
  Article: mongoose.model("Article", articleSchema),
};
export { connectDb, modelData };
