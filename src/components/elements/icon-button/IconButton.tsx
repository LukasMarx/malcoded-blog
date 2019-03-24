import React, { Component, CSSProperties, RefForwardingComponent } from 'react'
import { AppState } from '../../../state/reducer'
import { connect } from 'react-redux'
import styles from './IconButton.module.css'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { darkBackground, lightBackground } from '../../../theme/background'
import { lightText, darkText } from '../../../theme/text'

export interface IconButtonProps {
  theme?: ThemeState
  onClick?(): void
}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class IconButton extends Component<
  IconButtonProps & React.HTMLProps<HTMLButtonElement>
> {
  constructor(props) {
    super(props)
    this.onClicked = this.onClicked.bind(this)
  }

  onClicked() {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    return (
      <button
        id={this.props.id}
        className={styles.button}
        onClick={this.onClicked}
      >
        {this.props.children}
      </button>
    )
  }
}

export default connect(mapStateToProps)(IconButton)
