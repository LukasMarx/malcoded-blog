import React from 'react'
import styles from './Demo.module.css'
import sdk from '@stackblitz/sdk'
import Button from './../../elements/button/Button'
import spaceShuttle from './../../../assets/space-shuttle.svg'
import spaceShuttleBase from './../../../assets/space-shuttle-base.svg'

export interface DemoProps {
  gitHub: string
}

export interface DemoState {
  running: boolean
  baseBottom: number
  bgColor: string
  shuttleBottom: number
  boosterOn: boolean
  boosterOpacity: number
  flamesOn: boolean
}

class Demo extends React.Component<DemoProps, DemoState> {
  exampleRef: React.RefObject<HTMLDivElement>
  constructor(props: DemoProps) {
    super(props)
    this.state = {
      running: false,
      baseBottom: 0,
      bgColor: 'white',
      shuttleBottom: 0,
      boosterOn: false,
      boosterOpacity: 1,
      flamesOn: false,
    }
    this.exampleRef = React.createRef()

    this.loadStackBlitz = this.loadStackBlitz.bind(this)
  }
  loadStackBlitz() {
    this.setState({
      baseBottom: 1000,
      bgColor: '#210D44',
      shuttleBottom: -1000,
      boosterOn: true,
      boosterOpacity: 0,
      flamesOn: true,
    })
    // sdk.embedGithubProject(this.exampleRef.current, this.props.gitHub, {
    //   height: 500,
    //   view: 'preview',
    //   hideNavigation: true,
    // })
  }

  render() {
    return (
      <div className={styles.placeholder}>
        <button onClick={this.loadStackBlitz}>Start</button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 812 500">
          <defs>
            <clipPath id="a">
              <path d="M0 0h812v500H0z" />
            </clipPath>
          </defs>
          <path
            d="M0 0h812v503H0V0z"
            fill={this.state.bgColor}
            className={styles.bg}
          />
          <path
            d="M230.8 170.1v30h-5.6v-30h5.6zm22.6 30h-5.7q-.4-.8-.6-1.9-2 2.3-5.3 2.3-3 0-5.1-1.8-2-1.8-2-4.5 0-3.4 2.4-5.2 2.5-1.8 7.2-1.8h2.6V186q0-1.5-.7-2.4-.8-.8-2.4-.8-1.4 0-2.2.6-.9.7-.9 2h-5.6q0-2 1.1-3.5 1.2-1.5 3.2-2.4 2.1-1 4.7-1 3.9 0 6.2 2 2.3 2 2.3 5.6v9.1q0 3 .8 4.6v.3zm-10.4-4q1.3 0 2.4-.5 1-.5 1.5-1.5v-3.6h-2q-4.3 0-4.6 3v.3q0 1 .7 1.7.8.7 2 .7zm26.7 4l-.1-2.1q-2.1 2.5-5.8 2.5-3.4 0-5.2-2-1.8-2-1.8-5.7V179h5.6v13.6q0 3.3 3 3.3 2.9 0 4-2v-15h5.6v21.2h-5.3zm9.5-21.1h5.3l.2 2.4q2.2-2.8 6-2.8 3.4 0 5 2 1.7 2 1.7 5.9V200h-5.6v-13.5q0-1.8-.8-2.6t-2.6-.8q-2.4 0-3.6 2v15h-5.6V179zm31.3 17q1.6 0 2.5-1 1-.8 1-2.2h5.3q0 2.2-1.1 4-1.2 1.7-3.2 2.7-2 1-4.4 1-4.5 0-7.2-2.9-2.6-2.9-2.6-8v-.3q0-4.9 2.6-7.8 2.6-3 7.1-3 4 0 6.4 2.3 2.4 2.3 2.4 6H314q0-1.6-1-2.6t-2.6-1q-2 0-3 1.4t-1 4.7v.5q0 3.3 1 4.7 1 1.4 3 1.4zM328 170v11.2q2.2-2.7 5.6-2.7 6.9 0 7 8V200H335v-13.4q0-1.8-.7-2.7-.8-.8-2.6-.8-2.5 0-3.6 1.9v15h-5.7v-30h5.7zm23.2 1.6l-.6 19.7H346l-.7-19.7h6zm-3 22.8q1.5 0 2.3.8.9.8.9 2.2 0 1.2-.9 2-.8 1-2.3 1-1.4 0-2.2-1-1-.8-1-2 0-1.3 1-2.2.8-.8 2.2-.8zM180 173.8h5.6v5.2h3.6v4.1h-3.6v10.6q0 1.1.5 1.6.4.6 1.7.6 1 0 1.7-.2v4.3q-1.7.5-3.5.5-5.9 0-6-6v-11.4h-3.1V179h3v-5.2zm11.5 15.8v-.3q0-3.1 1.2-5.6 1.2-2.4 3.5-3.8 2.3-1.3 5.3-1.3 4.3 0 7 2.6t3 7.1v1.5q0 4.8-2.7 7.8-2.7 2.9-7.3 2.9-4.5 0-7.3-3-2.7-2.9-2.7-7.9zm5.7.2q0 3 1 4.6 1.2 1.5 3.3 1.5 2 0 3.2-1.5 1.2-1.6 1.2-5 0-3-1.2-4.6-1.1-1.6-3.2-1.6-2 0-3.2 1.6-1.1 1.6-1.1 5zm-116.6-11v5.5l-2.1-.2q-3.2 0-4.2 2.2V200h-5.7V179H74l.1 2.5q1.7-3 4.7-3 1 0 1.8.3zm12.4 21.7q-4.7 0-7.6-2.9-3-2.8-3-7.5v-.6q0-3.2 1.3-5.7 1.2-2.5 3.5-3.9 2.2-1.3 5.1-1.3 4.4 0 6.9 2.7 2.4 2.8 2.4 7.8v2.3H88.1q.3 2 1.6 3.3 1.4 1.2 3.5 1.2 3.3 0 5.1-2.3l2.8 3q-1.3 1.9-3.4 2.9-2.2 1-4.8 1zm-.7-17.3q-1.7 0-2.7 1-1 1.2-1.4 3.3H96v-.4q0-1.9-1-3-1-1-2.8-1zm30.5 17H117q-.4-.9-.6-2-2 2.3-5.3 2.3-3.1 0-5.2-1.8-2-1.8-2-4.5 0-3.4 2.5-5.2 2.5-1.8 7.2-1.8h2.6V186q0-1.5-.8-2.4-.7-.8-2.3-.8-1.5 0-2.3.6-.8.7-.8 2h-5.6q0-2 1.1-3.5t3.2-2.4q2-1 4.7-1 3.9 0 6.2 2 2.3 2 2.3 5.6v9.1q0 3 .8 4.6v.3zm-10.4-4q1.3 0 2.3-.6 1-.5 1.6-1.5v-3.6H114q-4.3 0-4.5 3v.3q0 1 .7 1.7t2 .7zm13-6.8q0-5 2.2-7.9 2.2-3 6-3 3.2 0 5.2 2.4V170h5.7v30h-5.1l-.3-2.2q-2.1 2.6-5.4 2.6-3.8 0-6-3-2.3-2.9-2.3-8.1zm5.7.4q0 3 1 4.5 1 1.6 3 1.6 2.6 0 3.7-2.2v-8.3q-1-2.2-3.7-2.2-4 0-4 6.6zm21.7-10.8l4 13.1 3.8-13.1h6l-8.4 24.4-.5 1.1q-1.9 4.1-6.2 4.1-1.3 0-2.5-.3V204h.8q1.6 0 2.4-.5.8-.5 1.3-1.6l.6-1.7-7.4-21.2h6zm110-25.8h-8.9v-28.4h8.8q3.7 0 6.7 1.7t4.6 4.8q1.7 3.1 1.7 7v1.4q0 4-1.6 7-1.7 3.1-4.6 4.8-3 1.7-6.7 1.7zm-.1-23.7h-2.9v19h2.8q3.5 0 5.3-2.2 1.8-2.3 1.8-6.4v-1.5q0-4.4-1.7-6.6-1.8-2.3-5.3-2.3zm26.6 24.1q-4.6 0-7.6-2.8-2.9-2.9-2.9-7.6v-.6q0-3.2 1.2-5.7 1.3-2.5 3.5-3.8 2.3-1.4 5.2-1.4 4.3 0 6.8 2.7 2.5 2.8 2.5 7.8v2.3h-13.5q.3 2 1.7 3.3 1.4 1.3 3.5 1.3 3.2 0 5-2.4l2.8 3.1q-1.2 1.8-3.4 2.8-2.2 1-4.8 1zm-.6-17.3q-1.7 0-2.8 1.1-1 1.1-1.3 3.3h7.8v-.5q0-1.9-1-2.9t-2.7-1zM301 132h5.3l.2 2.4q2.2-2.8 6-2.8 4.1 0 5.6 3.2 2.3-3.2 6.4-3.2 3.4 0 5.1 2 1.7 2 1.7 6v13.5h-5.7v-13.4q0-1.8-.7-2.7-.7-.8-2.5-.8-2.5 0-3.5 2.4v14.5h-5.6v-13.4q0-1.9-.7-2.7-.7-.8-2.5-.8-2.4 0-3.5 2v15h-5.6V132zm33.7 10.6v-.2q0-3.2 1.3-5.6 1.2-2.5 3.4-3.8 2.3-1.4 5.3-1.4 4.3 0 7 2.6t3 7.1v1.5q0 4.8-2.7 7.8t-7.2 3q-4.6 0-7.3-3-2.8-3-2.8-8zm5.7.2q0 3 1.1 4.6 1.2 1.6 3.3 1.6 2 0 3.2-1.6 1.1-1.6 1.1-5 0-3-1.1-4.6-1.2-1.6-3.3-1.6-2 0-3.2 1.6-1.1 1.6-1.1 5zM240 153.2h-5.7q-.4-.7-.6-1.9-2 2.3-5.3 2.3-3 0-5.1-1.8-2-1.8-2-4.5 0-3.4 2.4-5.2 2.5-1.8 7.2-1.8h2.6v-1.2q0-1.5-.7-2.3-.8-1-2.4-1-1.4 0-2.2.8-.9.7-.9 1.8h-5.6q0-1.8 1.1-3.3 1.2-1.6 3.2-2.5 2.1-.9 4.7-.9 3.9 0 6.2 2 2.3 2 2.3 5.5v9.2q0 3 .8 4.5v.3zm-10.4-3.9q1.3 0 2.4-.5 1-.6 1.5-1.5v-3.7h-2q-4.3 0-4.6 3v.3q0 1 .7 1.7.8.7 2 .7zM187 132.1v21.1h-5.7v-21.1h5.7zm-6-5.5q0-1.2.8-2 .9-.9 2.4-.9 1.4 0 2.3.8.8.9.8 2.1 0 1.3-.8 2.1-1 .9-2.3.9-1.5 0-2.3-.9-.9-.8-.9-2zm22 20.8q0-1-1-1.6-1-.6-3.2-1.1-7.6-1.6-7.6-6.4 0-2.8 2.4-4.7 2.3-1.9 6-1.9 4 0 6.5 2 2.4 1.8 2.4 4.8h-5.6q0-1.2-.8-2t-2.4-.8q-1.5 0-2.3.7-.7.6-.7 1.6t.9 1.5q.8.6 3 1 2 .4 3.5 1 4.5 1.6 4.5 5.7 0 2.9-2.5 4.6-2.5 1.8-6.4 1.8-2.7 0-4.7-1-2-.9-3.3-2.5-1.1-1.7-1.1-3.6h5.3q.1 1.5 1.1 2.3 1 .8 2.8.8 1.6 0 2.5-.6.8-.6.8-1.6zM87.9 124.8v4.7H79v23.7h-5.9v-23.7h-8.6v-4.7h23.2zm8.5-1.6v11.2q2.2-2.7 5.6-2.7 6.9 0 7 8v13.5h-5.7V140q0-1.9-.7-2.7-.8-.9-2.6-.9-2.5 0-3.6 2v15h-5.7v-30h5.7zm26.6 30.4q-4.7 0-7.6-2.8-3-2.9-3-7.6v-.6q0-3.2 1.3-5.7 1.2-2.5 3.5-3.8 2.3-1.4 5.1-1.4 4.4 0 6.9 2.7 2.5 2.8 2.5 7.8v2.3H118q.3 2 1.7 3.3 1.3 1.3 3.4 1.3 3.3 0 5.1-2.4l2.8 3.1q-1.3 1.8-3.4 2.8-2.2 1-4.8 1zm-.7-17.3q-1.7 0-2.7 1.1-1 1.1-1.3 3.3h7.8v-.5q0-1.9-1-2.9t-2.8-1zm24.5-4.3v5.4l-2-.2q-3.3 0-4.3 2.2v13.8h-5.6v-21.1h5.3l.2 2.5q1.7-2.9 4.7-2.9.9 0 1.7.3zm12.4 21.6q-4.7 0-7.6-2.8-3-2.9-3-7.6v-.6q0-3.2 1.3-5.7t3.5-3.8q2.3-1.4 5.2-1.4 4.3 0 6.8 2.7 2.5 2.8 2.5 7.8v2.3h-13.5q.3 2 1.7 3.3 1.3 1.3 3.5 1.3 3.2 0 5-2.4l2.8 3.1q-1.2 1.8-3.4 2.8-2.2 1-4.8 1zm-.7-17.3q-1.6 0-2.7 1.1-1 1.1-1.3 3.3h7.8v-.5q0-1.9-1-2.9t-2.8-1z"
            fill-rule="evenodd"
            fill="#202020"
          />
          <defs>
            <filter
              id="h"
              x="-200%"
              y="-200%"
              width="400%"
              height="400%"
              filterUnits="objectBoundingBox"
              color-interpolation-filters="sRGB"
            >
              <feGaussianBlur
                xmlns="http://www.w3.org/2000/svg"
                in="SourceGraphic"
                stdDeviation="4.3"
              />
              <feOffset
                xmlns="http://www.w3.org/2000/svg"
                result="pf_100_offsetBlur"
              />
              <feFlood
                xmlns="http://www.w3.org/2000/svg"
                flood-color="#000"
                flood-opacity=".7"
              />
              <feComposite
                xmlns="http://www.w3.org/2000/svg"
                in2="pf_100_offsetBlur"
                operator="in"
                result="pf_100_dropShadow"
              />
              <feBlend
                xmlns="http://www.w3.org/2000/svg"
                in="SourceGraphic"
                in2="pf_100_dropShadow"
              />
            </filter>
          </defs>
          <g onClick={this.loadStackBlitz} style={{ cursor: 'pointer' }}>
            <g filter="url(#h)">
              <path fill="#6634BB" d="M137.5 250h147v50h-147z" />
            </g>
            <path
              d="M179 280q0-1.2-.8-1.8-.8-.6-2.9-1.2-2-.7-3.2-1.4-3.3-1.7-3.3-4.7 0-1.6.9-2.8.9-1.2 2.5-1.9t3.7-.7q2 0 3.7.8 1.6.7 2.5 2 .8 1.4.8 3.2h-4q0-1.4-.7-2-.9-.8-2.4-.8-1.4 0-2.2.6-.8.6-.8 1.6t1 1.6q.9.6 2.7 1.2 3.4 1 4.9 2.5 1.5 1.5 1.5 3.7 0 2.5-1.8 4-2 1.3-5.1 1.3-2.2 0-4-.8-1.9-.8-2.8-2.2-1-1.4-1-3.3h4q0 3.2 3.8 3.2 1.4 0 2.2-.6.8-.5.8-1.6zm21-14.2v3.2h-5.8v16h-4v-16h-5.8v-3.2h15.7zm14.5 19.2l-1.3-4h-7l-1.3 4h-4.2l7.1-19.2h3.7l7.2 19.2h-4.2zm-4.8-14.4l-2.4 7.2h4.8l-2.4-7.2zm21.5 14.4l-3.6-7h-3.2v7h-4v-19.2h7.2q3.4 0 5.3 1.5 1.8 1.5 1.8 4.3 0 2-.8 3.3-.9 1.3-2.6 2l4.1 7.9v.2h-4.2zm-6.8-16v5.8h3.2q1.5 0 2.3-.8.9-.8.9-2.1 0-1.4-.8-2.1-.8-.8-2.4-.8h-3.2zm27.8-3.2v3.2h-6v16h-3.9v-16h-5.8v-3.2h15.7z"
              fill-rule="evenodd"
              fill="#FFF"
            />
          </g>
          <g
            id="base"
            transform={`translate(0, ${this.state.baseBottom})`}
            className={styles.base}
          >
            <path
              d="M667.6 237.4v-3.9h131L672.1 359h126.2L669 489.2l-2.7-2.7 123-123.7H663l126.2-125.5H667.6z"
              fill="#5B5B5B"
            />
            <path
              d="M692.9 494.4l-2.7-2.7 99-97.6H663l126.2-125.6H667.5L506 244.3v-10.8h159.4v3.9H510v3.6l157.8 23.7h130.8L672.2 390.2h126.3L692.9 494.4z"
              fill="#5B5B5B"
            />
            <path
              vector-effect="non-scaling-stroke"
              stroke-width="5"
              stroke="#5B5B5B"
              stroke-linejoin="round"
              stroke-miterlimit="3"
              d="M774 382.7l-.3.4"
            />
            <path
              d="M684 377.9h-18.8l18.4-17 .5-17.4 13.8 13.7v-28.4l13.7 14.5v-26.6l13 12.3v-25.5l11.7 11.6v-21.6c0-.4.2-.8.6-.9.4-.1.8 0 1.1.3a510.2 510.2 0 0 0 13.3 14.8l1 .7v-31.6l15.8 14.4-1.5-25h.7l-29.1-28.5V269l-30.5-31.2V269l-30.4-31.2v28.9h-2v-33.6l30.5 31.2v-31.2l30.5 31.2v-31.1l32 31.2v-31.5l29.6 34-27.8 1v1l-1-.9h-.5l1.7 27.8-16.1-14.6v28.5l-.2.4-.2.4-.5.2c-.2.1-.5.2-.7 0l-.6-.1-.8-.5c-1.3-1-2.5-2.2-3.5-3.4l-1.1-1-1.3-1.5a211 211 0 0 1-7-8v23.5l-11.7-11.6v25.3l-13-12.3v27l-13.8-14.5v28.2L685.9 348l-.3 11.2.3-.4v31l29-29v27.6l27-27.6v27.4l24.7-27.8v28.1l6.4-6.1 1.3 1.4-9.6 9.2v-27.6l-24.8 27.8v-27.7l-26.8 27.6v-27.6l-29 29m86-126.6h-1m-85.6 95.7L670.1 376h13l.4-12.4zm86.6-97.6l23.8-1-23.8-27v28z"
              fill-rule="evenodd"
              fill="#5B5B5B"
            />
            <path
              d="M779 376.5h.1l18.6-17.8V378l-14 .4 11.1 10.5h-23.2l13.8 13h-27.7l13.8 13.8h-28.4l14.7 15.4-28-1.6 13.4 13h-26.8l15.2 15.3h-29l16 16h-31.3l13.6 13.6-1.3 1.3-16.9-16.8H714l-16-16h29l-15.2-15.3h26.8L725 427.2l28.2 1.6-14.4-15.1h28.2L753 399.9h27.5l-13.8-13H790l-9.6-9-5.7 5.5-1.3-1.4m8.7-5.6l13.7-.4v-12.8L782 376.4z"
              fill-rule="evenodd"
              fill="#5B5B5B"
            />
            <path
              d="M517.6 244.9h-1.9V233l9.5 9.5v-9.4l13 12.4v-12.4l13 12.4V233l16 16v-16l19.6 19.6v-19.6l22.5 22.5v-22.5l25.4 26v-26l31.4 32.9-1.4 1.3-28-29.5V264l-25.5-26.1v22.4l-22.5-22.5v19.7l-19.5-19.7v16l-16-16V250l-13-12.3V250L527 237.7v9.5l-9.5-9.5v7.2z"
              fill="#5B5B5B"
            />
            <path
              d="M664.5 498.3v-287h133.9v287H664.5zm7.7-7.7V219h118.5v271.7H672.2z"
              fill-rule="evenodd"
              fill="#5B5B5B"
            />
            <path
              d="M679.7 216.3l54-54 54.7 54H679.7zm9.2-3.8l44.7-44.7 45.5 44.7h-90.2z"
              fill-rule="evenodd"
              fill="#5B5B5B"
            />
            <path
              d="M752.2 147v-1h2v69.3h-2V147zm-8 15.1v-1h2v50.6h-2v-49.6z"
              fill="#5B5B5B"
            />
            <path d="M418.7 464.7h168.4v16.7H418.7v-16.7z" fill="#626266" />
            <path d="M391.9 473h243v16.8H392V473z" fill="#424246" />
            <path d="M351.2 485.8H812v16.7H351.2v-16.7z" fill="#333335" />
          </g>
          <g
            id="shuttle"
            transform={`translate(0, ${this.state.shuttleBottom})`}
            className={styles.shuttle}
          >
            <path
              d="M507 184.2c13.5 9 30.3 31.4 32.9 50.6h-33v-50.6z"
              fill="#5022A2"
            />
            <path d="M507 234.4h32.9v173.4h-33V234.4z" fill="#7246BF" />
            <path
              d="M550.4 237.7a69.1 69.1 0 0 1 10.6 17.2h-10.6v-17.2z"
              fill="#DFDFEA"
            />
            <path d="M550.4 254.7H561v203h-10.6v-203z" fill="#DFDFEA" />
            <path
              d="M550.4 237.7c-4.3 5.2-7.9 11-10.5 17.2h10.5v-17.2z"
              fill="#BDBDC8"
            />
            <path d="M539.9 254.7h10.5v203H540v-203z" fill="#BDBDC8" />
            <path d="M562.6 468.3l2.5 5.7h-14.7v-5.7h12.2z" fill="#5B5B5E" />
            <path d="M561 453.2l6 16.3h-16.6v-16.3H561z" fill="#DFDFEA" />
            <path d="M538.3 468.3l-2.6 5.7h14.7v-5.7h-12.1z" fill="#3D3D40" />
            <path d="M539.9 453.2l-6.1 16.3h16.6v-16.3h-10.5z" fill="#BDBDC8" />
            <path
              d="M539.9 441.7h21v1.3h-21v-1.3zm0 2.6h21v1.2h-21v-1.2zm0 2.5h21v1.3h-21v-1.3zm0 2.6h21v1.3h-21v-1.3z"
              fill="#800202"
            />
            <path d="M539.9 255h21v2.2h-21v-2.3z" fill="#3D3D40" />
            <g
              fill="#FFF"
              className={styles.booster}
              style={{
                display: this.state.boosterOn ? 'block' : 'none',
                opacity: this.state.boosterOpacity,
              }}
            >
              <path d="M550.5 474h-13.3a638 638 0 0 1-41.4 186.3h54.7V474z" />
              <path d="M550.4 474h13.2A636.7 636.7 0 0 0 605 660.3h-54.6V474z" />
            </g>
            <path
              d="M507.5 184.2c-13.6 9-30.4 31.4-33 50.6h33v-50.6z"
              fill="#6634BB"
            />
            <path d="M474.5 234.4h33v173.4h-33V234.4z" fill="#9A68F2" />
            <path
              d="M464 237.7c-4.4 5.2-8 11-10.6 17.2H464v-17.2z"
              fill="#DFDFEA"
            />
            <path d="M453.4 254.7H464v203h-10.6v-203z" fill="#DFDFEA" />
            <path
              d="M464 237.7a69.2 69.2 0 0 1 10.5 17.2H464v-17.2z"
              fill="#BDBDC8"
            />
            <path d="M464 254.7h10.5v203H464v-203z" fill="#BDBDC8" />
            <path d="M451.8 468.3l-2.6 5.7H464v-5.7h-12.2z" fill="#5B5B5E" />
            <path d="M453.4 453.2l-6 16.3H464v-16.3h-10.6z" fill="#DFDFEA" />
            <path d="M476 468.3l2.7 5.7H464v-5.7h12z" fill="#3D3D40" />
            <path d="M474.5 453.2l6 16.3H464v-16.3h10.5z" fill="#BDBDC8" />
            <path
              d="M453.4 441.7h21v1.3h-21v-1.3zm0 2.6h21v1.2h-21v-1.2zm0 2.5h21v1.3h-21v-1.3zm0 2.6h21v1.3h-21v-1.3z"
              fill="#800202"
            />
            <path d="M453.4 255h21v2.2h-21v-2.3z" fill="#3D3D40" />
            <g
              fill="#FFF"
              id="booster"
              className={styles.booster}
              style={{
                display: this.state.boosterOn ? 'block' : 'none',
                opacity: this.state.boosterOpacity,
              }}
            >
              <path d="M464 474h-13.2a639.3 639.3 0 0 1-41.5 186.3H464V474z" />
              <path d="M463.9 474H477a639.3 639.3 0 0 0 41.5 186.3h-54.7V474z" />
            </g>
            <g>
              <path
                d="M507 255.9c12.8 10 19.3 28 19.4 54v110.4H507V255.9z"
                fill="#F0F0F4"
              />
              <path
                d="M588.2 420.3h-61.8V314.4a81.8 81.8 0 0 0 36.3 57.6c21.3 15.3 20.6 26.7 25.5 48.3z"
                fill="#3D3D40"
              />
              <path
                d="M529.3 343.8c-1.6-3.6-2.9-8-2.9-8v84.5h55l-1.4-7.5c-.7-3.6-1.5-7.2-2.4-10.7a52 52 0 0 0-3.2-8.5 33 33 0 0 0-5.5-7.8 52 52 0 0 0-9.9-8.6c-5.2-3.8-10.2-8-14.8-12.5a88 88 0 0 1-11.3-14.1s-2-3-3.6-6.8z"
                fill="#DFDFEA"
              />
              <path
                d="M507 276.7v-20.8a45 45 0 0 1 14.3 20.8H507z"
                fill="#3D3D40"
              />
              <path
                d="M507.5 281.8c5.6 0 11 1.8 12.8 5.4.5 1.5.7 3 .7 4.5-2 0-3.3-.4-4.5-1.3 0-2.4-5.8-5.4-9-5.4v-3.2z"
                fill="#262626"
              />
              <mask id="b">
                <path
                  d="M588.2 420.3l1.2 7.3-30.7 3.3v-10.6h29.5z"
                  fill="#fff"
                />
              </mask>
              <path
                d="M588.2 420.3l1.2 7.3-30.7 3.3v-10.6h29.5z"
                fill="#DFDFEA"
                mask="url(#b)"
                vector-effect="non-scaling-stroke"
                stroke-width="10"
                stroke="#3D3D40"
                stroke-linecap="square"
                stroke-miterlimit="3"
              />
              <mask id="c">
                <path d="M557.1 420.3v10.6l-30.7 6.7v-17.3h30.7z" fill="#fff" />
              </mask>
              <path
                d="M557.1 420.3v10.6l-30.7 6.7v-17.3h30.7z"
                fill="#DFDFEA"
                mask="url(#c)"
                vector-effect="non-scaling-stroke"
                stroke-width="10"
                stroke="#3D3D40"
                stroke-linecap="square"
                stroke-miterlimit="3"
              />
              <g
                className={styles.flames}
                style={{ display: this.state.flamesOn ? 'block' : 'none' }}
              >
                <path d="M428.9 418.4h58.5v1.9h-58.5v-2z" fill="#3D3D40" />
                <path
                  d="M510.6 472.3v.7c2.1 15.4 5 30.8 8.9 46.2 4.4-16.4 7.5-31.9 9.3-46.2V472.2c-.2-9.7-4.2-17.6-9.1-17.6-5 0-9 7.9-9.1 17.6z"
                  fill="#FF5F5F"
                />
                <linearGradient
                  id="d"
                  x1=".5"
                  y1=".1"
                  x2=".5"
                  y2="1.2"
                  gradientTransform="matrix(12.18 0 0 43.051 513.6 460.4)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stop-color="#ff9539" />
                  <stop offset="10%" stop-color="#ffa734" />
                  <stop offset="42.2%" stop-color="#f4e61f" />
                  <stop offset="100%" stop-color="#fbf6b6" />
                </linearGradient>

                <path
                  d="M513.6 472v.6c1.4 10.3 3.4 20.5 6 30.8 3-11 5-21.3 6-30.8h.2v-.5c-.1-6.5-2.8-11.7-6.1-11.7s-6 5.2-6.1 11.7z"
                  fill="url(#d)"
                />
              </g>
              <path
                d="M519.7 410v-19.5c6.5 0 11.9 4 12.3 9.1v41.1h-12.3v-30.6z"
                fill="#F0F0F4"
              />
              <path
                d="M519.7 410v-19.5c-6.5 0-11.9 4-12.3 9.1v41.1h12.3v-30.6z"
                fill="#F8F8F9"
              />
              <path
                d="M509.3 446.2v-5.5h10.4v9a18 18 0 0 1-10.4-3.5z"
                fill="#5B5B5E"
              />
              <path
                d="M530.1 446.2v-5.5h-10.4v9a18 18 0 0 0 10.4-3.5z"
                fill="#3D3D40"
              />
            </g>
            <g>
              <path
                d="M507 255.9c-13 10-19.4 28-19.6 54v110.4h19.5V255.9z"
                fill="#F8F8F9"
              />
              <path
                d="M507 276.7v-20.8a44.9 44.9 0 0 0-14.5 20.8h14.4z"
                fill="#5B5B5E"
              />
              <path
                d="M425.7 420.3h61.7V314.4A81.8 81.8 0 0 1 451 372c-21.3 15.3-20.5 26.7-25.4 48.3z"
                fill="#3D3D40"
              />
              <path
                d="M484.5 343.8c1.6-3.6 2.9-8 2.9-8v84.5h-55l1.4-7.5 2.5-10.7a33 33 0 0 1 8.7-16.3 54.4 54.4 0 0 1 9.9-8.6c5.2-3.8 10.1-8 14.8-12.5 4.2-4.3 8-9 11.3-14.1 0 0 2-3 3.6-6.8z"
                fill="#DFDFEA"
              />
              <path
                d="M506.3 281.8c-5.5 0-11 1.8-12.8 5.4-.5 1.5-.7 3-.6 4.5 2 0 3.3-.4 4.4-1.3 0-2.4 5.8-5.4 9-5.4v-3.2z"
                fill="#262626"
              />
              <mask id="e">
                <path
                  d="M425.7 420.3l-1.3 7.3L455 431v-10.6h-29.4z"
                  fill="#fff"
                />
              </mask>
              <path
                d="M425.7 420.3l-1.3 7.3L455 431v-10.6h-29.4z"
                fill="#DFDFEA"
                mask="url(#e)"
                vector-effect="non-scaling-stroke"
                stroke-width="10"
                stroke="#3D3D40"
                stroke-linecap="square"
                stroke-miterlimit="3"
              />
              <mask id="f">
                <path d="M456.7 420.3v10.6l30.7 6.7v-17.3h-30.7z" fill="#fff" />
              </mask>
              <path
                d="M456.7 420.3v10.6l30.7 6.7v-17.3h-30.7z"
                fill="#DFDFEA"
                mask="url(#f)"
                vector-effect="non-scaling-stroke"
                stroke-width="10"
                stroke="#3D3D40"
                stroke-linecap="square"
                stroke-miterlimit="3"
              />
              <path d="M428.9 418.4h58.5v1.9h-58.5v-2z" fill="#3D3D40" />
              <g
                className={styles.flames}
                style={{ display: this.state.flamesOn ? 'block' : 'none' }}
              >
                <path
                  d="M485.6 472.3v.7h.1c2 15.4 5 30.8 8.9 46.2 4.4-16.4 7.4-31.9 9.2-46.2h.1V472.2c-.2-9.7-4.2-17.6-9.2-17.6-4.9 0-8.9 7.9-9.1 17.6z"
                  fill="#FF5F5F"
                />
                <linearGradient
                  id="g"
                  x1=".5"
                  y1=".1"
                  x2=".5"
                  y2="1.2"
                  gradientTransform="matrix(12.18 0 0 43.051 488.7 460.1)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stop-color="#ff9539" />
                  <stop offset="10%" stop-color="#ffa734" />
                  <stop offset="42.2%" stop-color="#f4e61f" />
                  <stop offset="100%" stop-color="#fbf6b6" />
                </linearGradient>
                <path
                  d="M488.7 471.8v.5c1.4 10.3 3.4 20.6 6 30.9 2.8-11 5-21.3 6-30.9h.1v-.5c0-6.5-2.8-11.7-6-11.7-3.3 0-6 5.2-6.1 11.7z"
                  fill="url(#g)"
                />
              </g>
              <path
                d="M494.7 410v-19.5c6.6 0 12 4 12.3 9.1v41.1h-12.3v-30.6z"
                fill="#F0F0F4"
              />
              <path
                d="M494.7 410v-19.5c-6.5 0-11.8 4-12.2 9.1v41.1h12.2v-30.6z"
                fill="#F8F8F9"
              />
              <path
                d="M484.4 446.2v-5.5h10.3v9a18 18 0 0 1-10.3-3.5z"
                fill="#5B5B5E"
              />
              <path
                d="M505.1 446.2v-5.5h-10.4v9a18 18 0 0 0 10.4-3.5z"
                fill="#3D3D40"
              />
            </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default Demo
