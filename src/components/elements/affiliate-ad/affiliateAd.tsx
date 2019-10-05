import React from 'react'
import styles from './AffiliateAd.module.css'
import { connect } from 'react-redux'
import { AppState } from '../../../state/reducer'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { darkText, lightText } from '../../../theme/text'

export interface AffiliateAdProps {
  tag: string
  theme?: ThemeState
}

export interface AffiliateAdState {}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class AffiliateAd extends React.Component<AffiliateAdProps, AffiliateAdState> {
  private variations = {
    'digital-ocean': {
      src: '/affiliate/cloudways/digital-ocean.jpg',
      href: 'https://www.cloudways.com/en/?id=491611',
      width: 728,
      height: 90,
    },
  }

  private tags = {
    angular: this.variations['digital-ocean'],
    react: this.variations['digital-ocean'],
    vue: this.variations['digital-ocean'],
    nodejs: this.variations['digital-ocean'],
  }

  constructor(props: AffiliateAdProps) {
    super(props)
  }

  render() {
    var variation = this.tags[this.props.tag || 'angular']
    if (variation) {
      return (
        <div className={styles.box}>
          <a href={variation.href} target="_top">
            <img
              src={variation.src}
              max-width={variation.width}
              max-height={variation.height}
              style={{
                width: '100%',
                maxWidth: variation.width,
                maxHeight: variation.height,
              }}
            ></img>
          </a>
          <br></br>
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
