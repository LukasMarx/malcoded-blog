import React from 'react'
import { connect } from 'react-redux'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { AppState } from '../../../state/reducer'
import { darkText, lightText } from '../../../theme/text'

export interface NewsletterIconProps {
  theme: ThemeState
}

export interface NewsletterIconState {}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class NewsletterIcon extends React.Component<
  NewsletterIconProps,
  NewsletterIconState
> {
  constructor(props: NewsletterIconProps) {
    super(props)
  }
  render() {
    return (
      <svg viewBox="0 0 222 222" style={{ height: '100%' }}>
        <defs>
          <clipPath id="_clipPath_29GcLqCRVE1IE3rAhSMo1ZexlWw8GkSL">
            <rect width="222" height="222" />
          </clipPath>
        </defs>
        <g clip-path="url(#_clipPath_29GcLqCRVE1IE3rAhSMo1ZexlWw8GkSL)">
          <rect
            width="222"
            height="222"
            fill="rgb(33,13,68)"
            fill-opacity="0"
          />
          <g>
            <linearGradient
              id="_lgradient_12"
              x1="0.4999794276520094"
              y1="1.000067888930456"
              x2="0.4999794276520095"
              y2="0.000034398170846383636"
              gradientTransform="matrix(222.869,0,0,222,-0.434,0)"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0%"
                stop-opacity="0.25"
                stop-color="rgb(128, 128, 128)"
              />
              <stop
                offset="54%"
                stop-opacity="0.12"
                stop-color="rgb(128, 128, 128)"
              />
              <stop
                offset="100%"
                stop-opacity="0.1"
                stop-color="rgb(128, 128, 128)"
              />
            </linearGradient>
            <path
              d=" M 222.434 91.189 C 222.452 82.892 220.733 80.713 216.995 77.559 L 116.156 1.667 C 113.24 -0.541 109.216 -0.557 106.282 1.627 L 7.226 75.389 C 3.467 78.525 -0.054 82.182 -0.072 90.479 L -0.181 90.479 L -0.434 204.094 L -0.434 204.094 L -0.434 209.152 C -0.442 212.439 0.856 215.594 3.175 217.923 C 5.494 220.252 8.644 221.564 11.93 221.571 L 16.813 221.571 L 16.813 221.571 L 110.742 221.779 L 209.55 222 C 212.837 222.008 215.992 220.71 218.321 218.391 C 220.65 216.072 221.963 212.922 221.969 209.635 L 222.232 91.171 L 222.434 91.189 Z "
              fill="url(#_lgradient_12)"
            />
            <path
              d=" M 1.677 91.007 L 220.142 91.503 L 219.902 197.261 C 219.873 209.236 210.145 218.922 198.17 218.898 L 22.681 218.5 C 17.034 218.487 11.623 216.232 7.639 212.229 C 3.654 208.227 1.423 202.806 1.436 197.158 L 1.677 91.007 L 1.677 91.007 Z "
              fill={this.props.theme.primaryColor.light}
            />
            <path
              d=" M 1.681 91.002 L 1.436 201.48 C 1.416 210.847 8.99 218.459 18.357 218.486 L 202.908 218.885"
              fill="rgb(245,245,245)"
            />
            <path
              d=" M 220.159 91.488 L 219.914 201.963 C 219.888 211.331 212.276 218.905 202.908 218.885 L 18.366 218.474"
              fill="rgb(255,255,255)"
            />
            <path
              d=" M 106.26 4.622 L 8.963 76.332 C 5.271 79.381 1.814 82.937 1.796 91.005 L 220.38 91.697 C 220.398 83.629 218.709 81.511 215.031 78.444 L 115.96 4.649 C 113.084 2.51 109.149 2.499 106.26 4.622 Z "
              fill={this.props.theme.primaryColor.main}
            />
            <g opacity="0.3">
              <path
                d=" M 106.26 4.622 L 8.963 76.332 C 5.271 79.381 1.814 82.937 1.796 91.005 L 220.38 91.697 C 220.398 83.629 218.709 81.511 215.031 78.444 L 115.96 4.649 C 113.084 2.51 109.149 2.499 106.26 4.622 Z "
                fill="rgb(0,0,0)"
              />
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export default connect(mapStateToProps)(NewsletterIcon)
