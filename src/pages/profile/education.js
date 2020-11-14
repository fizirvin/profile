import React from 'react'
import { ADD_EDUCATION } from 'constants/buttons'
import { EDUCATION } from 'constants/subtitles'
import {
  SCHOOL,
  DEGREE,
  FIELD,
  GRADE,
  FROM_YEAR,
  TO_YEAR,
  DESCRIPTION
} from 'constants/labels'
import { DEGREES } from 'constants/lists'
import {
  AddButton,
  SelectInput,
  Subtitle,
  TextAreaInput,
  TextInput,
  TextAllInput
} from 'components'
import {
  RowContainer,
  Section,
  Quart,
  QuartLast,
  Half,
  HalfLast
} from './styles'

export default function Education() {
  return (
    <Section>
      <Subtitle subtitle={EDUCATION} />
      <TextAllInput label={SCHOOL} />
      <RowContainer>
        <Quart>
          <SelectInput label={DEGREE} name="Degree" items={DEGREES} />
        </Quart>
        <Half>
          <TextInput label={FIELD} />
        </Half>
        <QuartLast>
          <TextInput label={GRADE} />
        </QuartLast>
      </RowContainer>
      <RowContainer>
        <Half>
          <TextInput label={FROM_YEAR} />
        </Half>
        <HalfLast>
          <TextInput label={TO_YEAR} />
        </HalfLast>
      </RowContainer>
      <TextAreaInput label={DESCRIPTION} rows={'10'} cols={'100'} />
      <AddButton title={ADD_EDUCATION} />
    </Section>
  )
}
