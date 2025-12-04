// src/types/schema.ts

/**
 * JSON 基本类型
 */
export type JsonPrimitive = string | number | boolean | null | undefined;

/**
 * JSON 对象：键为字符串，值为任意 JsonValue
 */
export interface JsonObject {
  [key: string]: JsonValue;
}

/**
 * JSON 数组：元素为任意 JsonValue
 */
export interface JsonArray extends Array<JsonValue> {}

/**
 * 顶级 JSON 值类型：可以是基本类型、对象或数组
 */
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;


export type NodeType = "string" | "number" | "boolean" | "object" | "array";

export interface EditorNode {
  key: string; // 数据键 (如 "name")
  title: string; // 中文标题 (如 "姓名")
  type: NodeType; // 数据类型
  value?: string | number | boolean; // 基本类型的值
  children?: EditorNode[]; // 复杂类型的子节点列表
}
