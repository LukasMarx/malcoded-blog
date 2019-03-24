import React from 'react'
import { connect } from 'react-redux'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { AppState } from '../../../state/reducer'
import { darkText, lightText } from '../../../theme/text'

export interface DeleteIconProps {
  theme: ThemeState
}

export interface DeleteIconState {}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class DeleteIcon extends React.Component<DeleteIconProps, DeleteIconState> {
  constructor(props: DeleteIconProps) {
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
          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    )
  }
}

export default connect(mapStateToProps)(DeleteIcon)
