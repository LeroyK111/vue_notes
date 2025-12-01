#!/usr/bin/env node
"use strict";

import type { Router } from "vue-router";

/**
 * @author Leroy
 * @description 全局路由守卫配置 + 独立路由守卫
 */


export const interception = (router: Router)=>{
  console.log("全局路由表", router.getRoutes());
  



}