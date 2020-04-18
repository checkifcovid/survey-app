import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'


import ReactCountryFlag from 'react-country-flag'

const useStyles = makeStyles((theme) => ({
  appbar: {
    margin: theme.spacing(0, 0, 2, 0),
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  logo: {
    width: 48,
  },
  site: {
    fontSize: '2em !important',
    lineHeight: '2em !important',
    margin: theme.spacing(0, 2),
  },
}))

const Menu = () => {
  const classes = useStyles()

  return (
    <AppBar color="transparent" className={classes.appbar} position="static">
      <Toolbar className={classes.toolbar}>
        <Link href="/"><img src="/logo.png" alt={process.env.site_name} className={classes.logo} /></Link>
        <Grid>
          <Button target="_blank" variant="outlined" href="https://devpost.com/software/findthecluster" color="primary">Learn more</Button>
          <ReactCountryFlag
            countryCode={process.env.country.short}
            className={classes.site}
          />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Menu
