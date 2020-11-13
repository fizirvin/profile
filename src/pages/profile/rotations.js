import React from 'react'
import {
  ORGANIZATION,
  CARE_CENTER,
  DEPARTMENT,
  FROM_MONTH,
  IN_YEAR,
  TO_MONTH,
  DESCRIPTION,
  DETAILS
} from 'constants/labels'
import { MONTHS, YEARS } from 'constants/lists'
import { ROTATIONS } from 'constants/subtitles'
import { SelectInput, Subtitle, TextAreaInput, TextInput } from 'components'
import { ImputContainer, Section } from './styles'

export default function Rotations() {
  return (
    <Section>
      <Subtitle subtitle={ROTATIONS} />
      <ImputContainer>
        <TextInput label={ORGANIZATION} />
        <TextInput label={CARE_CENTER} />
        <TextInput label={DEPARTMENT} />
      </ImputContainer>
      <ImputContainer>
        <SelectInput label={FROM_MONTH} name="Month" items={MONTHS} />
        <SelectInput label={IN_YEAR} name="Year" items={YEARS} />
        <SelectInput label={TO_MONTH} name="Month" items={MONTHS} />
        <SelectInput label={IN_YEAR} name="Year" items={YEARS} />
      </ImputContainer>
      <TextAreaInput label={DESCRIPTION} rows={'10'} cols={'100'} />
      <TextAreaInput label={DETAILS} rows={'10'} cols={'100'} />
    </Section>
  )
}
