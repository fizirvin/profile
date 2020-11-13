import React from 'react'
import { LINKS } from 'constants/subtitles'
import { LINKEDIN, TWITTER, FACEBOOK, PERSONALW } from 'constants/labels'
import { Subtitle, TextInput } from 'components'
import { ImputContainer, Section } from './styles'

export default function Links() {
  return (
    <Section>
      <Subtitle subtitle={LINKS} />
      <ImputContainer>
        <TextInput label={LINKEDIN} />
        <TextInput label={TWITTER} />
      </ImputContainer>
      <ImputContainer>
        <TextInput label={FACEBOOK} />
        <TextInput label={PERSONALW} />
      </ImputContainer>
    </Section>
  )
}
