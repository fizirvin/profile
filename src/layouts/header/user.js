import React from 'react'
import { FlexTextArea, UserContainer, UserImageArea } from 'containers'

export default function User({ firstName }) {
  return (
    <UserContainer>
      <FlexTextArea>{firstName}</FlexTextArea>
      <UserImageArea>
        <img
          alt={'user'}
          src={'https://fiz-app-images.s3.amazonaws.com/1576791840842'}
        ></img>
      </UserImageArea>
    </UserContainer>
  )
}
