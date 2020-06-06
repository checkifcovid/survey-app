import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

// Redux
import { connect } from 'react-redux'
import { setPosition } from '../redux/actions/positionActions'

// Components
import DropDownCountries from '../components/DropDownCountries/DropDownCountries'
import Postcode from '../components/Location/Postcode'
import Street from '../components/Location/Street'

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },
  input: {
    margin: theme.spacing(2, 0),
  },
}))

const renderInput = input => {
  switch (input) {
    case 'postcode':
      return <Postcode />

    case 'street':
      return <Street />
    default:
      return null
  }
}

const Location = ({ config, setPosition }) => {
  const classes = useStyles()

  // Set the country value to the current site value
  useEffect(() => {
    setPosition({
      field: 'country',
      value: config.country.name,
    })
  }, [config.country])

  console.log('c', config)
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          className={classes.title}
          variant="h3"
          component="h3"
          gutterBottom
        >
          Where are you located?
        </Typography>
      </Container>
      <Container align="center">
        <Grid>
          <DropDownCountries display="name" />
        </Grid>
        {config.country.require?.map(input => (
          <Grid className={classes.input} key={input}>
            {renderInput(input)}
          </Grid>
        ))}
      </Container>
    </>
  )
}

const mapStateToProps = ({ config, position }) => ({
  config,
  position,
})
const mapDispatchToProps = {
  setPosition,
}
export default connect(mapStateToProps, mapDispatchToProps)(Location)
