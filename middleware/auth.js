/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-23 08:53:10
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-24 11:04:33
 */
import jwt from "../util/jwt.js";
import { URL } from "../config/config.default.js";
import { modelData } from "../model/index.js";


const getToken = async (req, res, next) => {
  // 从请求头中获取token
  let token = req.headers["Authentication"];
  token = token ? token.split("Bearer")[1].trim() : null;
  // console.log(token);
  // debug("token");
  if (!token) {
    return res.status(401).end();
  }
  try {
    const decodedToken = await jwt.verify(token, URL.jwtSecret);
    req.user = await modelData.User.findById(decodedToken.userId);
    next();
  } catch (error) {
    console.log("触发", error);
    // next(error);
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
