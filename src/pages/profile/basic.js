import React from 'react'
import {
  FIRST_NAME,
  LAST_NAME,
  MINI_RESUME,
  ADDRESS,
  STATE,
  COUNTRY,
  GENDER,
  UPLOAD_RESUME,
  PROFILE_IMAGES
} from 'constants/labels'
import { BASIC } from 'constants/subtitles'
import { STATE_LIST, COUNTRIES_LIST, GENDERS_LIST } from 'constants/lists'
import { SELECT_FILE } from 'constants/buttons'
import {
  Subtitle,
  TextInput,
  TextAreaInput,
  SelectInput,
  RequestButton,
  PictureInput
} from 'components'
import {
  BlockContainer,
  FlexContainer,
  PictureContainer,
  Section,
  RowContainer,
  Half,
  Quart,
  QuartLast,
  HalfLast
} from './styles'

export default function Basic() {
  return (
    <Section>
      <Subtitle subtitle={BASIC} />
      <FlexContainer>
        <PictureContainer>
          <PictureInput label={PROFILE_IMAGES} />
        </PictureContainer>
        <BlockContainer>
          <RowContainer>
            <Half>
              <TextInput label={FIRST_NAME} />
            </Half>
            <HalfLast>
              <TextInput label={LAST_NAME} />
            </HalfLast>
          </RowContainer>
          <TextAreaInput label={MINI_RESUME} rows={'4'} />
        </BlockContainer>
      </FlexContainer>

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
