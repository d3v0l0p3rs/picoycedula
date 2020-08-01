import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFoundComponent: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>404 Not found</h1>
      <NavLink key="/" to="/">
        go home
      </NavLink>
    </div>
  )
}

export { NotFoundComponent }
