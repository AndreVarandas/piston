export function initCanvas(
  canvasId: string,
  gameWidth: number,
  gameHeight: number,
): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement
  if (!canvas) {
    throw new Error(`Canvas with id ${canvasId} not found. Exiting...`)
  }
  canvas.width = gameWidth
  canvas.height = gameHeight

  const context = canvas.getContext('2d')!

  // Configure the context for pixel art
  context.imageSmoothingEnabled = false

  return [canvas, context]
}
