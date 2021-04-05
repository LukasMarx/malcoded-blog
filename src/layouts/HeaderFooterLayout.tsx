import React, { CSSProperties } from 'react'
import * as styles from './HeaderFooterLayout.module.css'
import Toolbar from '../components/blocks/toolbar/Toolbar'
import { ThemeState } from '../state/reducers/theme.reducer'
import { connect } from 'react-redux'
import { AppState } from '../state/reducer'
import { darkBackground, lightBackground } from '../theme/background'
import { darkText, lightText } from '../theme/text'
import Button from '../components/elements/button/Button'
import { Link } from '@reach/router'
import Helmet from 'react-helmet'

export interface HeaderFooterLayoutProps {
  theme: ThemeState
}

export interface HeaderFooterLayoutState {}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class HeaderFooterLayout extends React.Component<
  HeaderFooterLayoutProps,
  HeaderFooterLayoutState
> {
  styles(): CSSProperties {
    if (this.props.theme.darkMode) {
      return {
        backgroundColor: darkBackground.default,
        color: darkText.primary,
      }
    } else {
      return {
        backgroundColor: lightBackground.default,
        color: lightText.primary,
      }
    }
  }

  footerStyles(): CSSProperties {
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
      <div className={styles.root} style={this.styles()}>
        <Toolbar />

        <div className={styles.content}>{this.props.children}</div>
        <footer className={styles.footer} style={this.footerStyles()}>
          <Link to="/" id={styles.home} style={{ textDecoration: 'none' }}>
            <Button flat fill>
              Home
            </Button>
          </Link>
          <Link
            to="/about"
            id={styles.about}
            style={{ textDecoration: 'none' }}
          >
            <Button flat fill>
              About
            </Button>
          </Link>
          <Link
            to="/privacy"
            id={styles.privacy}
            style={{ textDecoration: 'none' }}
          >
            <Button flat fill>
              Privacy
            </Button>
          </Link>
          <Link
            to="/legal"
            id={styles.legal}
            style={{ textDecoration: 'none' }}
          >
            <Button flat fill>
              Legal Notice
            </Button>
          </Link>
        </footer>
      </div>
    )
  }
}

export default connect(mapStateToProps)(HeaderFooterLayout)
