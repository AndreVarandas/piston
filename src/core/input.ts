import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

export function initInputManager() {
  const keydown$ = fromEvent<KeyboardEvent>(window, 'keydown').pipe(
    map(event => ({ key: event.key, type: 'down' })),
  )
  const keyup$ = fromEvent<KeyboardEvent>(window, 'keyup').pipe(
    map(event => ({ key: event.key, type: 'up' })),
  )

  return { keydown$, keyup$ }
}
