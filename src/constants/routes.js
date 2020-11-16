import Login from 'auth/Login'
import Signup from 'auth/Signup'
import * as pages from 'pages'

const HOME_ROUTE = '/'
const LOGIN_ROUTE = '/login'
const ABOUT_ROUTE = '/about'
const JOBS_ROUTE = '/jobs'
const LOUNGE_ROUTE = '/lounge'

export const AUTH_ROUTES = [
  [HOME_ROUTE, Signup],
  [LOGIN_ROUTE, Login],
  [ABOUT_ROUTE, pages.About],
  [JOBS_ROUTE, pages.Jobs],
  [LOUNGE_ROUTE, pages.Lounge]
]
