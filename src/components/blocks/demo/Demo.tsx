import React from 'react'
import * as styles from './Demo.module.css'
import sdk from '@stackblitz/sdk'
import { connect } from 'react-redux'
import { AppState } from '../../../state/reducer'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { lightText, darkText } from '../../../theme/text'
import { darkBackground, lightBackground } from '../../../theme/background'
import Paper from './../../elements/paper/Paper'

export interface DemoProps {
  gitHub: string
  theme: ThemeState
}

export interface DemoState {
  running: boolean
  baseBottom: number
  bgColor: string
  shuttleBottom: number
  boosterOn: boolean
  boosterOpacity: number
  flamesOn: boolean
  buttonPosition: number
  spaceOpacity: number
  svgOffset: number
  overallShuttleOffset: number
  hovering: boolean
}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class Demo extends React.Component<DemoProps, DemoState> {
  exampleRef: React.RefObject<HTMLDivElement>
  constructor(props: DemoProps) {
    super(props)
    this.state = {
      running: false,
      baseBottom: 0,
      bgColor: props.theme.darkMode
        ? darkBackground.paper
        : lightBackground.paper,
      shuttleBottom: 0,
      boosterOn: false,
      boosterOpacity: 1,
      flamesOn: false,
      buttonPosition: 0,
      spaceOpacity: 0,
      svgOffset: 0,
      overallShuttleOffset: 0,
      hovering: false,
    }
    this.exampleRef = React.createRef()

    this.loadStackBlitz = this.loadStackBlitz.bind(this)
  }

  static getDerivedStateFromProps(props: DemoProps, state: DemoState) {
    if (!state.running) {
      return {
        bgColor: props.theme.darkMode
          ? darkBackground.paper
          : lightBackground.paper,
      }
    } else return state
  }

  onGitHubClicked() {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'github_link_click', {
        event_category: 'engagement',
      })
    }
  }

  async loadStackBlitz() {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'demo_started', {
        event_category: 'engagement',
      })
    }

    this.setState({
      running: true,
      boosterOn: true,
      flamesOn: true,
      buttonPosition: -1000,
    })

    const promise = sdk.embedGithubProject(
      this.exampleRef.current,
      this.props.gitHub,
      {
        height: 500,
        view: 'preview',
        forceEmbedLayout: true,
      }
    )

    setTimeout(() => {
      this.setState({
        baseBottom: 1000,
        bgColor: this.props.theme.darkMode
          ? darkBackground.paper
          : darkBackground.paper,
        boosterOn: true,
        boosterOpacity: 0,
        flamesOn: true,
        spaceOpacity: 1,
        overallShuttleOffset: -150,
        hovering: true,
      })
    }, 1000)

    const timer = new Promise((resolve) => setTimeout(() => resolve(), 5000))

    await Promise.all([promise, timer])

    this.setState({
      svgOffset: -1000,
      shuttleBottom: -1000,
    })
  }

  render() {
    const textColor = this.props.theme.darkMode ? darkText.primary : '#2E2D2D'
    return (
      <Paper>
        <div className={styles.placeholder}>
          <div className={styles.ref}>
            <div ref={this.exampleRef}></div>
          </div>
          <div
            className={styles.svgWrapper}
            style={{
              top: this.state.svgOffset,
              backgroundColor: this.state.bgColor,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 812 500"
              className={styles.svg}
            >
              <defs>
                <clipPath id="a">
                  <path d="M0 0h812v500H0z" />
                </clipPath>
              </defs>
              {/* <path
              d="M0 0h812v503H0V0z"
              fill=
              className={styles.bg}
            /> */}
              <g opacity={this.state.spaceOpacity} className={styles.space}>
                <g>
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="692.3"
                    cy="265.5"
                    r="38.3"
                    fill="#442973"
                    opacity=".4"
                  />
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="698"
                    cy="265.5"
                    r="31.3"
                    fill="#1E0844"
                    opacity=".2"
                  />
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="700.4"
                    cy="262"
                    r="24.3"
                    fill="#1D6F44"
                  />
                  <ellipse
                    vectorEffect="non-scaling-stroke"
                    cx="700.4"
                    cy="259.6"
                    rx="23.5"
                    ry="21.9"
                    fill="#46C35D"
                  />
                  <linearGradient
                    id="h"
                    x1=".5"
                    y1="-.1"
                    x2=".5"
                    y2=".9"
                    gradientTransform="matrix(41.727 0 0 38.894 679.5 237.7)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="1.7%" stopColor="#b1fdbf" />
                    <stop offset="97.8%" stopColor="#5dd973" />
                  </linearGradient>
                  <ellipse
                    vectorEffect="non-scaling-stroke"
                    cx="700.4"
                    cy="257.2"
                    rx="20.9"
                    ry="19.4"
                    fill="url(#h)"
                  />
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="713.5"
                    cy="272"
                    r="3"
                    fill="#A6F8B5"
                  />
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="713.5"
                    cy="272"
                    r="2.5"
                    fill="#46C35D"
                  />
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="708.5"
                    cy="274"
                    r="1.5"
                    fill="#A6F8B5"
                  />
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="708.5"
                    cy="274"
                    r="1.2"
                    fill="#46C35D"
                  />
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="691.6"
                    cy="275.1"
                    r="1.2"
                    fill="#A6F8B5"
                  />
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="691.6"
                    cy="275.1"
                    r="1"
                    fill="#46C35D"
                  />
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="696.8"
                    cy="277.5"
                    r="1.2"
                    fill="#A6F8B5"
                  />
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="696.8"
                    cy="277.5"
                    r="1"
                    fill="#46C35D"
                  />
                  <g>
                    <circle
                      vectorEffect="non-scaling-stroke"
                      cx="710.1"
                      cy="245.2"
                      r="1.5"
                      fill="#A6F8B5"
                    />
                    <circle
                      vectorEffect="non-scaling-stroke"
                      cx="710.1"
                      cy="245.2"
                      r="1.2"
                      fill="#46C35D"
                    />
                  </g>
                  <g>
                    <circle
                      vectorEffect="non-scaling-stroke"
                      cx="719.8"
                      cy="254.5"
                      r="2.6"
                      fill="#A6F8B5"
                    />
                    <circle
                      vectorEffect="non-scaling-stroke"
                      cx="719.8"
                      cy="254.5"
                      r="2.1"
                      fill="#46C35D"
                    />
                  </g>
                  <g>
                    <circle
                      vectorEffect="non-scaling-stroke"
                      cx="713.2"
                      cy="277.8"
                      r="1.2"
                      fill="#46C35D"
                    />
                  </g>
                  <g>
                    <circle
                      vectorEffect="non-scaling-stroke"
                      cx="703.5"
                      cy="280.8"
                      r="2.5"
                      fill="#46C35D"
                    />
                  </g>
                </g>
                <g>
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="284.5"
                    cy="72.6"
                    r="56.2"
                    fill="#442973"
                    opacity=".4"
                  />
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="275.2"
                    cy="61.5"
                    r="37.7"
                    fill="#1E0844"
                    opacity=".2"
                  />
                  <path
                    d="M254.4 85.3A31.8 31.8 0 1 1 312.7 60a31.8 31.8 0 0 1-58.3 25.3z"
                    fill="#D91F1F"
                  />
                  <path
                    d="M254.1 81.9c-6.3-14.5 1.2-31.7 16.8-38.4 15.5-6.8 33.2-.5 39.5 14 6.2 14.4-1.3 31.6-16.8 38.4-15.5 6.7-33.2.4-39.5-14z"
                    fill="#D53131"
                  />
                  <linearGradient
                    id="i"
                    x1=".3"
                    y1="-.1"
                    x2=".7"
                    y2=".9"
                    gradientTransform="matrix(53.931 0 0 51.405 254 41)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="1.7%" stopColor="#ff9797" />
                    <stop offset="98.3%" stopColor="#f04b4b" />
                  </linearGradient>
                  <path
                    d="M256 77.6c-5.6-12.8 1-28.1 14.9-34.1 13.7-6 29.5-.5 35 12.4 5.7 12.8-1 28.1-14.8 34.1s-29.5.5-35.1-12.4z"
                    fill="url(#i)"
                  />
                  <path
                    d="M278.4 93.4a1.6 1.6 0 1 1 2.9-1.2 1.6 1.6 0 0 1-3 1.2z"
                    fill="#FD8E8E"
                  />
                  <path
                    d="M278.6 93.3a1.3 1.3 0 1 1 2.4-1 1.3 1.3 0 0 1-2.4 1z"
                    fill="#D53131"
                  />
                  <path
                    d="M288.8 88.6a4.8 4.8 0 1 1 8.8-3.7 4.8 4.8 0 0 1-8.8 3.7z"
                    fill="#FD8E8E"
                  />
                  <path
                    d="M289.7 88.3a3.8 3.8 0 1 1 7-3 3.8 3.8 0 0 1-7 3z"
                    fill="#D53131"
                  />
                  <path
                    d="M308.2 76.1a1.3 1.3 0 1 1 2.4-1 1.3 1.3 0 0 1-2.4 1z"
                    fill="#FD8E8E"
                  />
                  <path
                    d="M308.4 76a1 1 0 1 1 2-.8 1 1 0 0 1-2 .8zM283 52.6a6 6 0 1 1 11-4.7 6 6 0 0 1-11 4.7zM276.7 56a2 2 0 1 1 3.8-1.7 2 2 0 0 1-3.8 1.7zM282.9 57.7a1.3 1.3 0 1 1 2.4-1 1.3 1.3 0 0 1-2.4 1zM299.4 91.1a1.6 1.6 0 1 1 3-1.3 1.6 1.6 0 0 1-3 1.3zM304.9 83.4a3.3 3.3 0 1 1 6-2.7 3.3 3.3 0 0 1-6 2.7zM289.4 97.2a3.3 3.3 0 1 1 6.1-2.7 3.3 3.3 0 0 1-6 2.7z"
                    fill="#D53131"
                  />
                  <g>
                    <path
                      d="M301.6 81.9a3.6 3.6 0 1 1 6.6-3 3.6 3.6 0 0 1-6.6 3z"
                      fill="#FD8E8E"
                    />
                    <path
                      d="M302.2 81.6a3 3 0 1 1 5.4-2.3 3 3 0 0 1-5.4 2.3z"
                      fill="#D53131"
                    />
                  </g>
                  <g opacity=".5">
                    <path
                      d="M252.1 77.6c-16.2 6.5-25.8 12-23.4 14 3.5 2.8 31.4-3 62.2-13 30.7-10 53-20.5 49.4-23.4-2.1-1.7-13.1-.3-28.3 3.3a25.4 25.4 0 0 1 1 2.2c6.7-1.3 11.3-1.6 12.5-.7 2.5 2.1-13.7 9.8-36.3 17.2-22.6 7.3-43 11.6-45.7 9.5-1.3-1 2.3-3.6 9-6.7a30 30 0 0 1-.4-2.4z"
                      fillRule="evenodd"
                      fill="#D91F1F"
                      opacity=".5"
                    />
                  </g>
                  <g opacity=".5">
                    <path
                      d="M252.2 78.3c-13.1 5.5-20.7 10-18.6 11.7 3.2 2.6 28.6-2.7 56.7-11.9s48.4-18.7 45.2-21.3c-1.8-1.5-10.7-.5-23.2 2.4a86.2 86.2 0 0 1 1 2.1c4.6-.7 7.7-.8 8.6-.1 2.4 1.9-12.5 9-33.1 15.6-20.7 6.8-39.3 10.7-41.7 8.8-1-.9 1.2-2.7 5.7-5a29 29 0 0 1-.6-2.3z"
                      fillRule="evenodd"
                      fill="#F35C5C"
                      opacity=".5"
                    />
                  </g>
                </g>
                <g>
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="162.2"
                    cy="329.5"
                    r="115.5"
                    fill="#442973"
                    opacity=".4"
                  />
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="179.7"
                    cy="329.5"
                    r="94.5"
                    fill="#1E0844"
                    opacity=".2"
                  />
                  <path
                    d="M204.2 256.4a73.5 73.5 0 1 1-15.8 146.2 73.5 73.5 0 0 1 15.8-146.2z"
                    fill="#002FFF"
                  />
                  <path
                    d="M211.3 259.8c36.3 3.9 62.3 38.6 58.1 77.5-4.1 39-37 67.3-73.2 63.5-36.3-4-62.3-38.7-58.1-77.6 4.1-38.8 37-67.3 73.2-63.4z"
                    fill="#098CF7"
                  />
                  <linearGradient
                    id="j"
                    x1="1.1"
                    y1=".6"
                    x2="0"
                    y2=".4"
                    gradientTransform="matrix(117.548 0 0 125.908 152.3 268.1)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="2.6%" stopColor="#a8e9f4" />
                    <stop offset="97.8%" stopColor="#00d8ff" />
                  </linearGradient>
                  <path
                    d="M217.8 268.4c32.2 3.5 55.4 34.4 51.7 69-3.7 34.5-32.9 59.8-65.1 56.3-32.2-3.4-55.4-34.3-51.7-68.9 3.7-34.6 32.9-59.8 65.1-56.4z"
                    fill="url(#j)"
                  />
                  <g fill="#098CF7">
                    <path d="M167.3 266.7a5 5 0 1 1-1 10 5 5 0 0 1 1-10zM150.3 280.9a5 5 0 1 1-1 10 5 5 0 0 1 1-10zM137.2 316.1a10.6 10.6 0 1 1-2.2 21.2 10.6 10.6 0 0 1 2.2-21.2z" />
                  </g>
                  <path
                    d="M222.7 283a21.6 21.6 0 1 1-4.6 42.9 21.6 21.6 0 0 1 4.6-43zM185.7 304.9a13.1 13.1 0 1 1-6.8 25.3 13.1 13.1 0 0 1 6.8-25.3z"
                    fill="#098CF7"
                  />
                  <path
                    d="M161.5 344.5a8.4 8.4 0 1 1-4.3 16.2 8.4 8.4 0 0 1 4.3-16.2zM155.3 317a5.5 5.5 0 1 1-2.8 10.6 5.5 5.5 0 0 1 2.8-10.6zM166 293a9.7 9.7 0 1 1-5 18.8 9.7 9.7 0 0 1 5-18.7zM182.2 278.5a5.5 5.5 0 1 1-2.8 10.6 5.5 5.5 0 0 1 2.8-10.6z"
                    fill="#12D9FD"
                  />
                  <path
                    d="M207 326.3a9.1 9.1 0 1 1-4.8 17.6 9.1 9.1 0 0 1 4.7-17.6zM184.7 338.7a9.1 9.1 0 1 1-4.7 17.6 9.1 9.1 0 0 1 4.7-17.6z"
                    fill="#098CF7"
                  />
                </g>
                <g fill="#9A68F2">
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="121.9"
                    cy="134.7"
                    r="6"
                  />
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="113.9"
                    cy="156.7"
                    r="6"
                  />
                  <circle
                    vectorEffect="non-scaling-stroke"
                    cx="90.9"
                    cy="150.7"
                    r="10"
                  />
                </g>
                <g>
                  <g opacity=".4">
                    <radialGradient
                      id="k"
                      fx=".5"
                      fy=".5"
                      cx=".5"
                      cy=".5"
                      r=".5"
                      gradientTransform="scale(-34.469 34.469) rotate(38.1 -17.7 -8.4)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#ebebeb" />
                      <stop offset="98.3%" stopOpacity="0" stopColor="#fff" />
                    </radialGradient>
                    <path
                      d="M318.3 327.6a17.2 17.2 0 1 0-27.1 21.3 17.2 17.2 0 0 0 27.1-21.3z"
                      fill="url(#k)"
                    />
                  </g>
                  <path
                    d="M294.3 328.6l6.4 9.8-5.6 10.3 9.8-6.4 10.3 5.6-6.4-9.8 5.6-10.3-9.8 6.4-10.3-5.6z"
                    fill="#EBEBEB"
                  />
                </g>
                <g>
                  <g opacity=".4">
                    <radialGradient
                      id="l"
                      fx=".5"
                      fy=".5"
                      cx=".5"
                      cy=".5"
                      r=".5"
                      gradientTransform="scale(-15.006 15.006) rotate(-18.3 6.7 93.1)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#ebebeb" />
                      <stop offset="98.3%" stopOpacity="0" stopColor="#fff" />
                    </radialGradient>
                    <path
                      d="M430.6 108.9a7.5 7.5 0 1 0-14.2-4.7 7.5 7.5 0 0 0 14.2 4.7z"
                      fill="url(#l)"
                    />
                  </g>
                  <path
                    d="M424.5 100.4l-2 4.7-5.1.4 4.7 2 .4 5.1 2-4.7 5.1-.4-4.7-2-.4-5.1z"
                    fill="#EBEBEB"
                  />
                </g>
                <g>
                  <g opacity=".4">
                    <radialGradient
                      id="m"
                      fx=".5"
                      fy=".5"
                      cx=".5"
                      cy=".5"
                      r=".5"
                      gradientTransform="scale(-15.006 15.006) rotate(-18.3 58 148)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#ebebeb" />
                      <stop offset="98.3%" stopOpacity="0" stopColor="#fff" />
                    </radialGradient>
                    <path
                      d="M649.6 391.8a7.5 7.5 0 1 0-14.2-4.7 7.5 7.5 0 0 0 14.2 4.7z"
                      fill="url(#m)"
                    />
                  </g>
                  <path
                    d="M643.5 383.4l-2 4.7-5.1.4 4.7 2 .4 5.1 2-4.7 5.1-.4-4.7-2-.4-5.1z"
                    fill="#EBEBEB"
                  />
                </g>
                <g>
                  <g opacity=".4">
                    <radialGradient
                      id="n"
                      fx=".5"
                      fy=".5"
                      cx=".5"
                      cy=".5"
                      r=".5"
                      gradientTransform="scale(-34.469 34.469) rotate(-3.8 14.6 309.8)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#ebebeb" />
                      <stop offset="98.3%" stopOpacity="0" stopColor="#fff" />
                    </radialGradient>
                    <path
                      d="M709.4 74.4a17.2 17.2 0 1 0-34.4-2.2 17.2 17.2 0 0 0 34.4 2.2z"
                      fill="url(#n)"
                    />
                  </g>
                  <path
                    d="M691 59.1L689 70.7l-11 4 11.6 1.7 3.9 11 1.8-11.5 11-4-11.6-1.7-3.9-11z"
                    fill="#EBEBEB"
                  />
                </g>
                <g>
                  <g opacity=".4">
                    <radialGradient
                      id="o"
                      fx=".5"
                      fy=".5"
                      cx=".5"
                      cy=".5"
                      r=".5"
                      gradientTransform="scale(-34.468 34.468) rotate(-25.5 6.7 16.6)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#ebebeb" />
                      <stop offset="98.3%" stopOpacity="0" stopColor="#fff" />
                    </radialGradient>
                    <path
                      d="M216.9 170.2a17.2 17.2 0 1 0-31.2-14.9 17.2 17.2 0 0 0 31.2 14.8z"
                      fill="url(#o)"
                    />
                  </g>
                  <path
                    d="M205.3 149l-6 10.2-11.7-.4 10.1 5.9-.4 11.7 6-10.1 11.7.4-10.1-6 .4-11.6z"
                    fill="#EBEBEB"
                  />
                </g>
                <g>
                  <g opacity=".4">
                    <radialGradient
                      id="p"
                      fx=".5"
                      fy=".5"
                      cx=".5"
                      cy=".5"
                      r=".5"
                      gradientTransform="matrix(-9.629 7.542 7.542 9.629 368.2 271.3)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#ebebeb" />
                      <stop offset="98.3%" stopOpacity="0" stopColor="#fff" />
                    </radialGradient>
                    <path
                      d="M372 276.1a6.1 6.1 0 1 0-9.7 7.6 6.1 6.1 0 0 0 9.6-7.6z"
                      fill="url(#p)"
                    />
                  </g>
                  <path
                    d="M363.4 276.5l2.3 3.4-2 3.7 3.5-2.3 3.6 2-2.2-3.5 2-3.6-3.5 2.2-3.7-2z"
                    fill="#EBEBEB"
                  />
                </g>
              </g>

              <g
                id="text"
                transform={`translate(0, ${this.state.baseBottom})`}
                className={styles.text}
                opacity="1"
              >
                <g
                  onClick={this.loadStackBlitz}
                  className={styles.startButton}
                  style={{ cursor: 'pointer' }}
                  transform={`translate(${this.state.buttonPosition}, 0)`}
                >
                  <path fill="#9A68F2" d="M101.3 289h217.8v50H101.3z" />
                  <path
                    d="M174.7 318.7q0-1.3-.9-2-.8-.6-3.1-1.4-2.3-.7-3.6-1.4-3.7-2-3.7-5.3 0-1.7 1-3 1-1.4 2.8-2.2 1.8-.8 4-.8 2.4 0 4.2.9 1.7.8 2.7 2.3 1 1.5 1 3.4h-4.4q0-1.4-.9-2.3-1-.8-2.6-.8t-2.5.7q-.9.7-.9 1.8 0 1 1 1.8 1.1.7 3.1 1.3 3.8 1.1 5.5 2.8 1.7 1.6 1.7 4.1 0 2.8-2 4.4-2.2 1.5-5.7 1.5-2.5 0-4.5-.9t-3-2.4q-1.1-1.6-1.1-3.7h4.4q0 3.6 4.2 3.6 1.6 0 2.4-.7 1-.6 1-1.7zm23.4-15.8v3.6h-6.5v17.8h-4.4v-17.8h-6.4v-3.6H198zm16 21.4l-1.4-4.4H205l-1.5 4.4H199l7.9-21.4h4l8 21.4h-4.6zm-5.3-16l-2.6 8h5.3l-2.7-8zm24 16l-4-7.9h-3.6v7.9h-4.4v-21.4h8q3.7 0 5.8 1.7 2 1.7 2 4.8 0 2.2-.9 3.6-1 1.5-2.9 2.3l4.7 8.7v.3h-4.8zm-7.6-17.8v6.4h3.6q1.6 0 2.5-.9 1-.8 1-2.3 0-1.5-1-2.3-.8-1-2.5-1h-3.6zm30.8-3.6v3.6h-6.5v17.8h-4.4v-17.8h-6.4v-3.6H256z"
                    fillRule="evenodd"
                    fill="#FFF"
                  />
                </g>
                <g
                  className={styles.githubButton}
                  style={{ cursor: 'pointer' }}
                  transform={`translate(${this.state.buttonPosition}, 0)`}
                >
                  <a
                    href={`https://github.com/${this.props.gitHub}`}
                    target="_blank"
                    onClick={this.onGitHubClicked}
                  >
                    <path
                      fill="transparent"
                      vectorEffect="non-scaling-stroke"
                      strokeWidth="3"
                      stroke={textColor}
                      className={styles.title}
                      strokeLinecap="square"
                      strokeMiterlimit="2"
                      d="M101.3 367h217.8v50H101.3z"
                    />
                    <path d="M205.9 381v103.6H330V381H205.9z" fill="none" />
                    <path d="M205.9 381v103.6H330V381H205.9z" fill="none" />
                    <path d="M205.9 381v103.6H330V381H205.9z" fill="none" />
                    <path d="M205.9 381v103.6H330V381H205.9z" fill="none" />
                    <path d="M205.9 381v103.6H330V381H205.9z" fill="none" />
                    <path d="M205.9 381v103.6H330V381H205.9z" fill="none" />
                    <path d="M205.9 381v103.6H330V381H205.9z" fill="none" />
                    <path d="M205.9 381v103.6H330V381H205.9z" fill="none" />
                    <clipPath id="b">
                      <path d="M205.9 381v103.6H330V381H205.9z" fill="#FFF" />
                    </clipPath>
                    <g clipPath="url(#b)">
                      <path
                        d="M244 390h-6.4c-.2 0-.3.1-.3.3v3.2c0 .1.1.3.3.3h2.5v4l-2.1.1c-2 0-4.5-.6-4.5-6.4 0-5.7 2.7-6.4 5.2-6.4 2.2 0 3.2.3 3.8.5.2 0 .4-.1.4-.3l.7-3-.1-.3c-.3-.2-1.8-1-5.5-1-4.4 0-8.9 1.9-8.9 10.8s5.2 10.2 9.5 10.2c3.5 0 5.7-1.5 5.7-1.5v-10.3s0-.2-.2-.2z"
                        fill={textColor}
                        className={styles.title}
                      />
                    </g>
                    <clipPath id="c">
                      <path d="M205.9 381v103.6H330V381H205.9z" fill="#FFF" />
                    </clipPath>
                    <g clipPath="url(#c)">
                      <path
                        d="M277.7 382c0-.1-.1-.2-.3-.2h-3.7c-.1 0-.3.1-.3.3v7h-5.7v-7c0-.2-.1-.3-.3-.3h-3.7c-.1 0-.3.1-.3.3v19.2c0 .2.2.3.3.3h3.7c.2 0 .3-.1.3-.3V393h5.7v8.2c0 .2.1.3.3.3h3.7c.2 0 .3-.1.3-.3V382z"
                        fill={textColor}
                        className={styles.title}
                      />
                    </g>
                    <clipPath id="d">
                      <path d="M205.9 381v103.6H330V381H205.9z" fill="#FFF" />
                    </clipPath>
                    <g clipPath="url(#d)">
                      <path
                        d="M251 384.6a2.4 2.4 0 1 0-4.7 0c0 1.3 1 2.4 2.3 2.4 1.4 0 2.4-1 2.4-2.4z"
                        fill={textColor}
                        className={styles.title}
                      />
                    </g>
                    <clipPath id="e">
                      <path d="M205.9 381v103.6H330V381H205.9z" fill="#FFF" />
                    </clipPath>
                    <g clipPath="url(#e)">
                      <path
                        d="M250.8 397.2v-8.8c0-.2-.2-.3-.4-.3h-3.6c-.2 0-.3.1-.3.3V401c0 .4.2.5.5.5h3.3c.4 0 .5-.2.5-.5v-3.9z"
                        fill={textColor}
                        className={styles.title}
                      />
                    </g>
                    <clipPath id="f">
                      <path d="M205.9 381v103.6H330V381H205.9z" fill="#FFF" />
                    </clipPath>
                    <g clipPath="url(#f)">
                      <path
                        d="M291.7 388H288c-.2 0-.3.2-.3.4v9.4s-1 .7-2.2.7c-1.3 0-1.7-.6-1.7-1.9v-8.2c0-.2-.1-.3-.3-.3h-3.7c-.2 0-.3.1-.3.3v8.8c0 3.8 2.1 4.8 5 4.8 2.5 0 4.4-1.3 4.4-1.3l.1.7.3.2h2.4c.1 0 .3-.1.3-.3v-13l-.3-.2z"
                        fill={textColor}
                        className={styles.title}
                      />
                    </g>
                    <clipPath id="g">
                      <path d="M205.9 381v103.6H330V381H205.9z" fill="#FFF" />
                    </clipPath>
                    <g clipPath="url(#g)">
                      <path
                        d="M300.2 398.5c-1.3 0-2.1-.6-2.1-.6v-6.1s.8-.5 1.8-.6c1.3-.1 2.6.2 2.6 3.4 0 3.3-.6 4-2.3 3.9zm1.4-10.9c-2 0-3.5 1-3.5 1V382c0-.2-.1-.3-.3-.3h-3.7c-.1 0-.3.1-.3.3v19.2c0 .2.2.3.3.3h2.6c.1 0 .2 0 .3-.2l.1-.9s1.5 1.5 4.4 1.5c3.3 0 5.2-1.7 5.2-7.7 0-5.9-3-6.7-5-6.7z"
                        fill={textColor}
                        className={styles.title}
                      />
                    </g>
                    <clipPath id="h">
                      <path d="M205.9 381v103.6H330V381H205.9z" fill="#FFF" />
                    </clipPath>
                    <g clipPath="url(#h)">
                      <path
                        d="M261.3 388h-2.7v-3.6c0-.1-.1-.2-.3-.2h-3.7c-.2 0-.3 0-.3.2v3.8l-2 .5s-.2.1-.2.3v2.3c0 .2.1.3.3.3h2v5.7c0 4.2 2.9 4.6 4.9 4.6 1 0 2-.2 2.2-.3l.2-.3v-2.6c0-.2-.2-.3-.3-.3h-1c-1.4 0-1.8-.6-1.8-1.4v-5.4h2.7c.2 0 .3-.1.3-.3v-3c0-.1-.1-.2-.3-.2z"
                        fill={textColor}
                        className={styles.title}
                      />
                    </g>

                    <path
                      d="M199.5 402v-.1q0-1.2.4-2.1.5-1 1.3-1.4.8-.6 1.9-.6 1.6 0 2.6 1.2 1 1 1 3 0 1.2-.5 2.1-.4 1-1.2 1.4-.8.6-2 .6-1.5 0-2.5-1.2-1-1-1-3zm1.3 0q0 1.4.6 2.2.7.8 1.7.8t1.6-.9q.6-.8.6-2.2 0-1.3-.6-2.1t-1.6-.8q-1 0-1.7.8-.6.8-.6 2.2zm7.6-4h1.3v1q1-1.2 2.4-1.2 2.5 0 2.5 2.9v5.2h-1.3v-5.2q0-.9-.4-1.3t-1.2-.4q-.7 0-1.2.3-.5.4-.8 1v5.6h-1.3v-8zm-40.4 4.5h1.4q-.2 1.7-1.2 2.6-1 1-2.8 1-1.9 0-3-1.4-1.2-1.3-1.2-3.6v-1q0-1.5.6-2.7.5-1 1.5-1.7 1-.6 2.2-.6 1.7 0 2.8 1 1 .9 1.1 2.6H168q-.1-1.3-.8-1.9-.6-.5-1.7-.5-1.3 0-2 1-.8 1-.8 2.8v1q0 1.8.7 2.8.7 1 2 1 1.2 0 1.8-.5.6-.5.8-1.9zm2.8-.5v-.1q0-1.2.5-2.1.4-1 1.2-1.4.8-.6 1.9-.6 1.6 0 2.6 1.2 1 1 1 3 0 1.2-.4 2.1-.5 1-1.3 1.4-.8.6-1.9.6-1.6 0-2.6-1.2-1-1-1-3zm1.4 0q0 1.4.6 2.2.6.8 1.6.8t1.6-.9q.7-.8.7-2.2 0-1.3-.7-2.1-.6-.8-1.6-.8t-1.6.8q-.6.8-.6 2.2zm7.2 0v-.1q0-1.8.8-3 1-1 2.3-1 1.4 0 2.2.9v-4.1h1.4v11.2h-1.3v-.8q-.9 1-2.3 1t-2.3-1.2q-.8-1-.8-3zm1.3 0q0 1.4.6 2.2.5.7 1.5.7 1.3 0 2-1.1V400q-.7-1.1-2-1.1-1 0-1.5.8-.6.7-.6 2.2zm10.8 4q-1.7 0-2.7-1-1-1-1-2.8v-.3q0-1.2.5-2 .4-1 1.2-1.5.8-.6 1.8-.6 1.5 0 2.4 1 .8 1 .8 3v.5h-5.3q0 1.2.7 2 .6.7 1.6.7.7 0 1.2-.3l1-.8.7.6q-1 1.6-3 1.6zm-.2-7q-.8 0-1.4.6-.5.6-.7 1.6h4q0-1.1-.6-1.7-.5-.5-1.3-.5zm-17.8-21.3l3 8.8 3.1-8.8h1.6l-4 10.6H176l-4-10.6h1.5zm10.3 2.7v8h-1.3v-8h1.3zm-1.4-2q0-.4.2-.6.2-.3.6-.3.4 0 .6.3.2.2.2.5l-.2.6q-.2.2-.6.2-.4 0-.6-.2l-.2-.6zm6.9 10q-1.6 0-2.6-1t-1-2.8v-.3q0-1.1.4-2 .5-1 1.3-1.5t1.7-.5q1.6 0 2.4 1 .9 1 .9 2.9v.6H187q0 1.1.7 1.9.7.7 1.7.7.7 0 1.2-.3t.9-.8l.8.7q-1 1.5-3 1.5zm-.2-7q-.8 0-1.3.6-.6.6-.7 1.6h4q-.1-1-.6-1.7-.5-.5-1.4-.5zm10-1l1.9 6 1.5-6h1.3l-2.3 8h-1l-2-6-1.9 6h-1l-2.4-8h1.4l1.6 6 1.8-6h1z"
                      fillRule="evenodd"
                      fill={textColor}
                      className={styles.title}
                    />
                    <path
                      d="M127 376.4a16 16 0 0 0-5 31.2c.8.1 1-.4 1-.8V404c-4.4 1-5.3-2.2-5.3-2.2-.8-1.8-1.8-2.3-1.8-2.3-1.5-1 .1-1 .1-1 1.6.1 2.4 1.7 2.4 1.7 1.5 2.4 3.8 1.7 4.7 1.3.1-1 .6-1.7 1-2.1-3.5-.4-7.3-1.8-7.3-8 0-1.7.7-3.1 1.7-4.2-.2-.4-.7-2 .1-4.3 0 0 1.4-.4 4.4 1.7a15.3 15.3 0 0 1 8 0c3-2 4.4-1.7 4.4-1.7.9 2.2.3 3.9.2 4.3 1 1 1.6 2.5 1.6 4.3 0 6.1-3.7 7.4-7.3 7.8.6.5 1.1 1.5 1.1 3v4.4c0 .4.3 1 1 .8a16 16 0 0 0-5-31.2z"
                      fillRule="evenodd"
                      fill={textColor}
                      className={styles.title}
                    />
                  </a>
                </g>

                <g fillRule="evenodd">
                  <path
                    d="M189.4 104.6h-2.9q-.2-.4-.2-1-1 1.2-2.7 1.2-1.6 0-2.6-1-1-.8-1-2.2 0-1.7 1.2-2.6 1.3-.9 3.6-.9h1.3v-.6q0-.7-.3-1.2-.4-.4-1.2-.4-.7 0-1.1.3-.4.4-.4 1h-2.9q0-1 .6-1.7.6-.8 1.6-1.3 1-.4 2.3-.4 2 0 3.1 1 1.2 1 1.2 2.7v4.6q0 1.5.4 2.3v.2zm-5.2-2q.6 0 1.2-.3.5-.3.7-.7v-1.8h-1q-2.1 0-2.3 1.4v.2q0 .5.4.8.4.4 1 .4zM162.8 94v10.6H160V94h2.8zm-3-2.7q0-.7.5-1 .4-.5 1.1-.5.7 0 1.2.4.4.4.4 1 0 .7-.4 1.1-.5.4-1.2.4t-1.1-.4q-.5-.4-.5-1zm11 10.3q0-.5-.4-.8-.5-.3-1.7-.5-3.7-.8-3.7-3.2 0-1.4 1.1-2.4 1.2-1 3-1 2 0 3.3 1 1.2 1 1.2 2.5h-2.8q0-.6-.4-1t-1.2-.4q-.8 0-1.1.3-.4.3-.4.8t.4.8q.5.3 1.5.5l1.8.5q2.2.8 2.2 2.8 0 1.5-1.2 2.4-1.3.8-3.2.8-1.3 0-2.4-.4-1-.5-1.6-1.3-.6-.8-.6-1.8h2.7q0 .7.6 1.1.5.4 1.3.4.9 0 1.3-.3t.4-.8zm-57.5-11.3v2.4h-4.4v11.9H106V92.7h-4.3v-2.4h11.6zm4.2-.7V95q1.1-1.3 2.8-1.3 3.5 0 3.5 4v6.8H121v-6.7q0-1-.4-1.4-.4-.4-1.3-.4-1.2 0-1.8 1v7.5h-2.8v-15h2.8zm13.3 15.2q-2.3 0-3.8-1.5-1.4-1.4-1.4-3.8v-.2q0-1.6.6-2.9.6-1.3 1.7-2 1.2-.6 2.6-.6 2.2 0 3.4 1.4 1.3 1.3 1.3 3.8v1.2h-6.8q.2 1 .9 1.6.7.7 1.7.7 1.6 0 2.6-1.2l1.3 1.5q-.6 1-1.7 1.4-1 .5-2.4.5zm-.3-8.7q-.8 0-1.4.5-.5.6-.6 1.7h3.9V98q0-.9-.5-1.4-.5-.5-1.4-.5zm12.2-2.2v2.7h-1q-1.6 0-2.1 1v7h-2.8V94h2.6l.1 1.2q.9-1.4 2.4-1.4l.8.1zm6.2 10.8q-2.3 0-3.8-1.4-1.4-1.4-1.4-3.8v-.2q0-1.6.6-2.9.6-1.3 1.7-2 1.2-.6 2.6-.6 2.2 0 3.4 1.4 1.3 1.3 1.3 3.8v1.2h-6.8q.2 1 .9 1.6.7.7 1.7.7 1.6 0 2.6-1.2l1.4 1.5q-.7 1-1.8 1.4-1 .5-2.4.5zm-.3-8.6q-.8 0-1.4.5-.5.6-.6 1.7h3.9V98q0-.9-.5-1.4-.5-.5-1.4-.5zM251.2 188.8v15h-2.8v-15h2.8zm11.3 15h-2.8l-.3-1q-1 1.2-2.7 1.2-1.5 0-2.5-1-1-.8-1-2.2 0-1.7 1.2-2.6 1.2-.9 3.6-.9h1.3v-.6q0-.7-.4-1.1-.4-.5-1.2-.5-.7 0-1 .4-.5.3-.5.9h-2.8q0-1 .5-1.7.6-.8 1.6-1.2 1-.5 2.4-.5 2 0 3 1 1.2 1 1.2 2.8v4.5q0 1.6.4 2.3v.2zm-5.1-2q.6 0 1.1-.3.5-.2.8-.7V199h-1q-2.2 0-2.3 1.4v.2q0 .5.3.9.4.3 1 .3zm13.3 2v-1q-1.1 1.2-3 1.2-1.7 0-2.6-1-.9-1-.9-2.9v-6.9h2.8v6.8q0 1.7 1.5 1.7t2-1v-7.5h2.8v10.6h-2.6zm4.7-10.6h2.7v1.2q1.2-1.4 3.1-1.4 1.7 0 2.5 1t.8 3v6.8h-2.8V197q0-.9-.4-1.3t-1.3-.4q-1.2 0-1.8 1v7.5h-2.8v-10.6zm15.7 8.5q.8 0 1.2-.4.5-.5.6-1.2h2.6q0 1.1-.6 2-.6.9-1.6 1.4-1 .5-2.2.5-2.2 0-3.6-1.5-1.3-1.4-1.3-4v-.1q0-2.5 1.3-4 1.3-1.4 3.6-1.4 2 0 3.2 1.2 1.2 1 1.2 3h-2.6q0-.9-.6-1.4-.4-.5-1.2-.5-1 0-1.5.7t-.5 2.4v.3q0 1.6.5 2.3.5.7 1.5.7zm8.8-13v5.7q1-1.4 2.8-1.4 3.4 0 3.5 4v6.8h-2.9V197q0-1-.3-1.3-.4-.5-1.3-.5-1.3 0-1.8 1v7.5H297v-15h2.9zm11.6.9l-.3 9.8h-2.4l-.3-9.8h3zM310 201q.7 0 1.1.4.5.4.5 1 0 .7-.5 1.1-.4.4-1.1.4-.7 0-1.1-.4-.5-.4-.5-1 0-.7.5-1.1.4-.4 1.1-.4zm-84.2-10.4h2.8v2.6h1.8v2h-1.8v5.4q0 .6.2.8.2.3.9.3l.8-.1v2.1q-.8.3-1.7.3-3 0-3-3v-5.7h-1.6v-2h1.6v-2.7zm5.7 8v-.2q0-1.6.6-2.8.6-1.2 1.8-1.9 1.1-.7 2.6-.7 2.2 0 3.5 1.3 1.4 1.3 1.5 3.6v.7q0 2.4-1.3 4-1.4 1.4-3.7 1.4-2.2 0-3.6-1.5-1.4-1.4-1.4-4zm2.9 0q0 1.5.5 2.3.6.8 1.6.8t1.6-.8q.6-.8.6-2.5 0-1.5-.6-2.3-.5-.8-1.6-.8-1 0-1.6.8-.5.8-.5 2.5zm-58.3-5.4v2.7l-1-.1q-1.7 0-2.2 1v7h-2.8v-10.6h2.7v1.3q.9-1.5 2.4-1.5.5 0 .9.2zm6.2 10.8q-2.4 0-3.8-1.4-1.5-1.5-1.5-3.8v-.3q0-1.6.6-2.9.6-1.2 1.8-1.9 1.1-.7 2.5-.7 2.2 0 3.5 1.4 1.2 1.4 1.2 3.9v1.1h-6.7q.1 1 .8 1.7.7.6 1.7.6 1.7 0 2.6-1.2l1.4 1.6q-.7.9-1.7 1.4-1.1.5-2.4.5zm-.4-8.7q-.8 0-1.3.6-.6.5-.7 1.6h4v-.2q0-1-.6-1.5-.5-.5-1.4-.5zm15.3 8.5h-2.9l-.3-1q-1 1.2-2.6 1.2t-2.6-1q-1-.8-1-2.2 0-1.7 1.2-2.6 1.3-.9 3.6-.9h1.3v-.6q0-.7-.4-1.1-.3-.5-1.1-.5t-1.2.4q-.4.3-.4.9H188q0-1 .6-1.7.5-.8 1.6-1.2 1-.5 2.3-.5 2 0 3.1 1 1.2 1 1.2 2.8v4.5q0 1.6.4 2.3v.2zm-5.2-2q.6 0 1.1-.3.6-.2.8-.7V199h-1q-2.2 0-2.3 1.4v.2q0 .5.4.9.3.3 1 .3zm6.5-3.4q0-2.4 1-4 1.2-1.4 3.1-1.4 1.6 0 2.6 1.2v-5.4h2.8v15h-2.5l-.2-1.1q-1 1.3-2.7 1.3-1.9 0-3-1.5t-1.1-4zm2.8.2q0 1.5.5 2.3.5.8 1.5.8 1.3 0 1.9-1.1v-4.2q-.6-1-1.9-1-2 0-2 3.2zm10.9-5.4l2 6.6 1.9-6.6h3l-4.2 12.2-.3.6q-1 2-3 2l-1.3-.1v-2.2h.4q.8 0 1.2-.2.4-.2.6-.8l.3-.9-3.7-10.6h3z"
                    fill={textColor}
                    className={styles.title}
                  />
                  <path
                    d="M124 170.3h-17.6v-56.9h17.5q7.5 0 13.4 3.4 6 3.4 9.2 9.6 3.4 6.2 3.4 14.2v2.6q0 8-3.3 14-3.3 6.3-9.2 9.7-6 3.4-13.4 3.4zm-.1-47.4H118v38h5.7q6.8 0 10.5-4.5 3.6-4.5 3.7-12.9v-3q0-8.6-3.6-13.1t-10.5-4.5zm53.2 48.2q-9.3 0-15.1-5.7-5.9-5.7-5.9-15.2V149q0-6.4 2.5-11.4 2.4-5 7-7.7 4.5-2.8 10.2-2.8 8.7 0 13.7 5.5t5 15.5v4.6h-27q.6 4.2 3.4 6.7 2.7 2.5 7 2.5 6.5 0 10.1-4.8l5.6 6.3q-2.6 3.6-6.9 5.6-4.3 2-9.6 2zm-1.3-34.7q-3.4 0-5.4 2.3-2.1 2.2-2.7 6.4h15.7v-.9q-.1-3.7-2-5.8-2-2-5.6-2zm25-8.4h10.7l.3 4.8q4.5-5.6 12.2-5.6 8.1 0 11.2 6.5 4.4-6.5 12.7-6.5 6.8 0 10.2 4 3.4 4 3.4 12.1v27H250v-27q0-3.6-1.4-5.2-1.4-1.7-5-1.7-5 0-7 4.9v29h-11.2v-27q0-3.6-1.5-5.2-1.4-1.7-4.9-1.7-4.8 0-7 4v29.9H201V128zm67.6 21.3v-.5q0-6.3 2.4-11.2 2.4-5 7-7.7 4.5-2.7 10.5-2.7 8.6 0 14 5.3 5.4 5.2 6 14.2l.1 2.9q0 9.7-5.4 15.6t-14.6 5.9q-9.1 0-14.6-5.9-5.4-5.8-5.4-16zm11.3.3q0 6 2.2 9.2 2.3 3.2 6.5 3.2 4.1 0 6.4-3.2 2.3-3.1 2.3-10 0-6-2.3-9.2-2.3-3.2-6.5-3.2-4.1 0-6.4 3.2-2.2 3.2-2.2 10z"
                    fill="#9A68F2"
                  />
                </g>

                <path
                  d="M311.2 265.9l.1-.3q.1-.2.4-.2.2 0 .3.2.2 0 .2.3 0 .2-.2.3 0 .2-.3.2t-.4-.2l-.1-.3z"
                  fill={textColor}
                  className={styles.title}
                />

                <a
                  href="https://stackblitz.com/privacy-policy"
                  target="_blank"
                  style={{ cursor: 'pointer' }}
                >
                  <path
                    d="M281.2 263.3h-1.5v3h-1.8v-8.5h3.3q1 0 1.7.3.8.4 1.2 1 .4.7.4 1.5 0 1.3-1 2-.8.7-2.3.7zm-1.5-4v2.6h1.5q.7 0 1.1-.3.4-.4.4-1t-.4-1q-.4-.4-1-.4h-1.6zm5.6 3.9v-.1q0-1 .3-1.7.4-.7 1-1.1.8-.4 1.7-.4 1.3 0 2 .7.9.8 1 2.2v.4q0 1.5-.8 2.4-.8.8-2.2.8-1.4 0-2.2-.8-.8-1-.8-2.4zm1.7 0q0 1 .3 1.4.4.5 1 .5t1-.5q.3-.5.3-1.5 0-.9-.3-1.4-.4-.5-1-.5t-1 .5q-.3.5-.3 1.5zm7.1-5.9v9h-1.7v-9h1.7zm3.2 2.7v6.3h-1.7V260h1.7zm-1.8-1.7q0-.3.3-.6.2-.2.7-.2.4 0 .6.2.3.3.3.6 0 .4-.3.7-.2.2-.6.2-.5 0-.7-.2-.3-.3-.3-.7zm5.8 6.8q.5 0 .8-.3.3-.2.3-.7h1.6q0 .7-.4 1.2-.3.5-1 .8-.5.3-1.2.3-1.4 0-2.2-.8-.8-.9-.8-2.4v-.1q0-1.5.8-2.4.8-.8 2.2-.8 1.1 0 1.9.6.7.7.7 1.8h-1.6q0-.4-.3-.8-.3-.3-.8-.3-.6 0-.9.5-.3.4-.3 1.4v.1q0 1 .3 1.4.3.5 1 .5zm4.8-5.1l1.2 4 1.2-4h1.8l-2.5 7.3-.2.3q-.5 1.3-1.9 1.3l-.7-.1v-1.3h.3q.4 0 .7-.2.2-.1.3-.4l.2-.6-2.2-6.3h1.8zm-68 3.3h-1.5v3H235v-8.5h3.3q1 0 1.7.3.7.4 1 1 .5.7.5 1.5 0 1.3-.9 2-.8.7-2.3.7zm-1.5-4v2.6h1.6q.7 0 1-.3.4-.4.4-1t-.4-1q-.3-.4-1-.4h-1.6zm9.5.6v1.7h-.7q-1 0-1.2.6v4.1h-1.7V260h1.6v.7q.5-.8 1.4-.8h.6zm2.5 0v6.4H247V260h1.7zm-1.8-1.6q0-.3.3-.6.3-.2.7-.2.4 0 .7.2l.2.6q0 .4-.2.7-.3.2-.7.2-.4 0-.7-.2-.3-.3-.3-.7zm4.4 1.7l1.2 4.3 1.2-4.3h1.8l-2.2 6.3h-1.6l-2.1-6.3h1.7zm10.3 6.3h-1.7l-.2-.5q-.6.6-1.6.6t-1.5-.5q-.6-.5-.6-1.4 0-1 .7-1.5t2.2-.6h.7v-.3q0-.5-.2-.7-.2-.3-.7-.3-.4 0-.7.2-.2.2-.2.6H256q0-.6.3-1 .4-.5 1-.8.6-.2 1.4-.2 1.2 0 1.8.6.7.5.7 1.6v2.8q0 .9.3 1.3v.1zm-3.1-1.2l.7-.1q.3-.2.4-.5v-1h-.6q-1.3 0-1.3.8v.1q0 .3.2.5t.6.2zm6.8 0q.4 0 .7-.3.3-.2.3-.7h1.6q0 .7-.3 1.2-.4.5-1 .8-.6.3-1.3.3-1.4 0-2.1-.8-.8-.9-.8-2.4v-.1q0-1.5.8-2.4.7-.8 2-.8t2 .6q.7.7.7 1.8h-1.6q0-.4-.3-.8-.3-.3-.7-.3-.6 0-1 .5-.2.4-.2 1.4v.1q0 1 .3 1.4.3.5.9.5zm4.8-5.1l1.2 4 1.1-4h1.9l-2.6 7.3-.1.3q-.6 1.3-2 1.3l-.7-.1v-1.3h.3q.5 0 .7-.2.3-.1.4-.4l.2-.6-2.2-6.3h1.8z"
                    fillRule="evenodd"
                    fill="#9A68F2"
                  />
                </a>
                <path
                  d="M209.2 258.4h.7v1.6h1.3v.6h-1.3v4.2l.1.8q.2.2.7.2h.6v.5l-.8.1q-.7 0-1-.4-.3-.4-.3-1.2v-4.2H208v-.6h1.2v-1.6zm4.1-1v3.7q.4-.6.9-1 .5-.2 1.2-.2 1 0 1.5.5.5.6.5 1.8v4.1h-.7v-4.1q0-.9-.4-1.3-.3-.4-1-.4t-1.2.4q-.5.4-.8 1v4.4h-.7v-9h.7zm8.4 9q-.8 0-1.5-.4t-1-1q-.4-.8-.4-1.7v-.2q0-1 .4-1.7.3-.7 1-1.1.6-.4 1.3-.4 1.2 0 1.9.8.6.7.6 2.1v.4h-4.5v.1q0 1.1.6 1.8.7.7 1.6.7.6 0 1-.2l.8-.6.4.3q-.8 1.1-2.2 1.1zm-.2-6q-.8 0-1.3.6t-.7 1.6h3.8q0-1-.5-1.6-.5-.5-1.3-.5zm4.7-.4v6.3h-.7V260h.7zm-.8-1.9v-.3l.4-.1.4.1.1.3-.1.4-.4.1-.3-.1-.1-.4zm5.6 1.8v.7h-.4q-.7 0-1.2.3-.4.4-.6 1v4.4h-.7V260h.7v1q.5-1.1 1.8-1.1h.4zm-42.7 3.3v-.1q0-1 .3-1.7.4-.7 1-1.1.7-.4 1.5-.4 1.3 0 2 .9.9.8.9 2.3v.1q0 1-.4 1.7t-1 1.1q-.6.4-1.5.4-1.2 0-2-.8-.8-1-.8-2.4zm.7 0q0 1.2.6 2 .6.6 1.5.6 1 0 1.6-.7.6-.7.6-2 0-.8-.3-1.4-.3-.6-.8-1l-1-.2q-1 0-1.6.7-.6.7-.6 2zm10.5 3.1v-.8q-.7 1-2 1-1 0-1.6-.7-.5-.5-.5-1.7V260h.7v4q0 1.8 1.4 1.8 1.6 0 2-1.2V260h.7v6.3h-.7zm2.9-8h.7v1.7h1.3v.6H203v4.2q0 .5.2.8.2.2.6.2h.6v.5l-.7.1q-.8 0-1-.4-.4-.4-.4-1.2v-4.2h-1.2v-.6h1.2v-1.6zm-45.3 7.5q.7 0 1.2-.4t.5-1h.7q0 .5-.3 1-.4.5-1 .8-.5.2-1.1.2-1.3 0-2-.8-.7-.9-.7-2.4v-.2q0-1 .3-1.6.3-.8 1-1.1.6-.4 1.4-.4 1 0 1.7.6t.7 1.6h-.7q0-.7-.5-1.2-.5-.4-1.2-.4-1 0-1.5.6-.5.7-.5 2v.2q0 1.2.5 1.9.5.6 1.5.6zm4.5-8.5v3.8q.4-.6.9-1 .5-.2 1.2-.2 1 0 1.5.5.5.6.5 1.8v4.1h-.7v-4.1q0-.9-.4-1.3-.3-.4-1-.4t-1.2.4q-.5.4-.8 1v4.4h-.7v-9h.7zm8.4 9.1q-.8 0-1.5-.4t-1-1q-.4-.8-.4-1.7v-.2q0-1 .4-1.7.3-.7 1-1.1.6-.4 1.3-.4 1.2 0 1.9.8.6.7.6 2.1v.4h-4.5v.1q0 1.1.6 1.8.7.7 1.6.7.6 0 1-.2l.8-.6.4.3q-.8 1.1-2.2 1.1zm-.2-6q-.8 0-1.3.6t-.7 1.6h3.8q0-1-.5-1.6-.5-.5-1.3-.5zm6.2 5.4q.8 0 1.3-.4t.5-1h.7q0 .5-.4 1-.3.5-.9.8-.5.2-1.2.2-1.2 0-2-.8-.7-.9-.7-2.4v-.2q0-1 .4-1.6.3-.8 1-1.1.5-.4 1.3-.4 1 0 1.8.6.6.6.7 1.6h-.7q0-.7-.5-1.2-.5-.4-1.3-.4-1 0-1.4.6-.6.7-.6 2v.2q0 1.2.6 1.9.5.6 1.4.6zm8 .5l-2.6-3.2-.8.8v2.4h-.7v-9h.7v5.8l.7-.7 2.4-2.4h.9l-2.7 2.7 2.9 3.6h-.8zm-53.4-6.3l2 5.3 1.8-5.3h.7l-2.7 7.4-.1.3q-.5 1.2-1.6 1.2l-.6-.1v-.6h.4q.5 0 .8-.2l.6-.9.3-.8-2.4-6.3h.8zm5.2 3.2v-.1q0-1 .4-1.7.3-.7 1-1.1.6-.4 1.4-.4 1.3 0 2.1.9.8.8.8 2.3v.1q0 1-.4 1.7-.3.7-1 1.1-.6.4-1.4.4-1.3 0-2-.8-.9-1-.9-2.4zm.7 0q0 1.2.6 2 .6.6 1.6.6t1.5-.7q.6-.7.6-2 0-.8-.3-1.4l-.7-1q-.5-.2-1.2-.2-.9 0-1.5.7t-.6 2zm10.5 3.1v-.8q-.6 1-2 1-1 0-1.6-.7-.5-.5-.5-1.7V260h.7v4q0 1.8 1.5 1.8t1.9-1.2V260h.7v6.3h-.7zm2.4 1.6l-.4-.3q.5-.7.5-1.5v-.9h.7v.8q0 1.2-.8 2zm-46-1.6h-.7v-5.7h-1v-.6h1v-.8q0-1 .5-1.5t1.4-.5l.7.1v.6h-.6q-.6 0-1 .3-.3.3-.3 1v.8h1.5v.6h-1.5v5.7zm5.7-6.4v.7h-.4q-.7 0-1.2.3-.4.4-.6 1v4.4h-.7V260h.7v1q.6-1.1 1.8-1.1h.4zm.7 3.3v-.1q0-1 .4-1.7t1-1.1q.7-.4 1.5-.4 1.2 0 2 .9.8.8.8 2.3v.1q0 1-.3 1.7-.4.7-1 1.1-.7.4-1.5.4-1.3 0-2-.8-.9-1-.9-2.4zm.8 0q0 1.2.5 2 .6.6 1.6.6t1.5-.7q.6-.7.6-2 0-.8-.3-1.4-.2-.6-.7-1-.5-.2-1.1-.2-1 0-1.6.7-.5.7-.5 2zm6.3-3.2h.7v1q.4-.6.9-.9.5-.2 1.2-.2 1.5 0 1.9 1.2.3-.6.9-1 .5-.2 1.2-.2 2 0 2.1 2.2v4.2h-.7v-4.2q0-.8-.4-1.2-.3-.4-1.1-.4t-1.3.5q-.5.4-.6 1.1v4.2h-.7v-4.2q0-.8-.4-1.2-.4-.4-1.1-.4-.7 0-1.2.4-.4.3-.7 1v4.4h-.7V260zm165.2-8.2q.8 0 1.3-.4t.5-1.1h.7q0 .6-.4 1-.3.5-.9.8-.5.3-1.2.3-1.2 0-2-.9-.7-.9-.7-2.3v-.2q0-1 .4-1.7.3-.7 1-1.1.5-.4 1.3-.4 1 0 1.8.6.6.6.7 1.7h-.7q0-.8-.5-1.2-.5-.5-1.3-.5-1 0-1.4.7-.6.7-.6 2v.1q0 1.2.6 1.9.5.7 1.4.7zm3.5-2.7v-.1q0-1 .4-1.7.3-.7 1-1 .6-.5 1.4-.5 1.3 0 2 .9.9.9.9 2.3v.2q0 1-.4 1.6-.3.8-1 1.2-.6.4-1.5.4-1.2 0-2-1-.8-.8-.8-2.3zm.7 0q0 1.2.6 2 .6.7 1.5.7 1 0 1.6-.7.6-.8.6-2v-.1q0-.7-.3-1.3-.3-.6-.8-1-.4-.3-1-.3-1 0-1.6.7-.6.8-.6 2zm7.2-5.8v9h-.7v-9h.7zm2.7 0v9h-.7v-9h.7zm4.3 9q-.8 0-1.4-.3-.7-.4-1-1.1-.4-.7-.4-1.6v-.3q0-.9.4-1.6.3-.8 1-1.2.6-.4 1.3-.4 1.2 0 1.8.8.7.8.7 2.1v.4h-4.5v.2q0 1 .6 1.8.6.7 1.6.7l1-.2q.4-.2.7-.7l.5.4q-.8 1-2.3 1zm0-5.9q-.9 0-1.4.6-.6.6-.7 1.5h3.8q0-1-.5-1.5-.5-.6-1.3-.6zm6.1 5.4q.8 0 1.3-.4t.5-1.1h.7q0 .6-.4 1-.3.5-.9.8-.5.3-1.2.3-1.2 0-2-.9-.7-.9-.7-2.3v-.2q0-1 .4-1.7.3-.7.9-1.1.6-.4 1.4-.4 1 0 1.7.6t.8 1.7h-.7q0-.8-.5-1.2-.5-.5-1.3-.5-1 0-1.5.7t-.5 2v.1q0 1.2.5 1.9.6.7 1.5.7zm4.3-7.5h.7v1.6h1.3v.6h-1.3v4.2l.1.8q.2.3.7.3l.6-.1v.6h-.8q-.7 0-1-.3-.3-.5-.3-1.3v-4.2h-1.2v-.6h1.2v-1.6zm-64.5 1.6h.7v1q.4-.5 1-.8.4-.3 1-.3 1.6 0 2 1.2.3-.6.9-.9.6-.3 1.2-.3 2 0 2.1 2.2v4.3h-.7V248q0-.9-.3-1.3-.4-.4-1.2-.4-.8 0-1.3.5t-.6 1.2v4.2h-.7V248q0-.8-.4-1.2-.3-.4-1.1-.4-.7 0-1.2.4-.4.4-.7 1.1v4.4h-.7v-6.4zm11.5 0v6.4h-.7v-6.4h.7zm-.8-1.8v-.4h.8l.1.4-.1.3q-.1.2-.4.2-.2 0-.3-.2l-.1-.3zm2.4 5q0-1.6.7-2.4.6-.9 1.8-.9 1.3 0 2 1v-.9h.6v6.2q0 1.3-.7 2t-1.8.7q-.7 0-1.3-.3-.6-.3-1-.8l.5-.4q.7.9 1.7.9t1.4-.5q.5-.5.5-1.5v-.8q-.7 1-2 1-1 0-1.7-.9t-.7-2.4zm.7 0q0 1.3.5 2t1.4.7q1.3 0 1.8-1.2v-3q-.2-.6-.7-.9-.5-.3-1.1-.3-.9 0-1.4.7-.5.7-.5 2zm7-5.8v3.7q.3-.6.8-.9.6-.3 1.2-.3 1 0 1.5.6.5.5.5 1.7v4.2h-.7V248q0-.9-.3-1.3-.4-.4-1.2-.4-.6 0-1.1.4-.5.4-.8 1.1v4.4h-.7v-9h.7zm6.2 1h.7v1.6h1.3v.6h-1.3v4.2q0 .5.2.8.2.3.6.3l.6-.1v.6h-.7q-.7 0-1-.3-.4-.5-.4-1.3v-4.2h-1.1v-.6h1.1v-1.6zm-51.8 0h.7v1.6h1.3v.6h-1.3v4.2q0 .5.2.8.2.3.6.3l.6-.1v.6h-.7q-.8 0-1-.3-.4-.5-.4-1.3v-4.2h-1.2v-.6h1.2v-1.6zm4.2-1v3.7q.3-.6.8-.9.6-.3 1.2-.3 1 0 1.5.6.5.5.5 1.7v4.2h-.7V248q0-.9-.3-1.3-.4-.4-1.1-.4-.7 0-1.2.4t-.7 1.1v4.4h-.7v-9h.7zm8.3 9q-.8 0-1.5-.3-.6-.4-1-1.1-.3-.7-.3-1.6v-.3q0-.9.3-1.6.4-.8 1-1.2.6-.4 1.4-.4 1.1 0 1.8.8t.7 2.1v.4H232v.2q0 1 .6 1.8.6.7 1.5.7.6 0 1-.2.5-.2.8-.7l.4.4q-.7 1-2.2 1zm-.1-5.9q-.8 0-1.4.6-.5.6-.6 1.5h3.8q0-1-.5-1.5-.5-.6-1.3-.6zm3.9-.5l2 5.3 1.8-5.3h.8l-2.7 7.4-.2.4q-.5 1.1-1.6 1.1h-.5v-.6h.3q.5 0 .9-.3.3-.2.5-.8l.3-.9-2.4-6.3h.8zm-43.3 3.2q0-1.5.7-2.4.6-.9 1.8-.9 1.3 0 2 1v-3.5h.6v9h-.6v-.9q-.7 1-2 1-1.1 0-1.8-1-.7-.8-.7-2.3zm.7 0q0 1.3.5 2t1.4.7q1.3 0 1.8-1.2v-3q-.5-1.2-1.8-1.2-.9 0-1.4.7-.5.7-.5 2zm11 3.2h-.7l-.2-1q-.3.6-.9.8-.6.3-1.2.3-1 0-1.5-.5-.6-.5-.6-1.3 0-1 .8-1.5t2.2-.5h1.2v-.7q0-.7-.4-1.1-.4-.4-1.2-.4-.7 0-1.2.4-.5.3-.5.9h-.7q0-.8.7-1.3.7-.6 1.7-.6t1.7.5q.6.6.6 1.5v3q0 1 .2 1.4zm-3-.5q.8 0 1.3-.4.6-.3.8-.9v-1.4h-1.2q-1 0-1.7.4-.5.4-.5 1t.3.9q.4.4 1 .4zm5-7.5h.8v1.6h1.3v.6h-1.3v4.2q0 .5.2.8.2.3.6.3l.6-.1v.6h-.7q-.8 0-1-.3-.4-.5-.4-1.3v-4.2h-1.2v-.6h1.2v-1.6zm8.3 8h-.7l-.2-1q-.3.6-1 .8-.5.3-1.1.3-1 0-1.5-.5-.6-.5-.6-1.3 0-1 .8-1.5t2.1-.5h1.3v-.7q0-.7-.4-1.1-.4-.4-1.2-.4-.8 0-1.2.4-.5.3-.5.9h-.7q0-.8.7-1.3.7-.6 1.7-.6t1.7.5q.6.6.6 1.5v3q0 1 .2 1.4zm-3-.5q.8 0 1.3-.4.6-.3.8-.9v-1.4h-1.2q-1 0-1.7.4-.6.4-.6 1t.4.9q.4.4 1 .4zm-47.3-5.9l1.3 4.9.1.5.1-.5 1.6-4.9h.6l1.5 4.8.1.7.2-.6 1.3-4.9h.7l-1.9 6.4h-.6l-1.6-5v-.4l-.1.3-1.6 5h-.6l-1.9-6.3h.8zm9.5-2.6v3.7q.4-.6.9-.9.5-.3 1.2-.3 1 0 1.5.6.5.5.5 1.7v4.2h-.7V248q0-.9-.4-1.3-.3-.4-1-.4t-1.2.4q-.5.4-.8 1.1v4.4h-.7v-9h.7zm10.7 9h-.8l-.1-1q-.4.6-1 .8-.5.3-1.2.3-.9 0-1.5-.5-.5-.5-.5-1.3 0-1 .8-1.5.7-.5 2.1-.5h1.3v-.7q0-.7-.4-1.1-.5-.4-1.3-.4-.7 0-1.2.4-.5.3-.5.9h-.7q0-.8.7-1.3.7-.6 1.8-.6 1 0 1.6.5.6.6.7 1.5v3q0 1 .2 1.4zm-3-.5q.7 0 1.3-.4.5-.3.8-.9v-1.4h-1.3q-1 0-1.6.4-.6.4-.6 1t.4.9q.4.4 1 .4zm5-7.5h.7v1.6h1.3v.6h-1.3v4.2q0 .5.2.8.2.3.7.3l.5-.1v.6h-.7q-.7 0-1-.3-.4-.5-.4-1.3v-4.2h-1.1v-.6h1.1v-1.6zm-85.5 1.6v6.4h-.7v-6.4h.7zm-.8-1.8l.1-.4h.7l.2.4q0 .2-.2.3-.1.2-.3.2-.3 0-.4-.2l-.1-.3zm2.7 1.8h.7v1.1q.4-.6.9-.9.5-.3 1.2-.3 1 0 1.5.6.5.5.5 1.7v4.2h-.7V248q0-.9-.4-1.3-.3-.4-1-.4t-1.2.4q-.5.4-.8 1.1v4.4h-.7v-6.4zm7.8 6.4h-.7v-5.8h-1v-.6h1v-.8q0-1 .5-1.4.5-.6 1.4-.6l.7.1v.6h-.7q-.5 0-.9.3-.3.4-.3 1v.8h1.5v.6h-1.5v5.8zm2.4-3.2v-.1q0-1 .3-1.7.4-.7 1-1 .7-.5 1.5-.5 1.3 0 2 .9.9.9.9 2.3v.2q0 1-.4 1.6-.4.8-1 1.2-.6.4-1.5.4-1.2 0-2-1-.8-.8-.8-2.3zm.7 0q0 1.2.6 2 .6.7 1.5.7 1 0 1.6-.7.6-.8.6-2v-.1q0-.7-.3-1.3-.3-.6-.8-1-.5-.3-1-.3-1 0-1.6.7-.6.8-.6 2zm9.3-3.2v.6h-.4q-.7 0-1.2.3-.4.4-.6 1.1v4.4h-.7v-6.4h.7v1q.6-1.1 1.8-1.1h.4zm1.1 0h.7v1q.4-.5.9-.8.5-.3 1.1-.3 1.5 0 2 1.2.3-.6.9-.9.5-.3 1.2-.3 2 0 2.1 2.2v4.3h-.7V248q0-.9-.4-1.3-.3-.4-1.1-.4t-1.3.5q-.5.5-.6 1.2v4.2h-.7V248q0-.8-.4-1.2-.4-.4-1.2-.4-.6 0-1 .4-.6.4-.8 1.1v4.4h-.7v-6.4zm15.4 6.4h-.7l-.2-1q-.3.6-.9.8-.6.3-1.2.3-1 0-1.5-.5-.6-.5-.6-1.3 0-1 .8-1.5t2.2-.5h1.2v-.7q0-.7-.4-1.1-.4-.4-1.2-.4-.7 0-1.2.4-.5.3-.5.9h-.7q0-.8.7-1.3.7-.6 1.7-.6t1.7.5q.6.6.6 1.5v3q0 1 .2 1.4zm-3-.5q.8 0 1.3-.4.6-.3.8-.9v-1.4h-1.2q-1 0-1.7.4-.6.4-.6 1t.4.9q.4.4 1 .4zm5-7.5h.8v1.6h1.3v.6h-1.3v4.2q0 .5.2.8.2.3.6.3l.6-.1v.6h-.7q-.8 0-1-.3-.4-.5-.4-1.3v-4.2h-1.2v-.6h1.2v-1.6zm4.3 1.6v6.4h-.7v-6.4h.7zm-.8-1.8l.1-.4h.7l.2.4q0 .2-.2.3 0 .2-.3.2l-.4-.2v-.3zm2.4 5v-.1q0-1 .3-1.7.4-.7 1-1 .7-.5 1.5-.5 1.2 0 2 .9t.8 2.3v.2q0 1-.3 1.6-.4.8-1 1.2-.7.4-1.5.4-1.3 0-2-1-.8-.8-.8-2.3zm.7 0q0 1.2.6 2 .5.7 1.5.7t1.5-.7q.6-.8.6-2v-.1q0-.7-.2-1.3-.3-.6-.8-1-.5-.3-1.1-.3-1 0-1.5.7-.6.8-.6 2zm6.4-3.2h.6v1.1q.4-.6 1-.9.5-.3 1.1-.3 1 0 1.5.6.5.5.5 1.7v4.2h-.7V248q0-.9-.3-1.3-.4-.4-1.1-.4-.7 0-1.2.4t-.7 1.1v4.4h-.7v-6.4zm132.2-14h.7v1q.4-.6.9-.9.5-.3 1.2-.3 1.5 0 1.9 1.3.3-.6.9-1 .5-.3 1.2-.3 2 0 2.1 2.3v4.2h-.7V234q0-.8-.4-1.2-.3-.5-1.1-.5t-1.3.5q-.5.5-.6 1.2v4.2h-.7V234q0-.8-.4-1.3-.4-.4-1.1-.4-.7 0-1.2.4t-.7 1.1v4.4h-.7v-6.3zm10.3 3.2v-.2q0-.9.3-1.6.4-.7 1-1.2.7-.4 1.5-.4 1.3 0 2 1 .9.8.9 2.3v.1q0 1-.4 1.7t-1 1.1q-.6.4-1.5.4-1.2 0-2-.9t-.8-2.3zm.7-.1v.1q0 1.2.6 1.9t1.5.7q1 0 1.6-.7.6-.7.6-2 0-.8-.3-1.4-.3-.6-.8-1-.5-.3-1-.3-1 0-1.6.8-.6.7-.6 1.9zm9.3-3.2v.7h-.4q-.7 0-1.2.3-.4.3-.6 1v4.4h-.7v-6.3h.7v1q.6-1.2 1.8-1.2l.4.1zm3.6 6.5q-.8 0-1.5-.4-.6-.4-1-1.1-.3-.7-.3-1.6v-.2q0-1 .3-1.7.4-.7 1-1.1.6-.5 1.4-.5 1.1 0 1.8.8t.7 2.2v.4h-4.6v.1q0 1 .7 1.8.6.7 1.5.7.6 0 1-.2l.8-.6.4.3q-.7 1.1-2.2 1.1zm-.1-6q-.8 0-1.4.6-.5.6-.6 1.6h3.8v-.1q0-1-.5-1.5-.5-.6-1.3-.6zm-39.3 1.3v.6h-4v4h-.7v-8.5h5.3v.6h-4.6v3.3h4zm1.5 1.5v-.2q0-.9.3-1.6.4-.7 1-1.2.7-.4 1.5-.4 1.3 0 2 1 .8.8.8 2.3v.1q0 1-.3 1.7-.4.7-1 1.1-.7.4-1.5.4-1.2 0-2-.9t-.8-2.3zm.7-.1v.1q0 1.2.6 1.9t1.5.7q1 0 1.6-.7.5-.7.5-2 0-.8-.2-1.4-.3-.6-.8-1-.5-.3-1-.3-1 0-1.6.8-.6.7-.6 1.9zm9.3-3.2v.7h-.5q-.6 0-1 .3-.5.3-.7 1v4.4h-.7v-6.3h.7v1q.5-1.2 1.8-1.2l.4.1zm-95.4 4.3q0-.7-.5-1.1-.5-.4-1.9-.8-1.3-.4-1.9-.8-.9-.6-.9-1.7 0-1 .8-1.5.8-.7 2.1-.7.8 0 1.5.4.7.3 1 .9.4.6.4 1.3h-.7q0-.9-.6-1.4-.6-.5-1.6-.5t-1.6.4q-.5.4-.5 1.1 0 .7.5 1.1.5.4 1.7.7 1.1.3 1.7.7.6.3.9.8.3.4.3 1 0 1-.8 1.7-.8.6-2.1.6-1 0-1.7-.3-.8-.3-1.1-1-.4-.5-.4-1.2h.7q0 .9.7 1.4.6.5 1.8.5 1 0 1.6-.4.6-.5.6-1.2zm2.5-5.9h.7v1.7h1.3v.5h-1.3v4.3q0 .5.2.7.1.3.6.3h.6v.5l-.8.1q-.7 0-1-.4-.3-.4-.3-1.2v-4.3h-1.2v-.5h1.2v-1.7zm8.2
                8h-.8l-.1-.9q-.4.5-1 .8-.5.2-1.2.2-.9 0-1.4-.5-.6-.5-.6-1.3 0-1 .8-1.5.7-.5 2.1-.5h1.3v-.7q0-.7-.4-1-.5-.5-1.3-.5-.7 0-1.2.4-.4.4-.4 1l-.8-.1q0-.8.8-1.3.7-.6 1.7-.6t1.7.6q.6.5.6 1.4v3q0 1 .2 1.4zm-3-.5q.7 0 1.3-.3.5-.4.8-1V235h-1.3q-1 0-1.6.4-.6.4-.6 1t.4 1q.4.3 1 .3zm7 0q.7 0 1.2-.4t.6-1h.6q0 .5-.3 1-.4.5-1 .7-.5.3-1.1.3-1.3 0-2-.9-.7-.8-.7-2.3v-.2q0-1 .3-1.7t1-1q.6-.5 1.4-.5 1 0 1.7.7.7.6.7 1.6h-.6q0-.8-.6-1.2-.5-.5-1.2-.5-1 0-1.5.7t-.5 2v.1q0 1.3.5 2 .5.6 1.5.6zm8 .5l-2.7-3.2-.8.8v2.4h-.7v-9h.7v5.8l.7-.8 2.4-2.3h1l-2.8 2.6 3 3.7h-.9zm4.7 0H214v-8.5h2.5q1.4 0 2 .5.8.6.8 1.7 0 .7-.4 1.1-.3.5-1 .7.8.2 1.2.8.5.5.5 1.3 0 1.1-.7 1.8-.8.6-2 .6zm.1-4.1h-2.2v3.5h2.2q.9 0 1.4-.5.6-.5.6-1.3t-.6-1.2q-.5-.5-1.4-.5zm-2.2-3.8v3.2h2q.9 0 1.4-.4.5-.4.5-1.2 0-.8-.6-1.2-.5-.4-1.5-.4h-1.8zm7.3-1.1v9h-.8v-9h.8zm2.6 2.7v6.3h-.7v-6.3h.7zm-.8-1.9l.1-.3.4-.2q.2 0 .3.2.2.1.2.3l-.2.4h-.7v-.4zm3.1.2h.7v1.7h1.3v.5h-1.3v4.3q0 .5.2.7.2.3.7.3h.5v.5l-.7.1q-.7 0-1-.4-.4-.4-.4-1.2v-4.3h-1.1v-.5h1.1v-1.7zm7.8 2.2l-3.8 5.2h4v.6h-5v-.5l4-5.2H230v-.6h4.6v.5zm1.5 5.4l.1-.4.4-.1.3.1.2.4q0 .2-.2.3l-.3.1h-.4l-.1-.4zm5.2 0q.8 0 1.3-.5.5-.4.5-1h.7q0 .5-.4 1-.3.5-.9.7-.5.3-1.2.3-1.2 0-2-.9-.7-.8-.7-2.3v-.2q0-1 .4-1.7.3-.7 1-1 .5-.5 1.3-.5 1 0 1.8.7.6.6.7 1.6h-.7q0-.8-.5-1.2-.5-.5-1.3-.5-1 0-1.4.7-.6.7-.6 2v.1q0 1.3.6 2 .5.6 1.4.6zm3.5-2.7v-.2q0-.9.3-1.6.4-.7 1-1.2.7-.4 1.5-.4 1.3 0 2 1 .9.8.9 2.3v.1q0 1-.4 1.7t-1 1.1q-.6.4-1.5.4-1.2 0-2-.9t-.8-2.3zm.7-.1v.1q0 1.2.6 1.9t1.5.7q1 0 1.6-.7.6-.7.6-2 0-.8-.3-1.4-.3-.6-.8-1-.5-.3-1-.3-1 0-1.6.8-.6.7-.6 1.9zm6.4-3.1h.6v1q.4-.6 1-.9.5-.3 1.1-.3 1.5 0 2 1.3.3-.6.8-1 .6-.3 1.3-.3 2 0 2 2.3v4.2h-.6V234q0-.8-.4-1.2-.4-.5-1.2-.5-.7 0-1.3.5-.5.5-.5 1.2v4.2h-.7V234q0-.8-.4-1.3-.4-.4-1.2-.4-.7 0-1.1.4-.5.4-.7 1.1v4.4h-.7v-6.3zm10.6 5.9l.1-.4.4-.1.3.1.2.4q0 .2-.2.3l-.3.1h-.4l-.1-.4zM139 235v-.2q0-.9.3-1.6.4-.7 1-1.2.7-.4 1.5-.4 1.2 0 2 1 .8.8.8 2.3v.1q0 1-.3 1.7-.4.7-1 1.1-.7.4-1.5.4-1.3 0-2-.9-.8-.9-.8-2.3zm.7-.1v.1q0 1.2.6 1.9.5.7 1.5.7t1.5-.7q.6-.7.6-2 0-.8-.2-1.4-.3-.6-.8-1-.5-.3-1.1-.3-1 0-1.5.8-.6.7-.6 1.9zm11.5 0q0 1.6-.7 2.4-.7 1-1.8 1-1.3 0-2-1v3.2h-.6V232h.6v.9q.7-1 2-1 1.2 0 1.8.8.7.9.7 2.4zm-.7 0q0-1.2-.5-2-.5-.7-1.4-.7-.7 0-1.1.4-.5.3-.7.9v3q.2.5.7.8.4.3 1 .3 1 0 1.5-.7t.5-2zm4.7 3.3q-.8 0-1.5-.4-.6-.4-1-1.1-.4-.7-.4-1.6v-.2q0-1 .4-1.7.3-.7 1-1.1.6-.5 1.3-.5 1.2 0 1.9.8t.7 2.2v.4H153v.1q0 1 .6 1.8.7.7 1.6.7.6 0 1-.2l.8-.6.4.3q-.8 1.1-2.2 1.1zm-.2-6q-.7 0-1.3.6-.5.6-.6 1.6h3.8v-.1q0-1-.6-1.5-.5-.6-1.3-.6zm4-.4h.6v1l.9-.9q.5-.3 1.2-.3 1 0 1.5.6t.5 1.7v4.2h-.7V234q0-.8-.4-1.2-.3-.5-1-.5t-1.2.5q-.5.4-.8 1v4.4h-.7v-6.3zm7.3 0v6.3h-.7v-6.3h.7zm-.8-1.9v-.3l.4-.2q.3 0 .4.2l.1.3-.1.4h-.7l-.1-.4zm2.7 1.9h.7v1q.3-.5.9-.9.5-.3 1.2-.3 1 0 1.5.6t.5 1.7v4.2h-.7V234q0-.8-.4-1.2-.3-.5-1.1-.5-.7 0-1.2.5-.5.4-.7 1v4.4h-.7v-6.3zm6.3 3.2v-.1q0-1.5.7-2.4.6-.9 1.8-.9 1.3 0 2 1v-.8h.6v6.2q0 1.2-.7 2-.7.6-1.8.6-.7 0-1.3-.3-.6-.3-1-.8l.5-.4q.7 1 1.7 1t1.4-.6q.5-.5.5-1.4v-.8q-.7 1-2 1-1 0-1.7-1-.7-.8-.7-2.3zm.7 0q0 1.2.5 1.9t1.4.7q1.3 0 1.8-1.2v-2.9q-.2-.6-.7-1-.5-.3-1.1-.3-.9 0-1.4.7-.5.7-.5 2zm-46.8-3.2v6.3h-.7v-6.3h.7zm-.8-1.9l.1-.3.4-.2.4.2v.7h-.8v-.4zm6.5 6.6q0-.5-.4-.9-.4-.3-1.2-.4-.9-.2-1.3-.5-.5-.2-.7-.5-.3-.4-.3-.8 0-.8.7-1.3.6-.5 1.6-.5t1.7.6q.6.5.6 1.3h-.7q0-.5-.5-.9-.4-.4-1.1-.4-.7 0-1.1.3-.5.4-.5.8 0 .5.4.8l1.3.5 1.3.4.7.6q.3.4.3.8 0 .9-.7 1.3-.6.5-1.7.5-1 0-1.8-.5-.7-.6-.7-1.4h.7q0 .6.6 1 .4.3 1.2.3.7 0 1.2-.3.4-.3.4-.8zm-26-7v.7h-2.8v7.9h-.8v-8h-2.9v-.5h6.6zm2-.4v3.7q.3-.5.9-.9.5-.3 1.2-.3 1 0 1.5.6t.5 1.7v4.2h-.7V234q0-.8-.4-1.2-.3-.5-1.1-.5-.7 0-1.2.5-.5.4-.7 1v4.4h-.7v-9h.7zm6.7 2.7v6.3h-.7v-6.3h.7zm-.9-1.9q0-.2.2-.3 0-.2.3-.2l.4.2.1.3-.1.4h-.7l-.2-.4zm6.6 6.6q0-.5-.5-.9-.4-.3-1.2-.4-.9-.2-1.3-.5-.5-.2-.7-.5l-.2-.8q0-.8.6-1.3t1.6-.5q1 0 1.7.6.6.5.6 1.3h-.7q0-.5-.4-.9-.5-.4-1.2-.4t-1.1.3q-.4.4-.4.8 0 .5.3.8l1.3.5 1.4.4.6.6q.3.4.3.8 0 .9-.7 1.3-.6.5-1.7.5-1 0-1.8-.5-.7-.6-.7-1.4h.7q0 .6.6 1 .4.3 1.2.3.8 0 1.2-.3.5-.3.5-.8z"
                  fillRule="evenodd"
                  fill={textColor}
                  className={styles.title}
                />
              </g>

              {/* <g onClick={this.loadStackBlitz} className={styles.startButton} style={{ cursor: 'pointer' }} transform={`translate(${this.state.buttonPosition}, 0)`}>
              <g filter="url(#x)">
                <path fill="#9A68F2" d="M137.5 250h147v50h-147z" />
              </g>
              <path
                  d="M179 280q0-1.2-.8-1.8-.8-.6-2.9-1.2-2-.7-3.2-1.4-3.3-1.7-3.3-4.7 0-1.6.9-2.8.9-1.2 2.5-1.9t3.7-.7q2 0 3.7.8 1.6.7 2.5 2 .8 1.4.8 3.2h-4q0-1.4-.7-2-.9-.8-2.4-.8-1.4 0-2.2.6-.8.6-.8 1.6t1 1.6q.9.6 2.7 1.2 3.4 1 4.9 2.5 1.5 1.5 1.5 3.7 0 2.5-1.8 4-2 1.3-5.1 1.3-2.2 0-4-.8-1.9-.8-2.8-2.2-1-1.4-1-3.3h4q0 3.2 3.8 3.2 1.4 0 2.2-.6.8-.5.8-1.6zm21-14.2v3.2h-5.8v16h-4v-16h-5.8v-3.2h15.7zm14.5 19.2l-1.3-4h-7l-1.3 4h-4.2l7.1-19.2h3.7l7.2 19.2h-4.2zm-4.8-14.4l-2.4 7.2h4.8l-2.4-7.2zm21.5 14.4l-3.6-7h-3.2v7h-4v-19.2h7.2q3.4 0 5.3 1.5 1.8 1.5 1.8 4.3 0 2-.8 3.3-.9 1.3-2.6 2l4.1 7.9v.2h-4.2zm-6.8-16v5.8h3.2q1.5 0 2.3-.8.9-.8.9-2.1 0-1.4-.8-2.1-.8-.8-2.4-.8h-3.2zm27.8-3.2v3.2h-6v16h-3.9v-16h-5.8v-3.2h15.7z"
                  fillRule="evenodd"
                  fill="#FFF"
                />
              </g> */}

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
                  vectorEffect="non-scaling-stroke"
                  strokeWidth="5"
                  stroke="#5B5B5B"
                  strokeLinejoin="round"
                  strokeMiterlimit="3"
                  d="M774 382.7l-.3.4"
                />
                <path
                  d="M684 377.9h-18.8l18.4-17 .5-17.4 13.8 13.7v-28.4l13.7 14.5v-26.6l13 12.3v-25.5l11.7 11.6v-21.6c0-.4.2-.8.6-.9.4-.1.8 0 1.1.3a510.2 510.2 0 0 0 13.3 14.8l1 .7v-31.6l15.8 14.4-1.5-25h.7l-29.1-28.5V269l-30.5-31.2V269l-30.4-31.2v28.9h-2v-33.6l30.5 31.2v-31.2l30.5 31.2v-31.1l32 31.2v-31.5l29.6 34-27.8 1v1l-1-.9h-.5l1.7 27.8-16.1-14.6v28.5l-.2.4-.2.4-.5.2c-.2.1-.5.2-.7 0l-.6-.1-.8-.5c-1.3-1-2.5-2.2-3.5-3.4l-1.1-1-1.3-1.5a211 211 0 0 1-7-8v23.5l-11.7-11.6v25.3l-13-12.3v27l-13.8-14.5v28.2L685.9 348l-.3 11.2.3-.4v31l29-29v27.6l27-27.6v27.4l24.7-27.8v28.1l6.4-6.1 1.3 1.4-9.6 9.2v-27.6l-24.8 27.8v-27.7l-26.8 27.6v-27.6l-29 29m86-126.6h-1m-85.6 95.7L670.1 376h13l.4-12.4zm86.6-97.6l23.8-1-23.8-27v28z"
                  fillRule="evenodd"
                  fill="#5B5B5B"
                />
                <path
                  d="M779 376.5h.1l18.6-17.8V378l-14 .4 11.1 10.5h-23.2l13.8 13h-27.7l13.8 13.8h-28.4l14.7 15.4-28-1.6 13.4 13h-26.8l15.2 15.3h-29l16 16h-31.3l13.6 13.6-1.3 1.3-16.9-16.8H714l-16-16h29l-15.2-15.3h26.8L725 427.2l28.2 1.6-14.4-15.1h28.2L753 399.9h27.5l-13.8-13H790l-9.6-9-5.7 5.5-1.3-1.4m8.7-5.6l13.7-.4v-12.8L782 376.4z"
                  fillRule="evenodd"
                  fill="#5B5B5B"
                />
                <path
                  d="M517.6 244.9h-1.9V233l9.5 9.5v-9.4l13 12.4v-12.4l13 12.4V233l16 16v-16l19.6 19.6v-19.6l22.5 22.5v-22.5l25.4 26v-26l31.4 32.9-1.4 1.3-28-29.5V264l-25.5-26.1v22.4l-22.5-22.5v19.7l-19.5-19.7v16l-16-16V250l-13-12.3V250L527 237.7v9.5l-9.5-9.5v7.2z"
                  fill="#5B5B5B"
                />
                <path
                  d="M664.5 498.3v-287h133.9v287H664.5zm7.7-7.7V219h118.5v271.7H672.2z"
                  fillRule="evenodd"
                  fill="#5B5B5B"
                />
                <path
                  d="M679.7 216.3l54-54 54.7 54H679.7zm9.2-3.8l44.7-44.7 45.5 44.7h-90.2z"
                  fillRule="evenodd"
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
                className={`${styles.shuttleWrapper} ${
                  this.state.hovering ? ', ' + styles.hovering : ''
                }`}
                transform={`translate(0, ${this.state.overallShuttleOffset})`}
              >
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
                  <path
                    d="M562.6 468.3l2.5 5.7h-14.7v-5.7h12.2z"
                    fill="#5B5B5E"
                  />
                  <path d="M561 453.2l6 16.3h-16.6v-16.3H561z" fill="#DFDFEA" />
                  <path
                    d="M538.3 468.3l-2.6 5.7h14.7v-5.7h-12.1z"
                    fill="#3D3D40"
                  />
                  <path
                    d="M539.9 453.2l-6.1 16.3h16.6v-16.3h-10.5z"
                    fill="#BDBDC8"
                  />
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
                  <path
                    d="M451.8 468.3l-2.6 5.7H464v-5.7h-12.2z"
                    fill="#5B5B5E"
                  />
                  <path
                    d="M453.4 453.2l-6 16.3H464v-16.3h-10.6z"
                    fill="#DFDFEA"
                  />
                  <path d="M476 468.3l2.7 5.7H464v-5.7h12z" fill="#3D3D40" />
                  <path
                    d="M474.5 453.2l6 16.3H464v-16.3h10.5z"
                    fill="#BDBDC8"
                  />
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
                      vectorEffect="non-scaling-stroke"
                      strokeWidth="10"
                      stroke="#3D3D40"
                      strokeLinecap="square"
                      strokeMiterlimit="3"
                    />
                    <mask id="c">
                      <path
                        d="M557.1 420.3v10.6l-30.7 6.7v-17.3h30.7z"
                        fill="#fff"
                      />
                    </mask>
                    <path
                      d="M557.1 420.3v10.6l-30.7 6.7v-17.3h30.7z"
                      fill="#DFDFEA"
                      mask="url(#c)"
                      vectorEffect="non-scaling-stroke"
                      strokeWidth="10"
                      stroke="#3D3D40"
                      strokeLinecap="square"
                      strokeMiterlimit="3"
                    />
                    <g
                      className={styles.flames}
                      style={{
                        display: this.state.flamesOn ? 'block' : 'none',
                      }}
                    >
                      <path
                        d="M428.9 418.4h58.5v1.9h-58.5v-2z"
                        fill="#3D3D40"
                      />
                      <path
                        d="M510.6 472.3v.7c2.1 15.4 5 30.8 8.9 46.2 4.4-16.4 7.5-31.9 9.3-46.2V472.2c-.2-9.7-4.2-17.6-9.1-17.6-5 0-9 7.9-9.1 17.6z"
                        fill="#FF5F5F"
                      />
                      <linearGradient
                        id="y"
                        x1=".5"
                        y1=".1"
                        x2=".5"
                        y2="1.2"
                        gradientTransform="matrix(12.18 0 0 43.051 513.6 460.4)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#ff9539" />
                        <stop offset="10%" stopColor="#ffa734" />
                        <stop offset="42.2%" stopColor="#f4e61f" />
                        <stop offset="100%" stopColor="#fbf6b6" />
                      </linearGradient>

                      <path
                        d="M513.6 472v.6c1.4 10.3 3.4 20.5 6 30.8 3-11 5-21.3 6-30.8h.2v-.5c-.1-6.5-2.8-11.7-6.1-11.7s-6 5.2-6.1 11.7z"
                        fill="url(#y)"
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
                      vectorEffect="non-scaling-stroke"
                      strokeWidth="10"
                      stroke="#3D3D40"
                      strokeLinecap="square"
                      strokeMiterlimit="3"
                    />
                    <mask id="f">
                      <path
                        d="M456.7 420.3v10.6l30.7 6.7v-17.3h-30.7z"
                        fill="#fff"
                      />
                    </mask>
                    <path
                      d="M456.7 420.3v10.6l30.7 6.7v-17.3h-30.7z"
                      fill="#DFDFEA"
                      mask="url(#f)"
                      vectorEffect="non-scaling-stroke"
                      strokeWidth="10"
                      stroke="#3D3D40"
                      strokeLinecap="square"
                      strokeMiterlimit="3"
                    />
                    <path d="M428.9 418.4h58.5v1.9h-58.5v-2z" fill="#3D3D40" />
                    <g
                      className={styles.flames}
                      style={{
                        display: this.state.flamesOn ? 'block' : 'none',
                      }}
                    >
                      <path
                        d="M485.6 472.3v.7h.1c2 15.4 5 30.8 8.9 46.2 4.4-16.4 7.4-31.9 9.2-46.2h.1V472.2c-.2-9.7-4.2-17.6-9.2-17.6-4.9 0-8.9 7.9-9.1 17.6z"
                        fill="#FF5F5F"
                      />
                      <linearGradient
                        id="z"
                        x1=".5"
                        y1=".1"
                        x2=".5"
                        y2="1.2"
                        gradientTransform="matrix(12.18 0 0 43.051 488.7 460.1)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#ff9539" />
                        <stop offset="10%" stopColor="#ffa734" />
                        <stop offset="42.2%" stopColor="#f4e61f" />
                        <stop offset="100%" stopColor="#fbf6b6" />
                      </linearGradient>
                      <path
                        d="M488.7 471.8v.5c1.4 10.3 3.4 20.6 6 30.9 2.8-11 5-21.3 6-30.9h.1v-.5c0-6.5-2.8-11.7-6-11.7-3.3 0-6 5.2-6.1 11.7z"
                        fill="url(#z)"
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
              </g>
            </svg>
          </div>
        </div>
      </Paper>
    )
  }
}

export default connect(mapStateToProps)(Demo)
