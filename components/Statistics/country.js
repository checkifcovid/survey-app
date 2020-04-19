import React, { useState, useEffect } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import NumberFormat from 'react-number-format'


const StatisticsCountry = () => {
  const [result, setResult] = useState({
    confirmed: 'No data',
    deaths: 'No data',
    recovered: 'No data',
    updateDate: null,
  })

  useEffect(() => {
    const d = new Date()
    d.setDate(d.getDate() - 1)
    const month = `0${d.getMonth() + 1}`
    const day = d.getDate()
    const year = d.getFullYear()

    const report_date = `${month}-${day}-${year}`

    fetch(`/api/statistics?country=US&date=${report_date}`)
      .then((response) => response.json())
      .then((response) => {
        console.log('hey', response)
        setResult({
          country: response.Combined_Key,
          confirmed: response.Confirmed,
          deaths: response.Deaths,
          recovered: response.Recovered,
          updateDate: response.Last_Update,
        })
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                {result.country}
              </TableCell>
              <TableCell align="right">Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="confirmed">
              <TableCell component="th" scope="row">
                Confirmed
              </TableCell>
              <TableCell align="right"><NumberFormat value={result.confirmed} displayType="text" thousandSeparator /></TableCell>
            </TableRow>
            <TableRow key="deaths">
              <TableCell component="th" scope="row">
                Deaths
              </TableCell>
              <TableCell align="right"><NumberFormat value={result.deaths} displayType="text" thousandSeparator /></TableCell>
            </TableRow>
            <TableRow key="recovered">
              <TableCell component="th" scope="row">
                Recovered
              </TableCell>
              <TableCell align="right"><NumberFormat value={result.recovered} displayType="text" thousandSeparator /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      Last Updated:
      {' '}
      {result.updateDate}
      <a href="https://github.com/summyfeb12/COVID-19-JHU-Data-API" target="_blank">Source</a>
    </>
  )
}

export default StatisticsCountry
