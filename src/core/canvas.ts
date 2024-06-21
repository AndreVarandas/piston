export function initCanvas(
  canvasId: string,
): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement
  if (!canvas) {
    throw new Error(`Canvas with id ${canvasId} not found`)
  }
  const context = canvas.getContext('2d')!
  return [canvas, context]
}
