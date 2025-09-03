// worker.ts
export {}



const ctx = self as DedicatedWorkerGlobalScope

ctx.onmessage = (event: MessageEvent) => {
  console.log("👷 工人收到任务:", event.data)
  const result = doHeavyWork(event.data as number)
  ctx.postMessage(result)
}

// 模拟耗时计算
function doHeavyWork(number: number): number {
  let total = 0
  for (let i = 0; i < 500_000_000; i++) { // 半十亿次
    total += number
  }
  return total
}
