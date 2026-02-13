import { ref, watch } from "vue";

export function useClipboard(timeoutMs: number = 1500) {
  // 1. 响应式状态
  const isCopied = ref(false); // 复制是否成功
  const error = ref<Error | null>(null); // 复制时发生的错误

  let timer: number | null = null;

  async function copy(text: string) {
    if (timer !== null) {
      clearTimeout(timer);
    }

    error.value = null;

    try {
      // 使用 Clipboard API 进行复制 (现代浏览器推荐)
      await navigator.clipboard.writeText(text);
      isCopied.value = true;

      // 设置定时器，在指定时间后重置状态
      timer = setTimeout(() => {
        isCopied.value = false;
        timer = null;
      }, timeoutMs) as unknown as number;
    } catch (err) {
      // 捕获权限错误或浏览器不支持错误
      error.value = err as Error;
      isCopied.value = false;
      console.error("Failed to copy text: ", err);
    }
  }

  // 组件卸载或 Hook 实例销毁时清除定时器
  watch(() => isCopied.value, () => {
    if (!isCopied.value && timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  }, { immediate: true });

  return {
    isCopied,
    error,
    copy,
  };
}
