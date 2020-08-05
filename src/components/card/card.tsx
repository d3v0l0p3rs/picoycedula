import React from 'react'
import { GoOutState, Entity, Props } from '../index.types'
import './card.css'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Block from '@material-ui/icons/Block'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

const cardStyle = (canGoOut: GoOutState) => {
  const border = {
    YES: '3px solid green',
    NO: '3px solid red',
    ERROR: '3px solid yellow',
    UNDEFINED: '3px solid gray',
  }
  return {
    backgroundColor: 'white',
    border: border[canGoOut],
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
      person: <CheckCircleOutlineIcon style={style} />,
      vehicle: <CheckCircleOutlineIcon style={style} />,
    },
    NO: { person: <ReportProblemOutlinedIcon style={style} />, vehicle: <Block style={style} /> },
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

const CardComponent: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <Card style={cardStyle(props.canGoOut)}>
      <CardActionArea style={{ height: '100%' }}>
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
