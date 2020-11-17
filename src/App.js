import Layout from 'layouts'
import { Profile } from 'pages'

export default function App({ isAuth, firstName }) {
  return (
    <Layout isAuth={isAuth} firstName={firstName}>
      <Profile />
    </Layout>
  )
}
