import React from 'react'
import styled from 'styled-components'

import { Outlet, useNavigation } from 'react-router-dom'
import NavBar from '../components/NavBar'
const HomeLayout = () => {
  var navigator = useNavigation()
  var isPageLoading = navigator.state === 'loading'
  return (
    <>
      <NavBar />
      <div className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </div>
    </>
  )
}

export default HomeLayout
