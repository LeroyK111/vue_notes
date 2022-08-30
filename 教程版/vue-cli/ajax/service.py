#!/usr/bin/python
# -*- coding: utf-8 -*-

import base64
from typing import Union
from typing import Optional
from sqlalchemy import JSON
from fastapi.responses import RedirectResponse, HTMLResponse, JSONResponse

from fastapi import FastAPI, Response, Form, Body, File, UploadFile, Header, Request
# 导入cors跨域插件
from fastapi.middleware.cors import CORSMiddleware
# 调用更好的json解析
import ujson
# 表单验证,也是接受post参数的方法
from pydantic import BaseModel, EmailStr
import uvicorn

app = FastAPI()

# 允许跨域的访问地址
origins = [
    # "http://localhost.tiangolo.com",
    # "https://localhost.tiangolo.com",
    # "http://localhost",
    # "http://192.168.1.26:8080",
    # "http://localhost:8080",
    # "http://192.168.1.26:10000",
    "*",
]
"""
注销服务器本身的cors， 使用Vue-cli进行代理服务器架设，
"""
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root(id: int = 0, name: str = None, origin: Optional[str] = Header(None)):
    # url?id=1，这样带get参数，则我们这样取值
    data = {"Hello": "World", "obj": "javascript"}
    if id > 0:
        data["id"] = id
        if name:
            data["name"] = name
    data_json = ujson.dumps(data)
    print('有个get请求，来自网站', origin)
    return Response(content=data_json, media_type="json")


# 这里单纯的接收表单数据
@app.post("/")
def mypost(username: str = Form(), password: str = Form()):
    data = {'username': username, 'password': password}
    print(data)
    return ujson.dumps(data)


# 接收json字符串
@app.post("/json/")
def myjson(data=Body()):
    print("我接收到了json字符串", data)
    newdata = ujson.loads(data)
    return JSONResponse(newdata)


# 用来测试json和xml数据,服务器端也要跨域
# uvicorn service:app --reload

