import React from 'react'
import { ACCOMPLISHMENTS } from 'constants/subtitles'
import { DESCRIPTION } from 'constants/labels'
import { ADD_ACCOMPLISHMENTS } from 'constants/buttons'
import { AddButton, Subtitle, TextAreaInput } from 'components'
import { Section } from './styles'

export default function Accomplishments() {
  return (
    <Section>
      <Subtitle subtitle={ACCOMPLISHMENTS} />
      <div>
        <TextAreaInput label={DESCRIPTION} rows={'10'} cols={'100'} />
        <AddButton title={ADD_ACCOMPLISHMENTS} />
      </div>
    </Section>
  )
}
