const labels: { [name: string]: string } = {
  title: 'APP_TITLE',
  default: '¯\\_(ツ)_/¯',
}

const getLabel = (name: string): string => {
  return labels[name] || labels.default
}

export { getLabel }
