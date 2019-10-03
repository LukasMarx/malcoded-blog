import './src/styles/global.css'
import io from 'socket.io-client'
import { wrapRootElement as wrap } from './wrap-root-element'

export const wrapRootElement = wrap

let socket

export const onRouteUpdate = ({ location, prevLocation }) => {
  // if (!socket) {
  //   console.log('creating socket')
  //   socket = io('http://localhost:54247', {
  //     path: '/v1/api/ws',
  //     // transports: ['websocket'],
  //   })
  //   socket.on('connect', () => {
  //     console.log('Success')
  //   })
  //   socket.on('error', err => {
  //     console.error(err)
  //   })
  //   socket.open()
  // }
  // socket.emit('event', {
  //   type: 'pageview',
  //   pageLocation: location.pathname,
  //   userLocation: 'DE',
  // })
}
