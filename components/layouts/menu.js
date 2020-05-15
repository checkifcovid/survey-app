import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'

import DropDownCountries from '../DropDownCountries/DropDownCountries'

const useStyles = makeStyles(theme => ({
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
  action: {
    margin: theme.spacing(0, 1),
  },
}))

const MainMenu = () => {
  const classes = useStyles()

  return (
    <AppBar color="transparent" className={classes.appbar} position="static">
      <Toolbar className={classes.toolbar}>
        <Link href="/">
          <img
            src="/logo.png"
            alt={process.env.site_name}
            className={classes.logo}
          />
        </Link>
        <Grid>
          <Button
            target="_blank"
            variant="outlined"
            href="https://devpost.com/software/findthecluster"
            color="primary"
            className={classes.action}
          >
            Learn more
          </Button>
          <DropDownCountries display="short" />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default MainMenu
