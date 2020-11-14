import React from 'react'
import {
  ADDRESS,
  STATE,
  COUNTRY,
  GENDER,
  UPLOAD_RESUME
} from 'constants/labels'
import { BASIC } from 'constants/subtitles'
import { STATE_LIST, COUNTRIES_LIST, GENDERS_LIST } from 'constants/lists'
import { SELECT_FILE } from 'constants/buttons'
import { Subtitle, TextInput, SelectInput, RequestButton } from 'components'
import { Section, RowContainer, Half, Quart, QuartLast } from './styles'

export default function Basic() {
  return (
    <Section>
      <Subtitle subtitle={BASIC} />
      <RowContainer>
        <Half>
          <TextInput label={ADDRESS} />
        </Half>
        <Quart>
          <SelectInput label={STATE} name={''} items={STATE_LIST} />
        </Quart>
        <QuartLast>
          <SelectInput label={COUNTRY} name={''} items={COUNTRIES_LIST} />
        </QuartLast>
      </RowContainer>
      <RowContainer>
        <Quart>
          <SelectInput label={GENDER} name={''} items={GENDERS_LIST} />
        </Quart>
        <Half>
          <TextInput label={UPLOAD_RESUME} />
        </Half>
        <QuartLast>
          <RequestButton title={SELECT_FILE} />
        </QuartLast>
      </RowContainer>
    </Section>
  )
}
