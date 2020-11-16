import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'
import { AUTH_ROUTES } from 'constants/routes'
import { renderRoutes } from 'functions'
import { AuthLayout } from 'layouts'
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
      return <App {...auth} />
    } else {
      return (
        <BrowserRouter>
          <AuthLayout>
            <Switch>{routes}</Switch>
          </AuthLayout>
        </BrowserRouter>
      )
    }
  }

  return renderHome()
}

export default withRouter(Auth)
