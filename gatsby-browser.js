import './src/styles/global.css'
import io from 'socket.io-client'
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
    socket = io('https://malcoded.com', {
      path: '/v1/api/ws',
      // transports: ['websocket'],
    })
    socket.on('connect', () => {
      console.log('Success')
    })
    socket.on('error', err => {
      console.error(err)
    })
    socket.open()
  }
  socket.emit('event', {
    type: 'pageview',
    pageLocation: location.pathname,
    userLocation: userLocation,
  })
}
