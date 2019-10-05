import './src/styles/global.css'
import { wrapRootElement as wrap } from './wrap-root-element'

export const wrapRootElement = wrap
let socket
let hiddenTimer

var hidden, visibilityChange
if (typeof document.hidden !== 'undefined') {
  // Opera 12.10 and Firefox 18 and later support
  hidden = 'hidden'
  visibilityChange = 'visibilitychange'
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden'
  visibilityChange = 'msvisibilitychange'
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden'
  visibilityChange = 'webkitvisibilitychange'
}

document.addEventListener(visibilityChange, e => {
  if (document[hidden]) {
    hiddenTimer = setTimeout(() => {
      if (socket) {
        socket.close()
      }
    }, 300000)
  } else {
    if (hiddenTimer) {
      clearTimeout(hiddenTimer)
      hiddenTimer = undefined
    }
  }
})

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (!socket) {
    try {
      socket = new WebSocket('wss://malcoded.com/v1/api/ws')

      socket.onopen = function() {
        console.log('Connected')
        socket.send(
          JSON.stringify({
            event: 'event',
            data: {
              type: 'pageview',
              pageLocation: location.pathname,
            },
          })
        )
        setInterval(() => {
          if (socket.readyState === socket.OPEN) {
            socket.send('')
          }
        }, 30000)
      }
    } catch (e) {
      console.info('Failed to start websocket connection.')
    }
  } else {
    socket.send(
      JSON.stringify({
        event: 'event',
        data: {
          type: 'pageview',
          pageLocation: location.pathname,
        },
      })
    )
  }
}
