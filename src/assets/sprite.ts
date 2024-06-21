export function loadSprite(src: string): HTMLImageElement {
  const image = new Image()
  image.src = src
  return image
}

export function drawSprite(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
): void {
  context.drawImage(image, x, y)
}
