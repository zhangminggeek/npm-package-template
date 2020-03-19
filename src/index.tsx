import React, { Component } from 'react'
import styles from './style/style.module.less'

interface HeaderProps {}

interface HeaderState {}

export class Header extends Component<HeaderProps, HeaderState> {
  render() {
    return <div className={styles.gHeader}>header</div>
  }
}

export default Header
