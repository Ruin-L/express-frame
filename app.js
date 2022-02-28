/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-18 13:41:56
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-24 20:21:37
 */
import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./route/index.js";
import { handleError } from "./middleware/error-handler.js";
// 导入数据库
import { connectDb } from "./model/index.js";
const app = express();
const PORT = process.env.PORT || 3000;

// //连接mongoDB
connectDb();

// 解析json表单
app.use(express.json());
// 日志输出
app.use(morgan("tiny"));
// 允许跨域
app.use(cors());
// 挂载路由
app.use("/api", router);
// 挂载统一处理服务端错误的中间件
app.use(handleError());
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// 后面的代码明天再说嘛
