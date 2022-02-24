/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-21 14:30:27
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-21 15:02:12
 */
import util from "util";
export const handleError = () => {
  return (err, req, res, next) => {
    res.status(500).json({
      errors: util.format(err),
    });
    console.log(err, "触发");
  };
};

//  { handleError };
