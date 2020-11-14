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
import { ADD_ROTATION } from 'constants/buttons'
import { MONTHS, YEARS } from 'constants/lists'
import { ROTATIONS } from 'constants/subtitles'
import {
  AddButton,
  SelectInput,
  Subtitle,
  TextAreaInput,
  TextInput
} from 'components'
import {
  Quart,
  QuartLast,
  Section,
  Thirds,
  ThirdsLast,
  RowContainer
} from './styles'

export default function Rotations() {
  return (
    <Section>
      <Subtitle subtitle={ROTATIONS} />
      <RowContainer>
        <Thirds>
          <TextInput label={ORGANIZATION} />
        </Thirds>
        <Thirds>
          <TextInput label={CARE_CENTER} />
        </Thirds>
        <ThirdsLast>
          <TextInput label={DEPARTMENT} />
        </ThirdsLast>
      </RowContainer>
      <RowContainer>
        <Quart>
          <SelectInput label={FROM_MONTH} name="Month" items={MONTHS} />
        </Quart>
        <Quart>
          <SelectInput label={IN_YEAR} name="Year" items={YEARS} />
        </Quart>
        <Quart>
          <SelectInput label={TO_MONTH} name="Month" items={MONTHS} />
        </Quart>
        <QuartLast>
          <SelectInput label={IN_YEAR} name="Year" items={YEARS} />
        </QuartLast>
      </RowContainer>
      <TextAreaInput label={DESCRIPTION} rows={'5'} />
      <TextAreaInput label={DETAILS} rows={'5'} />
      <AddButton title={ADD_ROTATION} />
    </Section>
  )
}
