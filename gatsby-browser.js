import './src/styles/global.css'
import { wrapRootElement as wrap } from './wrap-root-element'

export const wrapRootElement = wrap
let socket
let userLocation

export const onClientEntry = () => {
  var myRequest = new XMLHttpRequest()

  myRequest.onload = function(e) {
    userLocation = JSON.parse(myRequest.response).location
  }
  myRequest.open('GET', 'https://malcoded.com/v1/api/geoip/isEu', true)
  myRequest.send()
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (!socket) {
    console.log('creating socket')

    socket = socket = new WebSocket('ws://malcoded.com/v1/api/ws')

    socket.onopen = function() {
      console.log('Connected')
      socket.send(
        JSON.stringify({
          event: 'event',
          data: {
            type: 'pageview',
            pageLocation: location.pathname,
            userLocation: userLocation,
          },
        })
      )
    }
  } else {
    socket.send(
      JSON.stringify({
        event: 'event',
        data: {
          type: 'pageview',
          pageLocation: location.pathname,
          userLocation: userLocation,
        },
      })
    )
  }
}
