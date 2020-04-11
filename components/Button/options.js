import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/FormControl'

const useStyles = makeStyles((theme) => ({
  symptom: {
    cursor: 'pointer',
    fontSize: 16,
    padding: theme.spacing(2, 4),
    boxShadow: '0 20px 60px 0 rgba(49,69,244,0.1)',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 2px rgba(255,255,255,0.1)',
    margin: theme.spacing(1),
    '&:hover': {
      border: 'solid 2px #1968fc',
      background: '#fff',
    },
    [theme.breakpoints.down('sm')]: {
      width: 155,
    },
  },
  active: {
    border: 'solid 2px #1968fc',
  },
}))

const Options = ({ options, style, sendUpdate }) => {
  const classes = useStyles()
  const [option, setOption] = useState(null)


  const handleOption = (e) => {
    console.log('e', e.target.id)
    setOption(e.target.id)
    sendUpdate(e.target.id)
  }

  return (
    <>
      {
      options.map((value) => {
        const active = (option === value.key) ? 'active' : 'not-active'
        return (
          <Button id={value.key} onClick={(e) => handleOption(e)} className={clsx(classes.symptom, classes[active])} style={style}>
            {value.label}
          </Button>
        )
      })
    }
    </>
  )
}

Options.propTypes = {
  options: PropTypes.array.isRequired,
  sendUpdate: PropTypes.func.isRequired,
}

export default Options
