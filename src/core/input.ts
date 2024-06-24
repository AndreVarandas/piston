import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

export type KeyState = {
  keydown$: any
  keyup$: any
  keys: { [key: string]: boolean } // Store the state of each key
}

export function initInputManager(): KeyState {
  const keydown$ = fromEvent<KeyboardEvent>(window, 'keydown').pipe(
    map(event => ({ key: event.key, type: 'keydown' })),
  )
  const keyup$ = fromEvent<KeyboardEvent>(window, 'keyup').pipe(
    map(event => ({ key: event.key, type: 'keyup' })),
  )

  const keys: { [key: string]: boolean } = {}

  keydown$.subscribe(event => {
    keys[event.key] = true
  })

  keyup$.subscribe(event => {
    keys[event.key] = false
  })

  return { keydown$, keyup$, keys }
}
