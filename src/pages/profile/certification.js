import React from 'react'
import { CERTIFICATION } from 'constants/subtitles'
import {
  CERTIFICATION_AUTHO,
  CERTIFICATION_NAME,
  LICENSE_NUM,
  FROM_MONTH,
  IN_YEAR,
  TO_MONTH
} from 'constants/labels'
import { ADD_CERTIFICATION } from 'constants/buttons'
import { MONTHS, YEARS } from 'constants/lists'
import {
  AddButton,
  TextAllInput,
  SelectInput,
  Subtitle,
  TextInput
} from 'components'
import { ImputContainer, Section } from './styles'

export default function Certification() {
  return (
    <Section>
      <Subtitle subtitle={CERTIFICATION} />

      <TextAllInput label={CERTIFICATION_NAME} />

      <ImputContainer>
        <TextInput label={CERTIFICATION_AUTHO} />
        <TextInput label={LICENSE_NUM} />
      </ImputContainer>
      <ImputContainer>
        <SelectInput label={FROM_MONTH} name="Month" items={MONTHS} />
        <SelectInput label={IN_YEAR} name="Year" items={YEARS} />
        <SelectInput label={TO_MONTH} name="Month" items={MONTHS} />
        <SelectInput label={IN_YEAR} name="Year" items={YEARS} />
      </ImputContainer>
      <AddButton title={ADD_CERTIFICATION} />
    </Section>
  )
}
