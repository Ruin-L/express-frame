/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-22 13:22:06
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-22 15:10:37
 */
// import express from "express";
import { validationResult } from "express-validator";

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

export { validate };
