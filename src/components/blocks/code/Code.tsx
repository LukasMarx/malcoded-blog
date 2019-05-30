import React, { Component } from 'react'
import styles from './Code.module.css'
import Prism from 'prismjs'
import { connect } from 'react-redux'
import { AppState } from '../../../state/reducer'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { darkBackground, lightBackground } from '../../../theme/background'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
// import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-css'

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
            style={{
              backgroundColor: this.props.theme!.darkMode
                ? this.props.theme.primaryColor.light
                : this.props.theme.primaryColor.main,
            }}
          >
            {(this.props.language == 'js' ||
              this.props.language == 'javascript' ||
              this.props.language == 'jsx') && (
              <img className={styles.icon} src="/icons/languages/js.svg" />
            )}
            {(this.props.language == 'ts' ||
              this.props.language == 'typescript' ||
              this.props.language == 'tsx') && (
              <img className={styles.icon} src="/icons/languages/ts.svg" />
            )}
            {this.props.language == 'html' && (
              <img className={styles.icon} src="/icons/languages/html.svg" />
            )}
            {this.props.language == 'css' && (
              <img className={styles.icon} src="/icons/languages/css.svg" />
            )}
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
  languages = {
    js: 'javascript',
    ts: 'typescript',
    jsx: 'jsx',
    tsx: 'tsx',
    css: 'css',
  }

  render() {
    let result
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
