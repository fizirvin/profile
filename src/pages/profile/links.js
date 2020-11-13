import React from 'react'
import { Subtitle, TextInput } from 'components'
import { LINKS } from 'constants/subtitles'
import { LINKEDIN, TWITTER, FACEBOOK, PERSONALW } from 'constants/labels'

export default function Links() {
  return (
    <>
      <Subtitle subtitle={LINKS} />
      <div>
        <TextInput label={LINKEDIN} />
        <TextInput label={TWITTER} />
      </div>
      <div>
        <TextInput label={FACEBOOK} />
        <TextInput label={PERSONALW} />
      </div>
    </>
  )
}
