import { useSelector } from 'react-redux'

export default function useConnect(reducer) {
  const { input, userId, loading } = useSelector((state) => {
    return {
      input: state[reducer],
      userId: state.user.userId,
      loading: state.request.loading
    }
  })

  return { input, userId, loading }
}
