import React from 'react'
import { EXPERIENCE } from 'constants/subtitles'
import { ADD_EXPERIENCE } from 'constants/buttons'
import {
  TITLE,
  HOSPITAL,
  DEPARTMENT,
  FROM_MONTH,
  IN_YEAR,
  TO_MONTH,
  DESCRIPTION,
  TITLE_REVIEW,
  SALARY,
  EXP_START,
  NURSE_RATIO,
  TURNOVER_RATE,
  RECOMMEND,
  REASONS_RECOMMEND
} from 'constants/labels'
import {
  MONTHS,
  YEARS,
  EXP_PRIOR_LIST,
  NURSE_RATIO_LIST,
  TURNOVER_LIST
} from 'constants/lists'

import {
  AddButton,
  Subtitle,
  TextInput,
  TextAreaInput,
  SelectInput,
  TextAllInput
} from 'components'
import {
  RowContainer,
  HalfLast,
  Half,
  Quart,
  QuartLast,
  Section,
  ThreeQuart
} from './styles'

export default function Experience() {
  return (
    <Section>
      <Subtitle subtitle={EXPERIENCE} />
      <TextAllInput label={TITLE} />
      <RowContainer>
        <Half>
          <TextInput label={HOSPITAL} />
        </Half>
        <HalfLast>
          <TextInput label={DEPARTMENT} />
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
      <TextAreaInput label={DESCRIPTION} rows={'10'} cols={'100'} />
      <RowContainer>
        <ThreeQuart>
          <TextInput label={TITLE_REVIEW} />
        </ThreeQuart>
        <QuartLast>
          <TextInput label={SALARY} />
        </QuartLast>
      </RowContainer>
      <RowContainer>
        <Quart>
          <SelectInput
            label={EXP_START}
            name="2 years"
            items={EXP_PRIOR_LIST}
          />
        </Quart>
        <Quart>
          <SelectInput
            label={NURSE_RATIO}
            name="1 - 100"
            items={NURSE_RATIO_LIST}
          />
        </Quart>
        <Quart>
          <SelectInput
            label={TURNOVER_RATE}
            name="Medium"
            items={TURNOVER_LIST}
          />
        </Quart>
        <QuartLast>
          <SelectInput label={RECOMMEND} name="Yes" items={YEARS} />
        </QuartLast>
      </RowContainer>
      <TextAreaInput label={REASONS_RECOMMEND} rows={'10'} cols={'100'} />
      <AddButton title={ADD_EXPERIENCE} />
    </Section>
  )
}
