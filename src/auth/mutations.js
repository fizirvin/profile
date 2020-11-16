export const newUser = {
  query: `mutation
      NewUser( $input: NewUser ){
          newUser(input: $input){
              _id
              firstName
          }
      }`
}
