/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-22 13:52:47
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-22 14:01:41
 */
// 使用md5进行加密
import crypto from "crypto";

//获取crypo支持的散列算法 进行加密
const encryption = (str) => {
  // 拼接明文有助于提高安全性
  return crypto
    .createHash("md5")
    .update("password" + str)
    .digest("hex");
};
export { encryption };
