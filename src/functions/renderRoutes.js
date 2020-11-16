import React from 'react'
import { Route } from 'react-router-dom'

export default function renderRoutes(data) {
  const routes = data.map((route, index) => {
    return <Route key={index} path={route[0]} exact component={route[1]} />
  })

  return routes
}
