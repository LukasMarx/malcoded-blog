import React from 'react'
import HeaderFooterLayout from './../layouts/HeaderFooterLayout'
import styles from './legal.module.css'
import SEO from '../components/Seo'

export interface LegalPageProps {}

export interface LegalPageState {}

class LegalPage extends React.Component<LegalPageProps, LegalPageState> {
  constructor(props: LegalPageProps) {
    super(props)
  }
  render() {
    return (
      <HeaderFooterLayout>
        <SEO title="Legal Notice" />
        <div className={styles.root}>
          <div className={styles.content}>
            <h1 style={{ fontSize: 40 }}>About this Website</h1>

            <h3>Contact</h3>

            <p>Lukas Marx</p>
            <p>Auf der Kirchwiese 2</p>
            <p>46414 Rhede, Germany</p>
            <p>Phone: +49 174 3859441</p>
            <p>E-Mail: malcoded.blog@gmail.com</p>
            <h3>Responsible for content</h3>

            <p>Lukas Marx</p>
          </div>
        </div>
      </HeaderFooterLayout>
    )
  }
}

export default LegalPage
