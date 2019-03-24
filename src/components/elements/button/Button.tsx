import React, { Component, CSSProperties, RefForwardingComponent } from 'react'
import { AppState } from '../../../state/reducer'
import { connect } from 'react-redux'
import styles from './Button.module.css'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { darkBackground, lightBackground } from '../../../theme/background'
import { ThemeColor } from '../../../models/Theme'

export interface ButtonProps {
  theme?: ThemeState
  flat?: boolean
  fill?: boolean
  bgColor?: ThemeColor
  onClick?(): void
}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class Button extends Component<
  ButtonProps & React.HTMLProps<HTMLButtonElement>
> {
  constructor(props) {
    super(props)
    this.stlyes = this.stlyes.bind(this)
    this.onClicked = this.onClicked.bind(this)
  }

  onClicked() {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  stlyes(): CSSProperties {
    if (this.props.theme.darkMode) {
      if (this.props.flat) {
        return {
          backgroundColor: darkBackground.paper,
          color: this.props.theme.primaryColor.light,
          boxShadow: 'none',
        }
      } else {
        return {
          backgroundColor: this.props.bgColor
            ? this.props.bgColor.light
            : this.props.theme.primaryColor.light,
          color: this.props.theme.primaryColor.contrast,
        }
      }
    } else {
      if (this.props.flat) {
        return {
          backgroundColor: lightBackground.paper,
          color: this.props.theme.primaryColor.main,
          boxShadow: 'none',
        }
      } else {
        return {
          backgroundColor: this.props.bgColor
            ? this.props.bgColor.main
            : this.props.theme.primaryColor.main,
          color: this.props.theme.primaryColor.contrast,
        }
      }
    }
  }

  render() {
    let style = this.stlyes()

    if (this.props.fill) {
      style.width = '100%'
      style.height = '100%'
    }
    if (this.props.style) {
      style = Object.assign(style, this.props.style)
    }

    return (
      <button
        id={this.props.id}
        className={styles.button}
        style={style}
        onClick={this.onClicked}
      >
        {this.props.children}
      </button>
    )
  }
}

export default connect(mapStateToProps)(Button)
