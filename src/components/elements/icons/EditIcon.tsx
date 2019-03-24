import React from 'react'
import { connect } from 'react-redux'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { AppState } from '../../../state/reducer'
import { darkText, lightText } from '../../../theme/text'

export interface EditIconProps {
  theme: ThemeState
}

export interface EditIconState {}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class EditIcon extends React.Component<EditIconProps, EditIconState> {
  constructor(props: EditIconProps) {
    super(props)
  }
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill={
            this.props.theme.darkMode ? darkText.secondary : lightText.secondary
          }
          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    )
  }
}

export default connect(mapStateToProps)(EditIcon)
