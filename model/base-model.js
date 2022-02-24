/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-21 17:36:53
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-21 17:36:54
 */

const baseModel = {
  // 创建时间
  createAt: {
    type: Date,
    default: Date.now(),
  },
  // 更新时间
  updateAt: {
    type: Date,
    default: Date.now(),
  },
};

export { baseModel };
