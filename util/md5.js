/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin ð­
 * @Date: 2022-02-22 13:52:47
 * @LastEditors: åå¼
 * @LastEditTime: 2022-02-22 14:01:41
 */
// ä½¿ç¨md5è¿è¡å å¯
import crypto from "crypto";

//è·åcrypoæ¯æçæ£åç®æ³ è¿è¡å å¯
const encryption = (str) => {
  // æ¼æ¥æææå©äºæé«å®å¨æ§
  return crypto
    .createHash("md5")
    .update("password" + str)
    .digest("hex");
};
export { encryption };
