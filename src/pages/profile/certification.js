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
import {
  ImputContainer,
  RowContainer,
  Half,
  Quart,
  QuartLast,
  Section,
  HalfLast
} from './styles'

export default function Certification() {
  return (
    <Section>
      <Subtitle subtitle={CERTIFICATION} />

      <TextAllInput label={CERTIFICATION_NAME} />

      <RowContainer>
        <Half>
          <TextInput label={CERTIFICATION_AUTHO} />
        </Half>
        <HalfLast>
          <TextInput label={LICENSE_NUM} />
        </HalfLast>
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
      <AddButton title={ADD_CERTIFICATION} />
    </Section>
  )
}
