import React from 'react'
import styles from './about.module.css'
import HeaderFooterLayout from '../layouts/HeaderFooterLayout'
import Button from '../components/elements/button/Button'
import { connect } from 'react-redux'
import { AppState } from '../state/reducer'
import { ThemeState } from '../state/reducers/theme.reducer'
import rocket from './../assets/malcoded-rocket.svg'
import meteorSwarm from './../assets/malcoded-meteor-swarm.svg'
import astronaut from './../assets/malcoded-astronaut.svg'
import react from './../assets/react.svg'
import angular from './../assets/angular.svg'
import vue from './../assets/vue.svg'
import NewsletterDialog from '../components/blocks/newsletter-dialog/NewsletterDialog'
import { subscribeNewsletter } from '../state/actions/newsletter.actions'

export interface AboutPageProps {
  theme: ThemeState
  subscribeToNewsletter(email: string): void
}

export interface AboutPageState {
  isNewsletterDialogOpen: boolean
}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    subscribeToNewsletter: (email: string) =>
      dispatch(subscribeNewsletter(email)),
  }
}

class AboutPage extends React.Component<AboutPageProps, AboutPageState> {
  constructor(props: AboutPageProps) {
    super(props)
    this.state = { isNewsletterDialogOpen: false }

    this.onNewsletterDialogClosed = this.onNewsletterDialogClosed.bind(this)
  }

  onNewsletterDialogClosed(value) {
    if (value.success) {
      if (value.email) {
        this.props.subscribeToNewsletter(value.email)
      }
    } else {
    }
    this.setState({ isNewsletterDialogOpen: false })
  }

  render() {
    return (
      <HeaderFooterLayout>
        <div className={styles.root}>
          <div
            className={styles.hero}
            style={{
              backgroundImage: `url(${rocket})`,
              height: '75vh',
              width: '100%',
            }}
          >
            <div className={styles.heroText}>
              <h2>Want to develop awesome web applications?</h2>

              <h3
                style={{
                  color: this.props.theme.darkMode
                    ? this.props.theme.primaryColor.light
                    : this.props.theme.primaryColor.main,
                }}
              >
                <h3>You have come the right place!</h3>
              </h3>
              <p style={{ marginRight: 32 }}>
                With more than 40 comprehensive guides and tutorials about
                angular, react and vue there is an article for every skill
                level. Take your programming skills to the next level!
              </p>
              <Button
                onClick={() => this.setState({ isNewsletterDialogOpen: true })}
              >
                Join the newsletter
              </Button>
            </div>
          </div>
          <div
            className={styles.logoGalleryWrapper}
            style={{
              width: '100%',
            }}
          >
            <div className={styles.logoGallery} style={{}}>
              <img src={react} className={styles.logo} />
              <img src={angular} className={styles.logo} />
              <img src={vue} className={styles.logo} style={{ padding: 16 }} />
            </div>
          </div>
          <div
            className={styles.heroAbout}
            style={{
              width: '100%',
            }}
          >
            <div className={styles.heroAboutImage}>
              <img style={{ width: '100%' }} src={meteorSwarm} />
            </div>
            <div className={styles.heroAboutText}>
              <h2>What malcoded is all about</h2>

              <h3
                style={{
                  color: this.props.theme.darkMode
                    ? this.props.theme.primaryColor.light
                    : this.props.theme.primaryColor.main,
                }}
              >
                Detailed tutorials that contain everything you need to get
                started!
              </h3>
              <p>
                My goal is to provide rich and detailed tutorials, that actually
                help you to succeed. That is why all of my articles provide
                complete examples, that result in an running application! In
                this blog I share all the mistakes & discoveries I've made, so
                you can profit from my learnings, too!
              </p>
            </div>
          </div>
          <div
            className={styles.heroAboutLukas}
            style={{
              width: '100%',
            }}
          >
            <div className={styles.heroAboutLukasImage}>
              <img style={{ width: '100%' }} src={astronaut} />
            </div>
            <div className={styles.heroAboutLukasText}>
              <h2>About Lukas Marx</h2>

              <h3
                style={{
                  color: this.props.theme.darkMode
                    ? this.props.theme.primaryColor.light
                    : this.props.theme.primaryColor.main,
                }}
              >
                Software Engineer
              </h3>
              <p>
                I am a computer science (masters) student living in Germany.
                I've started writing this blog in 2016, to document my
                coding-journey for myself and others. Entering the world of
                frontend-development with vanilla JavaScript, I quickly fell in
                love with single-page-applciation-frameworks, like Angular.
                Since back then, I am continously exploring the depths of
                angular, sharing my most exiting findings here with you!
              </p>
            </div>
          </div>
        </div>
        <NewsletterDialog
          open={this.state.isNewsletterDialogOpen}
          onClose={this.onNewsletterDialogClosed}
        />
      </HeaderFooterLayout>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage)
