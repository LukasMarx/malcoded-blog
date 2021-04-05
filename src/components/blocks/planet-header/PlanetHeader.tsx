import React from 'react'
import * as styles from './PlanetHeader.module.css'
import { AppState } from '../../../state/reducer'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { connect } from 'react-redux'
import { headerColor, defaultPrimaryColor } from '../../../theme/colors'
import { darkText, lightText } from '../../../theme/text'
import { Link } from 'gatsby'
import { ThemeColor } from '../../../models/Theme'

export interface PlanetHeaderProps {
  image: string
  title: string
  theme: ThemeState
  linkColor: ThemeColor
  linkTo: string
}

export interface PlanetHeaderState {}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class PlanetHeader extends React.Component<
  PlanetHeaderProps,
  PlanetHeaderState
> {
  constructor(props: PlanetHeaderProps) {
    super(props)
  }
  render() {
    const linkColor = this.props.linkColor || defaultPrimaryColor

    return (
      <div className={styles.root}>
        <div
          className={styles.contentWrapper}
          style={{
            backgroundColor: this.props.theme.darkMode
              ? headerColor.main
              : headerColor.dark,
            color: this.props.theme.darkMode
              ? darkText.primary
              : lightText.primary,
          }}
        >
          <div className={styles.content}>
            <img src={this.props.image} className={styles.image} />
            <h2 style={{ margin: 0 }}>
              {this.props.title}{' '}
              <Link
                className={styles.link}
                to={this.props.linkTo}
                style={{
                  color: this.props.theme.darkMode
                    ? linkColor.light
                    : linkColor.main,
                }}
              >
                more...
              </Link>
            </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(PlanetHeader)
