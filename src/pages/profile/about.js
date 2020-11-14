import React from 'react'
import { ABOUT } from 'constants/subtitles'
import {
  GENERAL_DESCRIPTION,
  FEATURED_SKILLS,
  DESIRED_SALARY,
  STATUS_JOB,
  INTENTION_JOB,
  INTENTION_CONNECT,
  INTERESTES_IN
} from 'constants/labels'
import { STATUS_JOB_LIST } from 'constants/lists'
import {
  Subtitle,
  TextAreaInput,
  TextInput,
  SelectInput,
  SwitchInput
} from 'components'
import { Section, RowContainer, Quart, QuartLast } from './styles'

export default function About() {
  return (
    <Section>
      <Subtitle subtitle={ABOUT} />
      <TextAreaInput label={GENERAL_DESCRIPTION} rows={'10'} />
      <TextAreaInput label={FEATURED_SKILLS} rows={'10'} />
      <RowContainer>
        <Quart>
          <TextInput label={DESIRED_SALARY} />
        </Quart>
        <Quart>
          <SelectInput
            label={STATUS_JOB}
            name={'Active'}
            items={STATUS_JOB_LIST}
          />
        </Quart>
        <Quart>
          <SwitchInput checked label={INTENTION_JOB} />
        </Quart>
        <QuartLast>
          <SwitchInput label={INTENTION_CONNECT} />
        </QuartLast>
      </RowContainer>
      <TextAreaInput label={INTERESTES_IN} rows={'10'} />
    </Section>
  )
}
