import React from 'react'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { AppState } from '../../../state/reducer'
import {
  angularColor,
  reactColor,
  vueColor,
  defaultPrimaryColor,
  nodejsColor,
} from '../../../theme/colors'

export interface ChipProps {
  label: string
}

export interface ChipState {}

class Chip extends React.Component<ChipProps, ChipState> {
  constructor(props: ChipProps) {
    super(props)
  }

  backgroundColor() {
    switch (this.props.label) {
      case 'angular': {
        return angularColor.light
      }
      case 'react': {
        return reactColor.light
      }
      case 'vue': {
        return vueColor.light
      }
      case 'nodejs': {
        return nodejsColor.light
      }
      default:
        return defaultPrimaryColor.light
    }
  }

  color() {
    switch (this.props.label) {
      case 'angular': {
        return angularColor.dark
      }
      case 'react': {
        return reactColor.dark
      }
      case 'vue': {
        return vueColor.dark
      }
      case 'nodejs': {
        return nodejsColor.dark
      }
      default:
        return defaultPrimaryColor.dark
    }
  }

  mapping = {
    angular: 'Angular',
    react: 'React',
    vue: 'Vue',
    nodejs: 'Node.js',
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.backgroundColor(),
          color: this.color(),
          borderRadius: '10px',
          padding: '1px 16px 1px 16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '13px',
          height: 21,

          width: 'fit-content',
          marginLeft: 8,
        }}
      >
        <small color="inherit">
          {this.mapping[this.props.label] || this.props.label}
        </small>
      </div>
    )
  }
}

export default Chip
