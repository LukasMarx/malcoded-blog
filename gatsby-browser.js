import './src/styles/global.css'
import { wrapRootElement as wrap } from './wrap-root-element'

export const wrapRootElement = wrap
let socket

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
