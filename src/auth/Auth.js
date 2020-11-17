import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, withRouter } from 'react-router-dom'
import { AUTH_ROUTES } from 'constants/routes'
import { renderRoutes } from 'functions'
import Layout from 'layouts'
import App from 'App'

const Auth = ({ history }) => {
  const [auth, setAuth] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('token')
    const expiryDate = localStorage.getItem('expiryDate')
    if (!token || !expiryDate) {
      return
    }
    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler()
      return
    }

    const userId = localStorage.getItem('userId')
    const firstName = localStorage.getItem('firstName')
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime()
    setAuth({ isAuth: true, token, userId, firstName })
    setAutoLogout(remainingMilliseconds)
  }, [])

  const logoutHandler = () => {
    history.replace('/')
    setAuth({ isAuth: false, token: null, userId: null, firstName: null })
    localStorage.removeItem('token')
    localStorage.removeItem('expiryDate')
    localStorage.removeItem('userId')
  }

  const setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      logoutHandler()
    }, milliseconds)
  }

  const routes = renderRoutes(AUTH_ROUTES)

  const renderHome = () => {
    if (auth.isAuth) {
      return <App isAuth={auth.isAuth} />
    } else {
      return (
        <BrowserRouter>
          <Layout isAuth={auth.isAuth}>
            <Switch>{routes}</Switch>
          </Layout>
        </BrowserRouter>
      )
    }
  }

  return renderHome()
}

export default withRouter(Auth)
