import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { getLabel } from 'texts'
import { NavConf, Link } from './nav.types'

const navConf: NavConf = {
  links: {
    home: { path: '/home', name: 'Inicio' },
  },
  activeClassName: 'active',
}

const useGetActivePathName = (): string => {
  const location = useLocation()
  const link = navConf.links[location.pathname]
  return getLabel(link?.name)
}

const genetareLink = (linkName: string): JSX.Element => {
  return (
    <NavLink
      key={navConf.links[linkName].path}
      to={navConf.links[linkName].path}
      activeClassName={navConf.activeClassName}>
      {navConf.links[linkName].name}
    </NavLink>
  )
}

const NavComponent: React.FC = (): JSX.Element => {
  return <div></div>
}

export { NavComponent, useGetActivePathName }
