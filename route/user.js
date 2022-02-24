/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-18 16:51:53
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-23 11:00:23
 */
import express from "express";
import {
  login,
  register,
  getCurrentUser,
  updateCurrentUser,
} from "../controller/user.js";
import { userVariable, loginVariable } from "../validator/user.js";
// 加载token验证中间件
import auth from "../middleware/auth.js";
const router = express.Router();
// 用户登录
router.post("/users/login", loginVariable, login);

// 用户注册
router.post(
  "/users",
  // 验证
  userVariable,
  // 验证通过后进行注册
  register //3.通过验证执行具体的控制器处理
);

// 获取当前登录用户
router.get("/users", auth.getToken, getCurrentUser);

// 更新当前登录用户
router.put("/users", updateCurrentUser);
export default router;
