import React from 'react'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import RoomIcon from '@material-ui/icons/Room'

import Map from '../components/map'


const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(10, 5),
  },
  formControl: {
    display: 'block',
  },
  data: {
    padding: theme.spacing(2),
  },
  chart: {
    width: '80%',
  },
}))

const filters = [
  {
    name: 'fever',
    label: 'Fever',
  },
  {
    name: 'cough',
    label: 'Cough',
  },
  {
    name: 'runny_nose',
    label: 'Runny nose',
  },
  {
    name: 'muscle_pain',
    label: 'Muscle pain',
  },
  {
    name: 'sore_throat',
    label: 'Sore throat',
  },
]

const Data = () => {
  const classes = useStyles()

  function createData(postcode, count) {
    return {
      postcode, count,
    }
  }

  const rows = [
    createData('M4S 0A5', 1590),
    createData('EC1V 4EX', 237),
    createData('EC1V 1AG', 262),
  ]

  const options = {
    title: {
      text: 'No. of cases over time',
    },
    series: [{
      data: [1, 2, 3, 4, 5],
    }],
  }
  return (
    <Grid container className={classes.section}>
      <Grid item sm={2}>
        <Grid>
          <Typography variant="h6" component="h6" gutterBottom>
            Filter by symptoms
          </Typography>
          {filters.map((filter) => (
            <FormControlLabel
              className={classes.formControl}
              control={(
                <Checkbox
                  checked={false}
                  onChange={(e) => console.log(e)}
                  name="checkedB"
                  color="primary"
                />
                  )}
              label={filter.label}
            />
          ))}
        </Grid>
      </Grid>
      <Grid container sm={10}>
        <Grid className={classes.data} item sm={3}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Post code</TableCell>
                  <TableCell>Count</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.postcode}>
                    <TableCell component="th" scope="row">
                      {row.postcode}
                    </TableCell>
                    <TableCell>{row.count}</TableCell>
                    <TableCell><RoomIcon /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid className={classes.data} item sm={9}>
          <Map data={[]} />
          <Grid className={classes.chart}>
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Data
