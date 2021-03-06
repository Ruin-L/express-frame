/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin ð­
 * @Date: 2022-02-18 16:51:53
 * @LastEditors: åå¼
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
// å è½½tokenéªè¯ä¸­é´ä»¶
import auth from "../middleware/auth.js";
const router = express.Router();
// ç¨æ·ç»å½
router.post("/users/login", loginVariable, login);

// ç¨æ·æ³¨å
router.post(
  "/users",
  // éªè¯
  userVariable,
  // éªè¯éè¿åè¿è¡æ³¨å
  register //3.éè¿éªè¯æ§è¡å·ä½çæ§å¶å¨å¤ç
);

// è·åå½åç»å½ç¨æ·
router.get("/users", auth.getToken, getCurrentUser);

// æ´æ°å½åç»å½ç¨æ·
router.put("/users", updateCurrentUser);
export default router;
