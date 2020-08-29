import Head from 'next/head'

import Menu from '../menu/menu'


import styles from './layout.module.scss'
import utilStyles from '../../styles/utils.module.scss'

export default function Layout({ children }) {
    return (<div className={styles.container}>
        <Menu></Menu>
        {children}
    </div>)
}