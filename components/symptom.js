import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/FormControl'

const useStyles = makeStyles((theme) => ({
  symptom: {
    cursor: 'pointer',
    fontSize: 16,
    fontWeight: 'bold',
    padding: theme.spacing(10, 4),
    height: 80,
    boxShadow: '0 20px 60px 0 rgba(49,69,244,0.1)',
    borderRadius: 25,
    width: 180,
    alignItems: 'center',
    border: 'solid 2px rgba(255,255,255,0.1)',
    margin: theme.spacing(1),
    '&:hover': {
      border: 'solid 2px #1968fc',
    },
  },
  active: {
    border: 'solid 2px #1968fc',
  },
}))

const Symptom = ({ name, sendUpdate }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const active = open ? 'active' : 'not-active'

  const toggleButton = () => {
    setOpen(!open)
    sendUpdate(!open ? 'true' : 'false')
  }

  return (
    <Button onClick={toggleButton} className={clsx(classes.symptom, classes[active])}>
      {name}
    </Button>
  )
}

Symptom.propTypes = {
  name: PropTypes.string.isRequired,
  sendUpdate: PropTypes.func.isRequired,
}

export default Symptom
