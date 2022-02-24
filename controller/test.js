/*
 * @Description: {{ByRuin}}
 * @Version: 2.0
 * @Author: Ruin 🍭
 * @Date: 2022-02-24 09:57:24
 * @LastEditors: 刘引
 * @LastEditTime: 2022-02-24 11:51:55
 */
// const filter = {};
const tag = "Vue";
const ts = function async(he) {
  let a = 123;
  let res = he + a;
  // console.log(he);
  return res;
};
const rs = async () => {
  let c = 456;
  const d = await ts(c);
  console.log(d);
};

rs();
