import React, { Component, CSSProperties } from 'react'
import { AppState } from '../../../state/reducer'
import { connect } from 'react-redux'
import styles from './Paper.module.css'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { darkBackground, lightBackground } from '../../../theme/background'

export interface PaperProps {
  theme?: ThemeState
  flat?: boolean
  fill?: boolean
  onClick?(): void
  style?: CSSProperties
}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class Paper extends Component<PaperProps> {
  constructor(props) {
    super(props)
    this.stlyes = this.stlyes.bind(this)
  }

  stlyes(): CSSProperties {
    if (this.props.theme.darkMode) {
      return {
        backgroundColor: darkBackground.paper,
      }
    } else {
      return {
        backgroundColor: lightBackground.paper,
      }
    }
  }

  render() {
    let style = this.stlyes()

    if (this.props.style) {
      style = Object.assign(style, this.props.style)
    }
    return (
      <div className={styles.root} style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Paper)
