// 单例模式：只能够创建一次，且无法被销毁
//
// 优点
// 1.避免重复创建，而节省性能
//
// 应用场景
// 1.弹窗,alert只能弹出一个，不能同时弹出多个
// 2.动态生成css，用js整体修改页面主题

var myCounterSingleton = (function () {
  var instance

  return {}
})()
