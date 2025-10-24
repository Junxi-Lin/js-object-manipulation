'use strict';

// 导入数据
const sculptureList = require('./data.js');

// 创建空数组存储结果
const sculptureListLengths = [];

// 遍历整个 sculptureList（不是只取第一个元素）
for (const item of sculptureList) {
  const lenObj = {}; // 临时对象，存放长度信息
  for (const key in item) {
    lenObj[key] = item[key].length;
  }
  sculptureListLengths.push(lenObj);
}

// 打印结果
console.log('sculptureListLengths =');
console.log(JSON.stringify(sculptureListLengths, null, 2));
