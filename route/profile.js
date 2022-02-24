/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-18 17:08:54
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-22 10:49:02
 */
import express from "express";
const router = express.Router();

// 获取指定用户的资料
router.get("/:username", async (req, res, next) => {
  try {
    // 处理请求
    res.send("post/profiles/:username");
  } catch (error) {
    next(error);
  }
});

// 关注用户
router.post("/:username/follow", async (req, res, next) => {
  try {
    // 处理请求
    res.send("post/profiles/:username/follow");
  } catch (error) {
    next(error);
  }
});

// 取消关注用户
router.delete("/:username/follow", async (req, res, next) => {
  try {
    // 处理请求
    res.send("post/profiles/:username/follow");
  } catch (error) {
    next(error);
  }
});
export default router;
