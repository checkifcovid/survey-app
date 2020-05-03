import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(() => ({
  none: {
    color: '#ccc',
  },
}))

const Statistics = ({ title, data }) => {
  const classes = useStyles()

  const symptoms = process.env.disease.symptoms

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{title}</TableCell>
            <TableCell align="right">Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {title === 'Symptom'
            ? Object.keys(data).map(symptom => {
              const formattedSymptom = symptoms.find(
                item => item.key === symptom
              )
              return (
                formattedSymptom && (
                  <TableRow key={symptom}>
                    <TableCell component="th" scope="row">
                      {formattedSymptom.label || ''}
                    </TableCell>
                    <TableCell align="right" className={classes.none}>
                      No data
                      </TableCell>
                  </TableRow>
                )
              )
            })
            : results.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right" className={classes.none}>
                  No data
                  </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Statistics
