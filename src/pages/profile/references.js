import React from 'react'
import { REFERENCES } from 'constants/subtitles'
import { REFERENCE_NAME, REFERENCE_EMAIL } from 'constants/labels'
import { SEND_REQUEST } from 'constants/buttons'
import { RequestButton, Subtitle, TextInput } from 'components'
import { Section, ImputContainer } from './styles'

export default function References() {
  return (
    <Section>
      <Subtitle subtitle={REFERENCES} />
      <ImputContainer>
        <TextInput label={REFERENCE_NAME} />
        <TextInput label={REFERENCE_EMAIL} />
        <RequestButton title={SEND_REQUEST} />
      </ImputContainer>
    </Section>
  )
}
