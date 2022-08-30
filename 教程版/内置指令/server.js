// @ts-nocheck
const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;
const host = "127.0.0.1";

app.get("/5s/vue@2.6.14.js", (req, res) => {
  let data = fs.readFileSync("./vue框架/教程版/js/vue@2.6.14.js", {
    encoding: "utf8",
    flag: "r",
  });
  // 我们对静态资源进行延迟处理
  setTimeout(() => {
    res.send(data);
  }, 5000);
});

app.get("/", (req, res) => {
  res.send("测试测试");
});

app.listen(port, host, () => {
  console.log(`服务器地址 http://${host}:${port}`);
});
