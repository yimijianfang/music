# music-jquery音乐插件
移动端音乐插件、兼容自适应布局、兼容微信、QQ、UC等主流浏览器、部署方便
[演示地址](https://yimijianfang.github.io/music/)
![demo](https://raw.githubusercontent.com/yimijianfang/music/master/images/111.gif)

使用方法
1. 引入jquery
2. 引入music.js
3. ​
```
// API
$.music({
    type:'2',//类型 1无gif 2有
    x:"left",//X轴
    y:"top",//Y轴
    musicsrc:"https://resource156.oss-cn-beijing.aliyuncs.com/%E8%B0%A2%E6%98%8E%E7%A5%A5%20-%20%E5%88%9D%E5%A4%8F%E9%9B%A8%E5%90%8E.mp3",//资源地址
    autoplay:false,//是否自动播放
    loop:true,//是否循环播放
    restore:false,//暂停后音符是否恢复原位
    volume:1//音量 范围0.0-1.0
})
都是非必填项，通过merge补全配置项
```

因部分浏览器限制，自动播放功能会在滑动屏幕后重新播放音乐。
解决方案参考：https://stackoverflow.com/questions/49930680/how-to-handle-uncaught-in-promise-domexception-play-failed-because-the-use/54288481#54288481