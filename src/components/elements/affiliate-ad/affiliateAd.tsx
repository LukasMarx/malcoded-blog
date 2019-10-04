import React from 'react'
import styles from './AffiliateAd.module.css'

export interface AffiliateAdProps {
  variation: string
}

export interface AffiliateAdState {}

class AffiliateAd extends React.Component<AffiliateAdProps, AffiliateAdState> {
  private variations = {
    'digital-ocean': {
      src: '/affiliate/cloudways/digital-ocean.jpg',
      href:
        'https://www.cloudways.com/en/digital-ocean-cloud-hosting.php/?id=491611',
      width: 728,
      height: 90,
    },
  }

  constructor(props: AffiliateAdProps) {
    super(props)
  }

  render() {
    var variation = this.variations[this.props.variation]
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
          <span className={styles.disclaimer}>
            This is an affiliate link. We may receive a commission for purchases
            made through this link.
          </span>
        </div>
      )
    }
    return null
  }
}

export default AffiliateAd
