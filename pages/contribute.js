import React from 'react'

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

const useStyles = makeStyles(theme => ({
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
      description:
        "The team's primary goal is to develop a front-end interface to capture the symptoms from users.",
      skills: ['React', 'NextJS', 'HTML', 'Material UI', 'Typescript'],
      github: 'https://github.com/orgs/checkifcovid/teams/survey-app',
    },
    {
      name: 'API',
      description:
        'The API team enables onboarding of data. They develop endpoints that is needed by the Survey App team and as well as endpoints to expose the data to users.',
      skills: ['Python', 'AWS'],
      github: 'https://github.com/orgs/checkifcovid/teams/api-app',
    },
    {
      name: 'Data Science',
      description:
        'The data science team looks after scraping data from third-party sources and cleaning them. They are also building models to train the collected data',
      skills: ['Python'],
      github: 'https://github.com/orgs/checkifcovid/teams/data-science',
    },
    {
      name: 'Mobile',
      description:
        'This team is new and nothing has been started. This will be a port of the Survey App but will be a native mobile application',
      skills: ['React Native'],
      github: 'https://github.com/orgs/checkifcovid/teams/mobile-app',
    },
  ]

  return (
    <>
      <Container>
        <Grid container>
          <Grid item sm={12}>
            <Typography
              className={classes.heading}
              variant="h3"
              component="h3"
              gutterBottom
            >
              Contribute
            </Typography>
          </Grid>
          <Grid container>
            <Grid item sm={6}>
              <Typography variant="h4" component="h4" gutterBottom>
                Active Contributors
              </Typography>
              <Typography variant="body1" component="body1" gutterBottom>
                CheckIfCovid is a non-profit and open source initiative. All
                contributions are from volunteers who want to help with this
                pandemic.
              </Typography>
              <ul>
                <li>Efren Macasaet (Product, Engineering)</li>
                <li>Rashnil Chaturvedi (Engineering)</li>
                <li>Yaakov Bressler (Data Science)</li>
              </ul>
              <Typography variant="h5" component="h5" gutterBottom>
                Past Contributors
              </Typography>
              <ul>
                <li>Dominik Einkemmer (Engineering)</li>
                <li>Prince Owusu Attah (Product Designer)</li>
                <li>Jason Lee (Product)</li>
                <li>Mark Renzo Santiago (Engineering)</li>
                <li>Diana Zhong, MD (Doctor)</li>
                <li>Glory Adedayo (Engineering)</li>
                <li>Mohamed Abdelrehim (Data Science)</li>
                <li>Maria Christina Kalogera (Data Science)</li>
                <li>Sebastian-Sye Klute (Data Science)</li>
                <li>Benjamin Von Wong (Creative)</li>
              </ul>
            </Grid>
            <Grid item sm={6}>
              <Grid container>
                <Grid sm={12}>
                  <Typography variant="h4" component="h4" gutterBottom>
                    Teams
                  </Typography>
                  <Typography variant="body1" component="body1" gutterBottom>
                    The project is organized into different teams working on
                    different areas but with a common objective.
                  </Typography>
                </Grid>
                {teams.map(team => (
                  <Grid key={team.name} className={classes.team} sm={6}>
                    <Card className={classes.root}>
                      <CardActionArea target="_blank" href={team.github}>
                        <CardContent className={classes.content}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {team.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {team.description}
                          </Typography>
                          <Grid className={classes.skills}>
                            Skills:
                            {team.skills.map(skill => (
                            <Chip
                              key={skill}
                              className={classes.skill}
                              size="small"
                              label={skill}
                            />
                          ))}
                          </Grid>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button
                          href={team.github}
                          target="_blank"
                          size="small"
                          color="primary"
                        >
                          Github
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Contribute
