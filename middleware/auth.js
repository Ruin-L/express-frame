/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-23 08:53:10
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-24 21:55:11
 */
import jwt from "../util/jwt.js";
import { URL } from "../config/config.default.js";
import { modelData } from "../model/index.js";

const getToken = async (req, res, next) => {
  // 从请求头中获取token
  // 这个的开头必须要小写
  let token = req.headers["authentication"];
  token = token ? token.split("Bearer")[1].trim() : null;
  if (!token) {
    return res.status(401).end();
  }
  try {
    const decodedToken = await jwt.verify(token, URL.jwtSecret);
    req.user = await modelData.User.findById(decodedToken.userId);

    next();
  } catch (error) {
    next(error);
    return res.status(401).end();
  }
  // 验证token是否有效
  // 无效->响应401状态
  // 有效-> 把用户信息读取出来挂载到req请求对象上
  // 继续往后执行
};

export default {
  getToken,
};
