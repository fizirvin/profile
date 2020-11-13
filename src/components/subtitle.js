import React from 'react'
import { SubtitleDiv, LineSpan } from './styles'

export default function Subtitle({ subtitle }) {
  return (
    <SubtitleDiv>
      {subtitle}
      <LineSpan />
    </SubtitleDiv>
  )
}
