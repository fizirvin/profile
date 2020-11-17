import React from 'react'
import { UserNameArea, UserContainer, UserImageArea } from 'containers'

export default function User({ firstName }) {
  return (
    <UserContainer>
      <UserNameArea>{firstName}</UserNameArea>
      <UserImageArea>
        <img
          src={'https://fiz-app-images.s3.amazonaws.com/1576791840842'}
        ></img>
      </UserImageArea>
    </UserContainer>
  )
}
