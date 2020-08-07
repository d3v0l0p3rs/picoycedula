import React from 'react'
import { GoOutState, Entity, Props } from '../index.types'
import './card.css'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

const cardStyle = (canGoOut: GoOutState) => {
  const border = {
    YES: '3px solid ' + cardColor(canGoOut),
    NO: '3px solid ' + cardColor(canGoOut),
    ERROR: '3px solid ' + cardColor(canGoOut),
    UNDEFINED: '3px solid ' + cardColor(canGoOut),
  }
  return {
    border: border[canGoOut],
    display: 'inline-block',
    margin: '20px 40px',
    height: '180px',
    width: '200px',
    transition: 'all .5s ease',
    WebkitTransition: 'all .5s ease',
    MozTransition: 'all .5s ease',
  }
}

export const cardIcon = (canGoOut: GoOutState, entity: Entity): JSX.Element => {
  const style = { fontSize: '80px' }
  return {
    YES: {
      person: <CheckCircleOutlineIcon style={style} />,
      vehicle: <CheckCircleOutlineIcon style={style} />,
    },
    NO: { person: <HighlightOffIcon style={style} />, vehicle: <HighlightOffIcon style={style} /> },
    ERROR: {
      person: <ReportProblemOutlinedIcon style={style} />,
      vehicle: <ErrorOutlineIcon style={style} />,
    },
    UNDEFINED: {
      person: <ErrorOutlineIcon style={style} />,
      vehicle: <ErrorOutlineIcon style={style} />,
    },
  }[canGoOut][entity]
}

export const cardColor = (canGoOut: GoOutState): string => {
  return {
    YES: '#009933',
    NO: '#b00020',
    ERROR: '#cc6600',
    UNDEFINED: '#1976d0',
  }[canGoOut]
}

const CardComponent: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <Card style={cardStyle(props.canGoOut)}>
      <CardActionArea style={{ height: '100%' }}>
        <Typography style={{ color: cardColor(props.canGoOut) }}>
          {cardIcon(props.canGoOut, props.entity)}
        </Typography>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export { CardComponent }
