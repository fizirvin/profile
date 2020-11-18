import React from 'react'
import { LoggedMenuArea, UListContainer, ListItem } from 'containers'

export default function LoggedMenu() {
  return (
    <LoggedMenuArea>
      <UListContainer>
        <ListItem>Profile</ListItem>
        <ListItem>Jobs</ListItem>
        <ListItem>Professional Network</ListItem>
        <ListItem>Lounge</ListItem>
        <ListItem>Salary</ListItem>
      </UListContainer>
    </LoggedMenuArea>
  )
}
