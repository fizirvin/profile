import React from 'react'
import { REFERENCES } from 'constants/subtitles'
import { REFERENCE_NAME, REFERENCE_EMAIL } from 'constants/labels'
import { SEND_REQUEST } from 'constants/buttons'
import { RequestButton, Subtitle, TextInput } from 'components'
import { Section, RowContainer, QuartHalf, QuartLast } from './styles'

export default function References() {
  return (
    <Section>
      <Subtitle subtitle={REFERENCES} />
      <RowContainer>
        <QuartHalf>
          <TextInput label={REFERENCE_NAME} />
        </QuartHalf>
        <QuartHalf>
          <TextInput label={REFERENCE_EMAIL} />
        </QuartHalf>
        <QuartLast>
          <RequestButton title={SEND_REQUEST} />
        </QuartLast>
      </RowContainer>
    </Section>
  )
}
