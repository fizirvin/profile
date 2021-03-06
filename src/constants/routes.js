import Signup from 'auth/signup'
import SignupWithEmail from 'auth/withEmail'
import * as pages from 'pages'

const HOME_ROUTE = '/'
const ABOUT_ROUTE = '/about'
const JOBS_ROUTE = '/jobs'
const LOUNGE_ROUTE = '/lounge'
const SIGNUP_WITH_EMAIL_ROUTE = '/signup-with-email'

export const AUTH_ROUTES = [
  [HOME_ROUTE, Signup],
  [ABOUT_ROUTE, pages.About],
  [JOBS_ROUTE, pages.Jobs],
  [LOUNGE_ROUTE, pages.Lounge],
  [SIGNUP_WITH_EMAIL_ROUTE, SignupWithEmail]
]
