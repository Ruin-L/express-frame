/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-22 16:19:22
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-24 11:16:45
 */
import jwt from "jsonwebtoken";
//将回调函数转换为promise
import { promisify } from "util";

const sign = promisify(jwt.sign);
const verify = promisify(jwt.verify);
//不验证直接返还数据
const decode = promisify(jwt.decode);

export default { sign, verify, decode };
