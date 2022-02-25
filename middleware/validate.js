/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-22 13:22:06
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-25 10:17:45
 */
// import express from "express";
import { validationResult, buildCheckFunction } from "express-validator";
import mongoose from "mongoose";
const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

// 验证id是否有效
const validObjectId = (location, fields) => {
  return buildCheckFunction(location)(fields).custom(async (value) => {
    if (!mongoose.isValidObjectId(value)) {
      return Promise.reject("ID 不是一个有效的ObjID");
    }
  });
};
export { validate, validObjectId };
