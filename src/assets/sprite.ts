export type DrawSpriteOptions = {
  x: number
  y: number
  width?: number
  height?: number
  rotation?: number // Rotation in radians
  opacity?: number // Opacity value between 0 and 1
  scaleX?: number // Scale factor on X axis
  scaleY?: number // Scale factor on Y axis
  frameX?: number // X position of the frame in the sprite sheet
  frameY?: number // Y position of the frame in the sprite sheet
  frameWidth?: number // Width of a single frame
  frameHeight?: number // Height of a single frame
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
    frameX = 0,
    frameY = 0,
    frameWidth,
    frameHeight,
  } = options

  context.save() // Save the current state

  context.translate(x, y) // Move to the x, y position
  context.rotate(rotation) // Rotate
  context.scale(scaleX, scaleY) // Scale
  context.globalAlpha = opacity // Set opacity

  if (frameWidth !== undefined && frameHeight !== undefined) {
    context.drawImage(
      image,
      frameX,
      frameY,
      frameWidth,
      frameHeight,
      0,
      0,
      width || frameWidth,
      height || frameHeight,
    )
  } else {
    if (typeof width === 'undefined' || typeof height === 'undefined') {
      context.drawImage(image, 0, 0)
    } else {
      context.drawImage(image, 0, 0, width, height)
    }
  }

  context.restore() // Restore the original state
}
