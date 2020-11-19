import React from 'react'
import { connect } from 'react-redux'
import { RESET_REQUEST_ACTION } from 'redux/requestReducer'
import { Portal } from 'layouts'
import Login from './login'
import { Message, Spinner } from 'components'

const ConnectLogin = ({ request, onLogin }) => {
  const { loading, message } = request
  const onRequest = message || loading
  return (
    <>
      {onRequest && (
        <Portal>
          {loading && <Spinner />}
          <Message
            message={message}
            action={RESET_REQUEST_ACTION}
            to={'/login'}
          />
        </Portal>
      )}
      {!loading && !message && <Login onLogin={onLogin} />}
    </>
  )
}

const mapStateToProps = (state) => ({
  request: state.request
})

export default connect(mapStateToProps, {})(ConnectLogin)
