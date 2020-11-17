const loginQuery = {
  query: `query 
    Login($email: String, $password: String){
        login(email:$email, password:$password){
            userId
            token
            firstName
        }
    }`
}

export default loginQuery
