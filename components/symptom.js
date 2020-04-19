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
    height: 140,
    boxShadow: '0 20px 60px 0 rgba(49,69,244,0.1)',
    borderRadius: 25,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 2px rgba(255,255,255,0.1)',
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: 155,
      height: 130,
    },
  },
  active: {
    border: 'solid 2px #1968fc',
  },
}))

const Symptom = ({
  name, icon, callback, active,
}) => {
  const classes = useStyles()
  const [enabled, setEnabled] = React.useState(active)

  const toggleButton = () => {
    setEnabled(!enabled)
    callback(!enabled)
  }

  const highlight = enabled ? 'active' : 'not-active'

  return (
    <Button onClick={toggleButton} className={clsx(classes.symptom, classes[highlight])}>
      {icon}
      {name}
    </Button>
  )
}

Symptom.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  icon: PropTypes.elementType.isRequired,
  callback: PropTypes.func.isRequired,
}

export default Symptom
