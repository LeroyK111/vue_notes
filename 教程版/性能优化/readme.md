# 前端性能优化
提升首屏的加载速度，是前端性能优化中「最重要」的环节，这里笔者梳理出一些 常规且有效 的首屏优化建议

## 路由懒加载
懒加载前提的实现：ES6 的动态地加载模块——import()
![[readme.assets/Pasted image 20230711212255.png]]

## 组件懒加载
组件懒加载的使用场景
有时资源拆分的过细也不好，可能会造成浏览器 http 请求的增多
![[readme.assets/Pasted image 20230711212136.png]]
总结出三种适合组件懒加载的场景：

1）该页面的 JS 文件体积大，导致页面打开慢，可以通过组件懒加载进行资源拆分，利用浏览器并行下载资源，提升下载速度（比如首页）

2）该组件不是一进入页面就展示，需要一定条件下才触发（比如弹框组件）

3）该组件复用性高，很多页面都有引入，利用组件懒加载抽离出该组件，一方面可以很好利用缓存，同时也可以减少页面的 JS 文件大小（比如表格组件、图形组件等）


## 合理使用 Tree shaking

![[readme.assets/Pasted image 20230711212552.png]]

## 骨架屏白屏时间优化
![[readme.assets/Pasted image 20230711212732.png]]
![[readme.assets/Pasted image 20230711212814.png]]
## 长列表虚拟滚动

![[readme.assets/Pasted image 20230711212858.png]]

![[readme.assets/Pasted image 20230711212913.png]]

## Web Worker 优化长任务
![[readme.assets/Pasted image 20230711213018.png]]
![[readme.assets/Pasted image 20230711213033.png]]
## requestAnimationFrame 制作动画
![[readme.assets/Pasted image 20230711213108.png]]
## js的六种加载方式
![[readme.assets/Pasted image 20230711213134.png]]
![[readme.assets/Pasted image 20230711213154.png]]
![](readme.assets/Pasted%20image%2020230711213230.png)

## 图片的优化

![](readme.assets/Pasted%20image%2020230711213315.png)
### 图片懒加载
![](readme.assets/Pasted%20image%2020230711213341.png)
### 字体图标 or Base64
![](readme.assets/Pasted%20image%2020230711213419.png)