import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme) => ({
  footer: {
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(5, 0),

  },
  footerlinks: {
    padding: theme.spacing(1),
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Container align="center">
      <Grid className={classes.footer} container>
        <Grid item>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
              {process.env.site_name}
            </Link>
            {' '}
            {new Date().getFullYear()}
            .
          </Typography>
        </Grid>
        <Grid item>
          <Link target="_blank" className={classes.footerlinks} href="https://github.com/checkifcovid/api-app/wiki">Developer API</Link>
          <Link className={classes.footerlinks} href="/contribute">Contribute</Link>
          <Link className={classes.footerlinks} href="/">Privacy Policy</Link>
          <Link className={classes.footerlinks} href="https://github.com/checkifcovid" target="_blank">Contact Us</Link>
        </Grid>
        <Grid item>
          <Link className={classes.footerlinks} href="https://github.com/checkifcovid" target="_blank"><GitHubIcon /></Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
