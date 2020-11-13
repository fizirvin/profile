import React from 'react'
import { PROFILE_SETTINGS } from 'constants/titles'
import { Title } from 'components'
import ProfileMenu from './menu'
import Basic from './basic'
import About from './about'
import Experience from './experience'
import Rotations from './rotations'
import Education from './education'
import Certification from './certification'
import Acomplishments from './accomplishments'
import References from './references'
import Links from './links'
import { MenuContainer, ProfilesContainer, SettingsContainer } from './styles'

export default function Profile() {
  return (
    <ProfilesContainer>
      <MenuContainer>
        <ProfileMenu />
      </MenuContainer>
      <SettingsContainer>
        <Title title={PROFILE_SETTINGS} />
        <Basic />
        <About />
        <Experience />
        <Rotations />
        <Education />
        <Certification />
        <Acomplishments />
        <References />
        <Links />
      </SettingsContainer>
    </ProfilesContainer>
  )
}
