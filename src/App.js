import Layout from 'layouts'
import { Profile } from 'pages'

export default function App({ isAuth }) {
  return (
    <Layout isAuth={isAuth}>
      <Profile />
    </Layout>
  )
}
