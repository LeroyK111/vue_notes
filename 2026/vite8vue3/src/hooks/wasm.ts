// src/components/DataProcessor.ts
// 之前需要依赖 vite-plugin-wasm 或是 ?init 等 query，现在直接作为标准模块导入
import { process_image } from '../wasm/image_processor.wasm';

export function runVisionTask(imageData: Uint8Array) {
  // 可以直接同步使用 wasm 暴露出来的方法（基于 top-level await 和 ESM 提案）
  const result = process_image(imageData);
  console.log('Processed:', result);
}

