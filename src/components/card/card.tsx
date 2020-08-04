import React from 'react'
import { GoOutState, Entity, Props } from '../index.types'
import './card.css'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import DirectionRun from '@material-ui/icons/DirectionsRun'
import DriveEta from '@material-ui/icons/DriveEta'
import Error from '@material-ui/icons/Error'
import Home from '@material-ui/icons/Home'
import Block from '@material-ui/icons/Block'
import Dialpad from '@material-ui/icons/Dialpad'

const cardStyle = (canGoOut: GoOutState) => {
  const color = {
    YES: 'green',
    NO: 'red',
    ERROR: 'yellow',
    UNDEFINED: 'gray',
  }
  return {
    backgroundColor: color[canGoOut],
    display: 'inline-block',
    margin: '20px 40px',
    height: '150px',
    width: '200px',
    transition: 'all .5s ease',
    WebkitTransition: 'all .5s ease',
    MozTransition: 'all .5s ease',
  }
}

const cardIcon = (canGoOut: GoOutState, entity: Entity) => {
  const style = { fontSize: '80px' }
  return {
    YES: {
      person: <DirectionRun style={style} />,
      vehicle: <DriveEta style={style} />,
    },
    NO: { person: <Home style={style} />, vehicle: <Block style={style} /> },
    ERROR: { person: <Error style={style} />, vehicle: <Error style={style} /> },
    UNDEFINED: {
      person: <Dialpad style={style} />,
      vehicle: <Dialpad style={style} />,
    },
  }[canGoOut][entity]
}

const CardComponent: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <Card style={cardStyle(props.canGoOut)}>
      <CardActionArea>
        {cardIcon(props.canGoOut, props.entity)}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export { CardComponent }
