import React, { useEffect } from 'react';
import Header from './Header';
import Links from './Links'
import styles from "../../styles/Layout.module.css"
import BackgroundEffect from './BackgroundEffect';

const Layout = ({children}) => {
  useEffect(() => {
    console.log('layout loaded')
  })


  return (
    <>
        <BackgroundEffect/>
        <Header/>
        <Links/>
        {children}
    </>
  )
}

export default Layout