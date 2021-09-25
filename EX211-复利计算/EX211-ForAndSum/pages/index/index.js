// pages/kj/ForAndSum/index.js
var start, end, sum; //定义起点数、终点数和求和结果三个全局变量
Page({
  startNum: function(e) {
    start = parseFloat(e.detail.value); //将input组件value值转换为浮点数并赋值
  },
  endNum: function(e) {
    end = parseFloat(e.detail.value); //将input组件value值转换为浮点数并赋值
  },
  calc: function() {
    sum = start;
    for (var i = 1; i <= 5; i++) {
      sum = sum + sum * end; //利用for循环求和
    }
    this.setData({
      sum: sum //将全局变量sum的值渲染到视图层
    })
  }
})