import React from 'react'
import { EXPERIENCE } from 'constants/subtitles'
import { TITLE, HOSPITAL, DEPARTMENT } from 'constants/labels'
import { Subtitle, TextInput, TextAllInput } from 'components'
import { ImputContainer, Section } from './styles'

export default function Experience() {
  return (
    <Section>
      <Subtitle subtitle={EXPERIENCE} />
      <TextAllInput label={TITLE} />
      <ImputContainer>
        <TextInput label={HOSPITAL} />
        <TextInput label={DEPARTMENT} />
      </ImputContainer>
    </Section>
  )
}
