import React from 'react'
import styles from './AffiliateAd.module.css'
import { connect } from 'react-redux'
import { AppState } from '../../../state/reducer'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { darkText, lightText } from '../../../theme/text'
import Countdown, { zeroPad } from 'react-countdown-now'

export interface AffiliateAdProps {
  tag: string
  mode?: string
  theme?: ThemeState
  disableViewTracking?: boolean
}

export interface AffiliateAdState {
  didSendAnalyticsView: boolean
  didSendAnalyticsClick: boolean
}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class AffiliateAd extends React.Component<AffiliateAdProps, AffiliateAdState> {
  private variations = {
    'digital-ocean': {
      name: 'digital-ocean',
      src: '/affiliate/cloudways/digital-ocean.jpg',
      href: 'https://www.cloudways.com/en/?id=491611',
      width: 728,
      height: 90,
    },

    'utlimate-angular': {
      name: 'ultimate-angular',
      src: '/affiliate/ultimate/ultimate-angular-banner.svg',
      href: 'https://ultimatecourses.com/courses/angular',
    },

    'utlimate-angular-special-offer': {
      name: 'ultimate-angular-black-friday',
      src: '/affiliate/ultimate/ultimate-angular-banner-bf.svg',
      href: 'https://ultimatecourses.com/courses/angular',
      timer: {
        end: new Date('2019-11-30T08:00:00z'),
        color: 'white',
      },
    },

    'utlimate-angular-side': {
      name: 'ultimate-angular-side',
      src: '/affiliate/ultimate/ultimate-angular-sidebar.svg',
      href: 'https://ultimatecourses.com/courses/angular',
    },

    'wb-react-for-beginners': {
      name: 'wb-react-for-beginners',
      src: '/affiliate/wesbos/react-for-beginners.svg',
      href: 'https://ReactForBeginners.com/friend/MALCODED',
      style: {
        height: 'auto',
        boxShadow:
          '0 15px 30px 0 rgba(0,0,0,.11), 0 5px 15px 0 rgba(0,0,0,.08)',
      },
    },

    'wb-react-for-beginners-side': {
      name: 'wb-react-for-beginners',
      src: '/affiliate/wesbos/react-for-beginners-sidebar.svg',
      href: 'https://ReactForBeginners.com/friend/MALCODED',
      style: {
        height: 'auto',
        boxShadow:
          '0 15px 30px 0 rgba(0,0,0,.11), 0 5px 15px 0 rgba(0,0,0,.08)',
      },
    },
  }

  private tags = {
    angular: this.variations['utlimate-angular-special-offer'],
    react: this.variations['wb-react-for-beginners'],
    vue: this.variations['digital-ocean'],
    nodejs: this.variations['digital-ocean'],
  }

  private sideTags = {
    angular: this.variations['utlimate-angular-side'],
    react: this.variations['wb-react-for-beginners-side'],
    vue: this.variations['wb-react-for-beginners-side'],
    nodejs: this.variations['wb-react-for-beginners-side'],
  }

  private domRef: React.RefObject<HTMLDivElement>

  private observer: IntersectionObserver

  constructor(props: AffiliateAdProps) {
    super(props)
    this.state = { didSendAnalyticsView: false, didSendAnalyticsClick: false }
    this.domRef = React.createRef()
    this.onIntersect = this.onIntersect.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(this.onIntersect)
    this.observer.observe(this.domRef.current)
  }

  componentWillUnmount() {
    this.observer.unobserve(this.domRef.current)
    this.observer.disconnect()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.tag !== this.props.tag
  }

  onIntersect(entries: any[], observer: IntersectionObserver) {
    if (entries.some(e => e.isIntersecting)) {
      const socket = (window as any).socket
      if (socket) {
        try {
          if (
            !this.state.didSendAnalyticsView &&
            !this.props.disableViewTracking
          ) {
            socket.send(
              JSON.stringify({
                event: 'event',
                data: {
                  type: 'affiliateView',
                  subType: this.resolve().name,
                  pageLocation: location.pathname,
                },
              })
            )
            this.setState({ didSendAnalyticsView: true })
          }
        } catch (e) {
          // doesn't matter, its just analytics
        }
      }
    }
  }

  resolve() {
    const mode = this.props.mode
    if (mode && mode === 'side') {
      return this.sideTags[this.props.tag || 'angular']
    } else {
      return this.tags[this.props.tag || 'angular']
    }
  }

  onClick() {
    const socket = (window as any).socket
    if (socket) {
      try {
        if (!this.state.didSendAnalyticsClick) {
          socket.send(
            JSON.stringify({
              event: 'event',
              data: {
                type: 'affiliateClick',
                subType: this.tags[this.props.tag || 'angular'].name,
                pageLocation: location.pathname,
              },
            })
          )
          this.setState({ didSendAnalyticsClick: true })
        }
      } catch (e) {
        // doesn't matter, its just analytics
      }
    }
  }

  render() {
    const timerRenderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <></>
      } else {
        // Render a countdown
        return (
          <div className={styles.timerWrapper}>
            <div className={styles.timerBox}>
              <span>{zeroPad(days)}</span>
              <p className={styles.timerLabel}>DAYS</p>
            </div>
            <span>:</span>
            <div className={styles.timerBox}>
              <span>{zeroPad(hours)}</span>
              <p className={styles.timerLabel}>HOURS</p>
            </div>
            <span>:</span>
            <div className={styles.timerBox}>
              <span>{zeroPad(minutes)}</span>
              <p className={styles.timerLabel}>MINS</p>
            </div>
            <span>:</span>
            <div className={styles.timerBox}>
              <span>{zeroPad(seconds)}</span>
              <p className={styles.timerLabel}>SECS</p>
            </div>
          </div>
        )
      }
    }

    var variation = this.resolve()
    if (variation) {
      return (
        <div className={styles.box} ref={this.domRef} onClick={this.onClick}>
          <div style={{ position: 'relative' }}>
            <a href={variation.href} target="_top">
              <img
                src={variation.src}
                max-width={variation.width}
                max-height={variation.height}
                style={Object.assign(
                  {
                    maxWidth:
                      this.props.mode === 'side' ? '100%' : variation.width,
                    maxHeight: variation.height,
                    height: this.props.mode === 'side' ? '100%' : undefined,
                    width: this.props.mode === 'side' ? undefined : '100%',
                  },
                  variation.style || {}
                )}
              ></img>
              {variation.timer && (
                <div
                  className={styles.timer}
                  style={{ color: variation.timer.color || lightText.primary }}
                >
                  <div className={styles.wrapper}>
                    <Countdown
                      date={variation.timer.end}
                      renderer={timerRenderer}
                    />
                  </div>
                </div>
              )}
            </a>
          </div>
          <span
            className={styles.disclaimer}
            style={{
              color: this.props.theme.darkMode
                ? darkText.secondary
                : lightText.secondary,
            }}
          >
            This is an affiliate link. We may receive a commission for purchases
            made through this link.
          </span>
        </div>
      )
    }
    return null
  }
}

export default connect(mapStateToProps)(AffiliateAd)
