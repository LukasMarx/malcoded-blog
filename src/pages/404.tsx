import React from 'react'

import SEO from '../components/Seo'
import HeaderFooterLayout from '../layouts/HeaderFooterLayout'
import * as styles from './404.module.css'
import meteorSwarm from './../assets/malcoded-meteor-swarm.svg'

class NotFoundPage extends React.Component {
  render() {
    return (
      <HeaderFooterLayout>
        <div className={styles.root}>
          <div className={styles.content}>
            <img className={styles.image} src={meteorSwarm} />
            <SEO title="404: Not Found" />
            <h1>Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist...</p>
          </div>
        </div>
      </HeaderFooterLayout>
    )
  }
}

export default NotFoundPage
