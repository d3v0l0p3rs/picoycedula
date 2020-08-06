import React from 'react'
import { GoOutState, Entity } from '../index.types'
import Block from '@material-ui/icons/Block'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

export const icon = (canGoOut: GoOutState, entity: Entity): JSX.Element => {
  return {
    YES: {
      person: <CheckCircleOutlineIcon />,
      vehicle: <CheckCircleOutlineIcon />,
    },
    NO: { person: <HighlightOffIcon />, vehicle: <HighlightOffIcon /> },
    ERROR: {
      person: <ReportProblemOutlinedIcon />,
      vehicle: <ErrorOutlineIcon />,
    },
    UNDEFINED: {
      person: <ErrorOutlineIcon />,
      vehicle: <ErrorOutlineIcon />,
    },
  }[canGoOut][entity]
}
