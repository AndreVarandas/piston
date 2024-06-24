import { DrawSpriteOptions, drawSprite } from './sprite'

export type AnimationOptions = {
  frameWidth: number
  frameHeight: number
  frameCount: number
  frameDuration: number // Duration of each frame in milliseconds
}

export type AnimationState = {
  currentFrame: number
  lastUpdateTime: number
}

export type Animation = {
  options: AnimationOptions
  state: AnimationState
}

export type Animations = {
  [key: string]: Animation
}

export function createAnimation(options: AnimationOptions): Animation {
  return {
    options,
    state: {
      currentFrame: 0,
      lastUpdateTime: 0,
    },
  }
}

export function updateAnimation(
  animation: Animation,
  time: number,
): AnimationState {
  const { options, state } = animation
  if (time - state.lastUpdateTime >= options.frameDuration) {
    return {
      currentFrame: (state.currentFrame + 1) % options.frameCount,
      lastUpdateTime: time,
    }
  }
  return state
}

export function drawAnimation(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  animation: Animation,
  options: DrawSpriteOptions,
): void {
  const { currentFrame } = animation.state
  const frameX = currentFrame * animation.options.frameWidth

  drawSprite(context, image, {
    ...options,
    frameX,
    frameY: 0, // Assumes that all animations are horizontal
    frameWidth: animation.options.frameWidth,
    frameHeight: animation.options.frameHeight,
  })
}
