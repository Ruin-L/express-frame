/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-21 14:15:26
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-24 11:16:43
 */
import { modelData } from "../model/index.js";
import jwt from "../util/jwt.js";
import { URL } from "../config/config.default.js";
// 用户登录
const login = async (req, res, next) => {
  try {
    // 1.数据验证
    // 2.生产token
    const user = req.user.toJSON();
    const token = await jwt.sign(
      //赋值userID
      {
        userId: user._id,
      },
      // 携带密钥
      URL.jwtSecret,
      // 设置token过期时间
      {
        expiresIn: "10h",
      }
    );
    // 3.发送成果响应(包含token的用户信息)
    delete user.password;
    res.status(200).json({
      ...user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

// 用户注册
const register = async (req, res, next) => {
  try {
    // 1.获取请求体数据
    // res.send("register");
    console.log(req.body);
    // 2.数据验证
    // 2.1基本数据验证
    // 2.2业务数据验证

    // 3.验证通过，将数据保存到数据库
    let user = new modelData.User(req.body.user);
    // 保存到数据库
    await user.save();
    // 删除密码(深拷贝)
    user = user.toJSON();
    delete user.password;
    // 4.发送成功响应
    res.status(201).json({
      user,
    });
    // 处理请求
  } catch (error) {
    next(error);
  }
};

// 获取当前登录用户
const getCurrentUser = async (req, res, next) => {
  try {
    // 处理请求
    console.log(req.headers);
    res.status(200).json({
      user: req.user,
    });
  } catch (error) {
    next(error);
  }
};

// 更新当前用户
const updateCurrentUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send("updateCurrentUser");
  } catch (error) {
    next(error);
  }
};

export { login, register, getCurrentUser, updateCurrentUser };
