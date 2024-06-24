export { initCanvas } from './core/canvas'
export { initInputManager } from './core/input'
export { startGame } from './core/engine'
export { loadSprite, drawSprite } from './assets/sprite'
export {
  createAnimation,
  updateAnimation,
  drawAnimation,
} from './assets/animation'
export { loadSound, playSound, stopSound } from './assets/sound'

export type { AnimationOptions, AnimationState } from './assets/animation'
export type { KeyState } from './core/input'
