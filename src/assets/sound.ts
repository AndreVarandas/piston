export function loadSound(src: string): HTMLAudioElement {
  const audio = new Audio(src)
  return audio
}

export function playSound(audio: HTMLAudioElement): void {
  audio.play()
}

export function stopSound(audio: HTMLAudioElement): void {
  audio.pause()
  audio.currentTime = 0
}
