import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 250,
  },
  content: {
    height: 200,
  },
  heading: {
    fontWeight: 'bold',
  },
  team: {
    padding: theme.spacing(1),
  },
  skills: {
    margin: theme.spacing(2, 0),
  },
  skill: {
    margin: theme.spacing(0.2),
  },
  button: {
    padding: theme.spacing(1, 5),
    fontSize: '12px',
  },
}))

const Contribute = () => {
  const classes = useStyles()

  const teams = [
    {
      name: 'Survey App',
      description: 'The team\'s primary goal is to develop a front-end interface to capture the symptoms from users.',
      skills: [
        'React',
        'NextJS',
        'HTML',
        'Material UI',
        'Typescript',
      ],
      github: 'https://github.com/checkifcovid/survey-app',
    },
    {
      name: 'API',
      description: 'The API team enables onboarding of data. They develop endpoints that is needed by the Survey App team and as well as endpoints to expose the data to users.',
      skills: [
        'Python',
        'AWS',
      ],
      github: 'https://github.com/checkifcovid/api-app',
    },
    {
      name: 'Data Science',
      description: 'The data science team looks after scraping data from third-party sources and cleaning them. They are also building models to train the collected data',
      skills: ['Python'],
    },
    {
      name: 'Mobile',
      description: 'This team is new and nothing has been started. This will be a port of the Survey App but will be a native mobile application',
      skills: [
        'React Native',
      ],
    },
  ]

  return (
    <>
      <Container>
        <Grid container>
          <Grid item sm={12}>
            <Typography className={classes.heading} variant="h2" component="h2" gutterBottom>
              Contributing
            </Typography>
            <Typography variant="body1" component="body1" gutterBottom>
              CheckIfCovid is a non-profit and open source initiative. There are multiple teams working on different areas.
            </Typography>
            <Grid container>
              {
              teams.map((team) => (
                <Grid className={classes.team} sm={4}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {team.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {team.description}
                        </Typography>
                        <Grid className={classes.skills}>
                          Skills:
                          {
                          team.skills.map((skill) => (
                            <Chip className={classes.skill} size="small" label={skill} />
                          ))
                        }
                        </Grid>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button href={team.github} target="_blank" size="small" color="primary">
                        Github
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Contribute
