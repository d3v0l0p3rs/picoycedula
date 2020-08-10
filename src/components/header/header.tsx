import React from 'react'
import { City } from 'components/index.types'
import { Props } from './header.types'
import { cities } from 'data'
import { getLabel } from 'texts'
import { Collapse } from '@material-ui/core'
import styles from './scss.module.scss'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'

const HeaderComponent: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h5" style={{ color: 'white' }}>
          {getLabel('title')}
        </Typography>
        {props.darkMode ? (
          <Button
            style={{ marginLeft: 'auto', color: 'white' }}
            onClick={() => {
              props.setDarkMode(false)
            }}>
            <Brightness7Icon></Brightness7Icon>
          </Button>
        ) : (
          <Button
            style={{ marginLeft: 'auto', color: 'white' }}
            onClick={() => {
              props.setDarkMode(true)
            }}>
            <Brightness4Icon></Brightness4Icon>
          </Button>
        )}
        <Select
          value={props.currentCity}
          style={{ marginLeft: 'auto', color: 'white' }}
          onChange={e => {
            props.updateData({
              currentCity: e.target.value as City,
            })
          }}
          className={styles.selectedCity}>
          {Object.entries(cities).map(([key, value]) => (
            <MenuItem key={key} value={key} className={styles.cityContainer}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </Toolbar>

      <Collapse in={props.personIDNumber !== null || props.vehicleIDNumber !== null}>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          style={{ width: 'fit-content', paddingLeft: '20px', lineHeight: '20px' }}>
          {props.personIDNumber !== null ? 'Cédula: ...' + props.personIDNumber : ''}
          {props.personIDNumber !== null && props.vehicleIDNumber !== null
            ? ' | '
            : ''}
          {props.vehicleIDNumber !== null
            ? 'Placa: ...' + props.vehicleIDNumber
            : ''}
        </Typography>
      </Collapse>
    </AppBar>
  )
}

export { HeaderComponent }
