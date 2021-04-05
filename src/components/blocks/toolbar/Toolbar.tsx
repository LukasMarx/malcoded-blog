import React, { Component } from 'react'
import * as styles from './Toolbar.module.css'
import { connect } from 'react-redux'
import { AppState } from '../../../state/reducer'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { darkBackground, lightBackground } from '../../../theme/background'
import { darkText, lightText } from '../../../theme/text'
import Button from '../../elements/button/Button'
import { toogleDarkMode } from '../../../state/actions/theme.actions'
import { Link } from 'gatsby'
import Logo from '../../Logo'

export interface ToolbarProps {
  theme: ThemeState
  toggleDarkMode(): void
}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { toggleDarkMode: () => dispatch(toogleDarkMode()) }
}

class Toolbar extends Component<ToolbarProps> {
  constructor(props) {
    super(props)
    this.stlyes = this.stlyes.bind(this)
  }

  stlyes() {
    if (this.props.theme.darkMode) {
      return {
        backgroundColor: darkBackground.paper,
        color: darkText.primary,
      }
    } else {
      return {
        backgroundColor: lightBackground.paper,
        color: lightText.primary,
      }
    }
  }

  render() {
    return (
      <div className={styles.root} style={this.stlyes()}>
        <Link
          to="/"
          id={styles.logo}
          style={{ textDecoration: 'none', margin: 6, marginLeft: 0 }}
        >
          <Logo style={{ height: '100%' }}>malcoded.com</Logo>
        </Link>

        <Link to="/" id={styles.home} style={{ textDecoration: 'none' }}>
          <Button flat fill>
            Home
          </Button>
        </Link>
        <Link to="/about" id={styles.about} style={{ textDecoration: 'none' }}>
          <Button flat fill>
            About
          </Button>
        </Link>
        <Button
          flat
          fill
          id={styles.darkMode}
          onClick={this.props.toggleDarkMode}
        >
          Dark Mode
        </Button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
