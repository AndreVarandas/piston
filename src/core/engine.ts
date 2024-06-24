import { animationFrames } from 'rxjs'
import { initCanvas } from './canvas'
import { initInputManager, KeyState } from './input'

function resizeCanvas(
  canvas: HTMLCanvasElement,
  gameWidth: number,
  gameHeight: number,
) {
  const aspectRatio = gameWidth / gameHeight
  let width = window.innerWidth
  let height = window.innerHeight

  if (width / height > aspectRatio) {
    width = height * aspectRatio
  } else {
    height = width / aspectRatio
  }

  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
}

export function startGame(
  canvasId: string,
  gameWidth: number,
  gameHeight: number,
  update: (
    context: CanvasRenderingContext2D,
    keys: KeyState,
    time: number,
  ) => void,
): void {
  const [canvas, context] = initCanvas(canvasId, gameWidth, gameHeight)
  const keys = initInputManager()

  // Configure the context for pixel art
  context.imageSmoothingEnabled = false

  window.addEventListener('resize', () =>
    resizeCanvas(canvas, gameWidth, gameHeight),
  )
  resizeCanvas(canvas, gameWidth, gameHeight)

  animationFrames().subscribe(({ elapsed }) => {
    context.clearRect(0, 0, gameWidth, gameHeight)
    update(context, keys, elapsed)
  })
}
