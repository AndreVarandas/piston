import { animationFrames } from 'rxjs'
import { initCanvas } from './canvas'
import { initInputManager } from './input'

export function startGame(
  canvasId: string,
  update: (context: CanvasRenderingContext2D, keys: any) => void,
): void {
  const [canvas, context] = initCanvas(canvasId)
  const { keydown$, keyup$ } = initInputManager()

  animationFrames().subscribe(() => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    update(context, { keydown$, keyup$ })
  })
}
