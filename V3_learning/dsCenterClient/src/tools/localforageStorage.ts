/**
 * @author Leroy
 * @description localforage storage for pinia-plugin-persistedstate
 * 使用 localforage 作为 pinia-plugin-persistedstate 的存储方案，避开localStorage 和 sessionStorage 的容量限制问题
 */

import localforage from "localforage";

// 初始化配置
localforage.config({
  name: "my-vue-app",
  storeName: "pinia-store",
  description: "Pinia persisted state storage via localForage",
});

export const getItem = async (key: string): Promise<string | null> => {
  const value = await localforage.getItem<string>(key);
  return value ? JSON.stringify(value) : null;
};

export const setItem = async (key: string, value: string): Promise<void> => {
  try {
    const parsed = JSON.parse(value);
    await localforage.setItem(key, parsed);
  } catch {
    // 如果不是 JSON，直接保存原字符串
    await localforage.setItem(key, value);
  }
};

export const removeItem = async (key: string): Promise<void> => {
  await localforage.removeItem(key);
};

// 实现一个符合 Storage 接口的 localforage 适配器
const localforageStorage = {
  getItem,
  setItem,
};

export default localforageStorage;
