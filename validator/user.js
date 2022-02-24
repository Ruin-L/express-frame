/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-22 13:26:38
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-23 09:00:58
 */
import { validate } from "../middleware/validate.js";
import { body } from "express-validator";
import { modelData } from "../model/index.js";
import { encryption as md5 } from "../util/md5.js";

// 注册验证
const userVariable = validate([
  //1.配置验证规则
  body("user.username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .custom(async (username) => {
      const user = await modelData.User.findOne({ username });
      if (user) {
        return Promise.reject("用户名已存在！");
      }
    }),
  body("user.password").notEmpty().withMessage("密码不能为空"),
  body("user.email")
    .notEmpty()
    .withMessage("邮箱不能为空")
    .isEmail()
    .withMessage("邮箱格式不正确")
    .bail()
    .custom(async (email) => {
      const user = await modelData.User.findOne({ email });
      if (user) {
        return Promise.reject("邮箱已存在！");
      }
    }),
]);

// 登录验证
const loginVariable = [
  validate([
    body("user.email").notEmpty().withMessage("邮箱不能为空"),
    body("user.password").notEmpty().withMessage("密码不能为空"),
  ]),
  validate([
    body("user.email").custom(async (email, { req }) => {
      const user = await modelData.User.findOne({ email }).select("password");
      if (!user) {
        return Promise.reject("用户不存在");
      }
      // 将数据挂载到请求对象中，后续的中间件也可以使用
      req.user = user;
    }),
  ]),
  validate([
    body("user.password").custom(async (password, { req }) => {
      // console.log(md5(password));
      console.log(req);
      if (md5(password) != req.user.password) {
        return Promise.reject("密码错误！");
      }
    }),
  ]),
];
export { userVariable, loginVariable };
