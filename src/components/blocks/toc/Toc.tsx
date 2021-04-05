import React from 'react'
import * as styles from './Toc.module.css'
import { navigate } from '@reach/router'

import { Toc as TocType } from './../../../models/Toc'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import { AppState } from '../../../state/reducer'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { darkText, lightText } from '../../../theme/text'

export interface TocProps {
  toc: TocType
  theme?: ThemeState
}

export interface TocState {}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class Toc extends React.Component<TocProps, TocState> {
  constructor(props: TocProps) {
    super(props)
  }

  render() {
    return (
      <div className={styles.root}>
        <div
          className={styles.wrapper}
          style={{
            borderColor: this.props.theme.darkMode
              ? this.props.theme.primaryColor.light
              : this.props.theme.primaryColor.main,
          }}
        >
          {this.props.toc.items.map((item) => (
            <div
              key={item.url}
              className={styles.item}
              onClick={() => navigate(item.url)}
              style={{
                color: this.props.theme.darkMode
                  ? darkText.secondary
                  : lightText.secondary,
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Toc)
