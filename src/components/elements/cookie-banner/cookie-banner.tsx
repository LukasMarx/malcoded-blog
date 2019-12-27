import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { AppState } from '../../../state/reducer'
import { defaultPrimaryColor } from '../../../theme/colors'
import Button from '../button/Button'
import { Link } from 'gatsby'

const style = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {},

  cssLabel: {
    '&$cssFocused': {
      color: defaultPrimaryColor.main,
    },
  },

  cssLabelDark: {
    '&$cssFocused': {
      color: defaultPrimaryColor.light,
    },
    color: 'white !important',
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${defaultPrimaryColor.main} !important`,
    },
  },
  cssOutlinedInputDark: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${defaultPrimaryColor.light} !important`,
    },
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: '1px',
  },

  notchedOutlineDark: {
    borderWidth: '1px',
    borderColor: 'white !important',
  },
})

export interface CookieBannerProps {
  open: boolean
  classes: any
  theme?: ThemeState
  onSubmit?(email?: string)
  onClose?()
}

export interface CookieBannerState {}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class CookieBanner extends React.Component<
  CookieBannerProps,
  CookieBannerState
> {
  constructor(props: CookieBannerProps) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClose() {
    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          disableBackdropClick
        >
          <DialogTitle id="alert-dialog-title">{'We use cookies'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              We use cookies for security and advertisment reasons. Visit our
              <Link to="/privacy"> privacy policy</Link> for more details.
            </DialogContentText>
          </DialogContent>
          <div style={{ padding: 32 }}>
            <Button
              style={{
                width: '100%',
                height: 72,
              }}
              onClick={this.handleSubmit}
            >
              Accept Cookies
            </Button>
            <Button
              flat
              style={{
                width: '100%',
                height: 72,
              }}
              onClick={this.handleClose}
            >
              Decline
            </Button>
          </div>
        </Dialog>
      </div>
    )
  }
}

export default connect(mapStateToProps)(withStyles(style as any)(CookieBanner))
