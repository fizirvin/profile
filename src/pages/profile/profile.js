import React from 'react'
import { Title } from 'components'
import Basic from './basic'
import About from './about'
import Experience from './experience'
import Rotations from './rotations'
import Education from './education'
import Certification from './certification'
import Acomplishments from './accomplishments'
import References from './references'
import Links from './links'

export default function Profile() {
  return (
    <>
      <Title title={'User Profile Settings'} />
      <Basic />
      <About />
      <Experience />
      <Rotations />
      <Education />
      <Certification />
      <Acomplishments />
      <References />
      <Links />
    </>
  )
}
