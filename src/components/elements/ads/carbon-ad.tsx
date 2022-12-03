import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../state/reducer'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { darkText, lightText } from '../../../theme/text'
import Countdown, { zeroPad } from 'react-countdown-now'
import './carbon-ad.css'

export interface CarbonAdProps {
  theme?: ThemeState
}

export interface CarbonAdState {}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class CarbonAd extends React.Component<CarbonAdProps, CarbonAdState> {
  private domRef: React.RefObject<HTMLDivElement>

  constructor(props: CarbonAdProps) {
    super(props)
    this.domRef = React.createRef()
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return false
  // }

  componentDidMount() {
    // const script = document.createElement('script')

    // script.src =
    //   '//cdn.carbonads.com/carbon.js?serve=CE7DEKQJ&placement=malcodedcom'
    // script.async = true
    // script.type = 'text/javascript'
    // script.id = '_carbonads_js'

    // this.domRef.current.appendChild(script)
  }

  render() {
    return <div ref={this.domRef}></div>
  }
}

export default connect(mapStateToProps)(CarbonAd)
