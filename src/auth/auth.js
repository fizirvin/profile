import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import { AUTH_ROUTES } from 'constants/routes'
import { renderRoutes } from 'functions'
import Layout from 'layouts'
import App from 'App'
import ConnectLogin from './connectLogin'

const Auth = ({ history }) => {
  const [auth, setAuth] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('token')
    const expiryDate = localStorage.getItem('expiryDate')
    if (!token || !expiryDate) {
      return
    }
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler()
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

  const setAuthHandler = ({ token, userId, firstName }) => {
    setAuth({ isAuth: true, token, userId, firstName })
    localStorage.setItem('token', token)
    localStorage.setItem('userId', userId)
    localStorage.setItem('firstName', firstName)
    const remainingMilliseconds = 60 * 60 * 1000
    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds)
    localStorage.setItem('expiryDate', expiryDate.toISOString())
    setAutoLogout(remainingMilliseconds)
    history.replace('/')
  }

  const routes = renderRoutes(AUTH_ROUTES)

  const renderHome = () => {
    if (auth.isAuth) {
      return (
        <App
          isAuth={auth.isAuth}
          userId={auth.userId}
          firstName={auth.firstName}
        />
      )
    } else {
      return (
        <BrowserRouter>
          <Layout isAuth={auth.isAuth}>
            <Switch>
              <Route
                path={'/login'}
                exact
                component={(props) => (
                  <ConnectLogin {...props} onLogin={setAuthHandler} />
                )}
              />
              {routes}
            </Switch>
          </Layout>
        </BrowserRouter>
      )
    }
  }

  return renderHome()
}

export default withRouter(Auth)
