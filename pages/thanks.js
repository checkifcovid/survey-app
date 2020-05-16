import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
}))

const Thanks = () => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.root}>
        <Grid container>
          <Grid item sm={12}>
            <img
              className={classes.crowdsourcing}
              src="/crowdsource.png"
              alt="Crowdsourcing"
            />
            <Typography variant="h2" component="h2" gutterBottom>
              Thank you
            </Typography>
            <Grid>
              <Typography variant="body1" component="p" gutterBottom>
                Your time in completing this information is highly appreciated.
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                Rest assured that the data you've submitted will always be
                anonymous and will only be used for helping others.
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1" component="p" gutterBottom>
                Keep safe and stay healthy!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Thanks
