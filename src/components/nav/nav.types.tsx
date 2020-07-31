export interface Link {
  path: string
  name: string
}

export interface NavConf {
  links: { [pathName: string]: Link }
  activeClassName: string
}
