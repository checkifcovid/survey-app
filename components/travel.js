import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(2, 0),
    height: 350,
  },
  formControl: {
    margin: theme.spacing(1),
    display: 'block',
  },
}))

const Travel = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.section}>
      <Typography variant="h5" component="h5" gutterBottom>
        Travel history
      </Typography>
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
        label="Wuhan, Hubei Province and Zhejiang Province"
      />
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
        label="Mainland China (Except Wuhan, Hubei Province and Zhejiang Province)"
      />
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
        label="Republic of Korea (South Korea)"
      />
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
        label="Iran"
      />
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
        label="Italy, France, Spain or Germany"
      />
    </Grid>
  )
}

export default Travel
