type DrawSpriteOptions = {
  x: number
  y: number
  width?: number
  height?: number
  rotation?: number // Rotation in radians
  opacity?: number // Opacity value between 0 and 1
  scaleX?: number // Scale factor on X axis
  scaleY?: number // Scale factor on Y axis
}

export async function loadSprite(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = src
    image.onload = () => resolve(image)
    image.onerror = error =>
      reject(new Error(`Failed to load image: ${src} - ${error}`))
  })
}

export function drawSprite(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  options: DrawSpriteOptions,
): void {
  const {
    x,
    y,
    width,
    height,
    rotation = 0,
    opacity = 1,
    scaleX = 1,
    scaleY = 1,
  } = options

  context.save() // Save the current state

  context.translate(x, y) // Move to the x, y position
  context.rotate(rotation) // Rotate
  context.scale(scaleX, scaleY) // Scale
  context.globalAlpha = opacity // Set opacity

  if (typeof width === 'undefined' || typeof height === 'undefined') {
    context.drawImage(image, 0, 0)
  } else {
    context.drawImage(image, 0, 0, width, height)
  }

  context.restore() // Restore the original state
}
