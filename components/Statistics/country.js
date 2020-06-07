import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import MuiTableCell from '@material-ui/core/TableCell'

import NumberFormat from 'react-number-format'

const TableCell = withStyles({
  root: {
    borderBottom: 'none',
  },
})(MuiTableCell)

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
      .then(response => response.json())
      .then(response => {
        console.log('hey', response)
        setResult({
          country: response.Combined_Key,
          confirmed: response.Confirmed,
          deaths: response.Deaths,
          recovered: response.Recovered,
          updateDate: response.Last_Update,
        })
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <TableContainer>
        <Table size="small" aria-label="simple table">
          <TableBody>
            <TableRow key="confirmed">
              <TableCell component="th" scope="row">
                <span style={{ color: 'gold' }}>◉</span> Confirmed
              </TableCell>
              <TableCell align="right">
                <NumberFormat
                  value={result.confirmed}
                  displayType="text"
                  thousandSeparator
                />
              </TableCell>
            </TableRow>
            <TableRow key="deaths">
              <TableCell component="th" scope="row">
                <span style={{ color: 'red' }}>◉</span> Deaths
              </TableCell>
              <TableCell align="right">
                <NumberFormat
                  value={result.deaths}
                  displayType="text"
                  thousandSeparator
                />
              </TableCell>
            </TableRow>
            <TableRow key="recovered">
              <TableCell component="th" scope="row">
                <span style={{ color: 'green' }}>◉</span> Recovered
              </TableCell>
              <TableCell align="right">
                <NumberFormat
                  value={result.recovered}
                  displayType="text"
                  thousandSeparator
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      Last Updated: {result.updateDate}
      <a
        href="https://github.com/summyfeb12/COVID-19-JHU-Data-API"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
    </>
  )
}

export default StatisticsCountry
