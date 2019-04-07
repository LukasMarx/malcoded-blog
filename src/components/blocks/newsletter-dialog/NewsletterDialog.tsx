import React from 'react'
import styles from './NewsletterDialog.module.css'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import newsletterHot from './../../../assets/newsletter-hot.svg'
import newsletterPeople from './../../../assets/newsletter-people.svg'
import newsletterBell from './../../../assets/newsletter-bell.svg'
import { TextField, withStyles } from '@material-ui/core'
import { defaultPrimaryColor } from '../../../theme/colors'
import Button from '../../elements/button/Button'
import { Link } from 'gatsby'
import { darkBackground, lightBackground } from '../../../theme/background'
import { connect } from 'react-redux'
import { AppState } from '../../../state/reducer'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { darkText, lightText } from '../../../theme/text'

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

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export interface NewsletterDialogProps {
  open: boolean
  classes: any
  theme?: ThemeState
  onClose?(value: { success: boolean; email?: string })
}

export interface NewsletterDialogState {
  error: boolean
  errorText: string
  email: string
}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class NewsletterDialog extends React.Component<
  NewsletterDialogProps,
  NewsletterDialogState
> {
  constructor(props: NewsletterDialogProps) {
    super(props)
    this.state = { email: '', error: false, errorText: '' }

    this.emailChange = this.emailChange.bind(this)
    this.submit = this.submit.bind(this)
    this.cancel = this.cancel.bind(this)
  }

  emailChange(evt) {
    this.setState({ email: evt.target.value, error: false })
  }
  submit() {
    if (this.state.email && this.state.email.match(emailRegex)) {
      this.setState({ error: false, errorText: '' })
      if (this.props.onClose) {
        this.props.onClose({ success: true, email: this.state.email })
      }
    } else {
      this.setState({
        error: true,
        errorText: 'Valid email address is required',
      })
    }
  }

  cancel() {
    if (this.props.onClose) {
      this.props.onClose({ success: false })
    }
  }

  handleClose() {}

  render() {
    const { classes } = this.props
    return (
      <Dialog
        open={this.props.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="lg"
        fullWidth={true}
        className={styles.dialog}
        PaperProps={{
          style: {
            backgroundColor: this.props.theme!.darkMode
              ? darkBackground.paper
              : lightBackground.paper,
          },
        }}
        style={{
          color: this.props.theme!.darkMode
            ? darkText.primary
            : lightText.primary,
        }}
      >
        <DialogContent>
          <div>
            <h2
              style={{
                marginLeft: 32,
                marginTop: 32,
                marginBottom: 64,
                fontWeight: 400,
                textAlign: 'center',
              }}
            >
              Subscribe to the newsletter
            </h2>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles.icon}>
                  <img src={newsletterHot} />
                </div>
                <div className={styles.textContainer}>
                  <span className={styles.title}>Never miss a post</span>
                  <p className={styles.decscription}>
                    Receive updates when a new post is published.
                  </p>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.icon}>
                  <img src={newsletterPeople} />
                </div>
                <div className={styles.textContainer}>
                  <span className={styles.title}>Stay in touch</span>
                  <p className={styles.decscription}>
                    Stay up to date about what is going on in the web-dev
                    community and on this site.
                  </p>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.icon}>
                  <img src={newsletterBell} />
                </div>
                <div className={styles.textContainer}>
                  <span className={styles.title}> Special offers</span>
                  <p className={styles.decscription}>
                    Get notified about special offers of our own, or our
                    partners' products. Don't worry, we won't spam your inbox!
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.container}>
              <TextField
                id="outlined-email-input"
                label="Your Email Address"
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                style={{ width: '100%' }}
                error={this.state.error}
                value={this.state.email}
                className={classes.textField}
                onChange={this.emailChange}
                helperText={this.state.errorText}
                InputLabelProps={{
                  classes: {
                    root: this.props.theme.darkMode
                      ? classes.cssLabelDark
                      : classes.cssLabel,
                    focused: this.props.theme.darkMode
                      ? classes.cssFocusedDark
                      : classes.cssFocused,
                  },
                }}
                InputProps={{
                  style: {
                    color: this.props.theme.darkMode
                      ? darkText.primary
                      : lightText.primary,
                  },
                  classes: {
                    root: this.props.theme.darkMode
                      ? classes.cssOutlinedInputDark
                      : classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: this.props.theme.darkMode
                      ? classes.notchedOutlineDark
                      : classes.notchedOutline,
                  },
                  inputMode: 'numeric',
                }}
              />
              <p className={styles.notice}>
                Yes, I want to subscribe to the free email newsletter about new
                articles, products and special offers.
              </p>

              <small className={styles.smallPrint}>
                You can change your mind at any time by clicking the unsubscribe
                link in the footer of any email you receive from us. For more
                information about our privacy practices, email performance
                mesurements, logging of the registration process and your
                rights, please take a look at our
                <Link to="/privacy" style={{ textDecoration: 'none' }}>
                  {' '}
                  Privacy Policy
                </Link>
              </small>
              <div style={{ flex: 1 }} />
              <Button
                flat
                style={{ width: '100%', marginBottom: 16 }}
                onClick={this.cancel}
              >
                No, thanks!
              </Button>
              <Button
                style={{ width: '100%', height: 72 }}
                onClick={this.submit}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </DialogContent>
        <DialogActions />
      </Dialog>
    )
  }
}

export default connect(mapStateToProps)(
  withStyles(style as any)(NewsletterDialog)
)
