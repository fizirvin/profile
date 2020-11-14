import React from 'react'
import { LINKS } from 'constants/subtitles'
import { LINKEDIN, TWITTER, FACEBOOK, PERSONALW } from 'constants/labels'
import { Subtitle, TextInput } from 'components'
import { RowContainer, Half, HalfLast, Section } from './styles'

export default function Links() {
  return (
    <Section>
      <Subtitle subtitle={LINKS} />
      <RowContainer>
        <Half>
          <TextInput label={LINKEDIN} />
        </Half>
        <HalfLast>
          <TextInput label={TWITTER} />
        </HalfLast>
      </RowContainer>
      <RowContainer>
        <Half>
          <TextInput label={FACEBOOK} />
        </Half>
        <HalfLast>
          <TextInput label={PERSONALW} />
        </HalfLast>
      </RowContainer>
    </Section>
  )
}
