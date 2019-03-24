import React from 'react'
import styles from './Sidebar.module.css'

export interface SidebarProps {}

export interface SidebarState {}

class Sidebar extends React.Component<SidebarProps, SidebarState> {
  constructor(props: SidebarProps) {
    super(props)
  }
  render() {
    return <div className={styles.root}>{this.props.children}</div>
  }
}

export default Sidebar
