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
import { ImputContainer, Section } from './styles'

export default function Education() {
  return (
    <Section>
      <Subtitle subtitle={EDUCATION} />
      <TextAllInput label={SCHOOL} />
      <ImputContainer>
        <SelectInput label={DEGREE} name="Degree" items={DEGREES} />
        <TextInput label={FIELD} />
        <TextInput label={GRADE} />
      </ImputContainer>
      <ImputContainer>
        <TextInput label={FROM_YEAR} />
        <TextInput label={TO_YEAR} />
      </ImputContainer>
      <TextAreaInput label={DESCRIPTION} rows={'10'} cols={'100'} />
      <AddButton title={ADD_EDUCATION} />
    </Section>
  )
}
