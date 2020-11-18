import React from 'react'
import { Link } from 'react-router-dom'
import { UnloggedMenuArea, UListContainer, ListItem } from 'containers'

export default function UnloggedMenu() {
  return (
    <UnloggedMenuArea>
      <UListContainer>
        <ListItem>
          <Link to={'/about'}>About</Link>
        </ListItem>
        <ListItem>
          <Link to={'/jobs'}>Jobs</Link>
        </ListItem>
        <ListItem>
          <Link to={'/lounge'}>Lounge</Link>
        </ListItem>
      </UListContainer>
    </UnloggedMenuArea>
  )
}
