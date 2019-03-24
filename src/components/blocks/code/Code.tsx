import React, { Component } from 'react'
import styles from './Code.module.css'
import Prism from 'prismjs'
import { connect } from 'react-redux'
import { AppState } from '../../../state/reducer'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { darkBackground, lightBackground } from '../../../theme/background'

export interface CodeProps {
  codeString: string
  title: string
  language: string
  theme?: ThemeState
}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class Code extends Component<CodeProps> {
  renderBar() {
    if (this.props.title) {
      return (
        <div className={`${styles.bar} `}>
          <div
            className={styles.iconWrapper}
            style={{ backgroundColor: this.props.theme.primaryColor.main }}
          >
            <img className={styles.icon} src="/icons/languages/js.svg" />
          </div>
          <span>{this.props.title}</span>
        </div>
      )
    } else {
      return
    }
  }

  escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }

  render() {
    let result
    if (this.props.language && !Prism.languages[this.props.language]) {
      try {
        require(`prismjs/components/prism-${this.props.language}.js`)
      } catch (e) {
        // Language wasn't loaded so let's bail.
        console.error(e)
      }
    }
    if (Prism.languages[this.props.language]) {
      result = Prism.highlight(
        this.props.codeString,
        Prism.languages[this.props.language]
      )
    } else {
      result = this.escapeHtml(this.props.codeString)
    }
    return (
      <div
        className={`${styles.root}  ${
          this.props.theme.darkMode ? '' : 'theme--light'
        }`}
        style={{
          backgroundColor: this.props.theme.darkMode
            ? darkBackground.paper
            : lightBackground.paper,
        }}
      >
        {this.renderBar()}
        <pre
          className={styles.pre}
          dangerouslySetInnerHTML={{ __html: result }}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps)(Code)
