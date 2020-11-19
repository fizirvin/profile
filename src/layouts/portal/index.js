import React from 'react'
import ReactDOM from 'react-dom'
import { ModalArea, ModalContainer } from 'containers'

export default function Portal({ children }) {
  return ReactDOM.createPortal(
    <ModalArea>
      <ModalContainer>{children}</ModalContainer>
    </ModalArea>,
    document.querySelector('#modal')
  )
}
