import React from 'react'
import Button from '../button/Button'
import { Token } from '../../../models/Token'
import { lightText } from '../../../theme/text'

export interface GoogleSingInButtonProps {
  onSignedIn?(token: Token)
}

export interface GoogleSingInButtonState {}

class GoogleSingInButton extends React.Component<
  GoogleSingInButtonProps,
  GoogleSingInButtonState
> {
  constructor(props: GoogleSingInButtonProps) {
    super(props)

    this.singIn = this.singIn.bind(this)
    this.onTokenReceived = this.onTokenReceived.bind(this)
  }

  singIn() {
    const windowRef = window.open(
      `${process.env.GATSBY_BASE_URL ||
        'http://localhost:3000'}/v1/api/auth/google`,
      'Sign in',
      'width=600,height=600'
    )
    window.addEventListener('message', this.onTokenReceived)
  }

  onTokenReceived({ data, origin }) {
    if (
      origin !== (process.env.GATSBY_BASE_URL || 'http://localhost:3000') ||
      !data
    )
      return
    if (!data.sender || data.sender !== 'malcoded') return
    if (this.props.onSignedIn) {
      this.props.onSignedIn(data.token)
    }
    window.removeEventListener('message', this.onTokenReceived)
  }

  render() {
    return (
      <Button
        onClick={this.singIn}
        style={{ backgroundColor: 'white', color: lightText.secondary }}
      >
        <img
          src="/icons/google-logo.png"
          style={{ height: 18, marginRight: 24 }}
        />
        <span style={{ fontSize: 14 }}>Sign in With Google</span>
      </Button>
    )
  }
}

export default GoogleSingInButton
