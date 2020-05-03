import React, { useState } from 'react'
import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/FormControl'

const useStyles = makeStyles(theme => ({
  symptom: {
    cursor: 'pointer',
    fontSize: 16,
    padding: theme.spacing(2, 4),
    boxShadow: '0 20px 60px 0 rgba(49,69,244,0.1)',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '250px',
    border: 'solid 2px rgba(255,255,255,0.1)',
    margin: theme.spacing(1),
    '&:hover': {
      border: 'solid 2px #1968fc',
      background: '#fff',
    },
  },
  active: {
    border: 'solid 2px #1968fc',
  },
}))

interface User {
  age: string,
  gender: string
}

interface Symptom {
  active: boolean,
  key: string,
  label: string,
  weight: number,
}

interface IProps {
  value: string
  options: [Symptom],
  sendUpdate: (string) => string,
};

const Options: React.FC<IProps> = ({ value, options, sendUpdate }) => {
  const classes = useStyles()

  return (
    <>
      {options?.map(item => {
        const active = value === item.key ? 'active' : 'not-active'
        return (
          <Button
            key={item.key}
            id={item.key}
            onClick={e => sendUpdate(item.key)}
            className={clsx(classes.symptom, classes[active])}
          >
            {item.label}
          </Button>
        )
      })}
    </>
  )
}

export default Options
