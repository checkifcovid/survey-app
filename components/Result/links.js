import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ShareIcon from '@material-ui/icons/Share'
import WorkIcon from '@material-ui/icons/Work'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}))

const ResultLinks = ({ title }) => {
  const classes = useStyles()

  return (
    <>
      <List component="nav" className={classes.root}>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <ShareIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Share your result" secondary="Share this tool and result to friends" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Check risk by location" secondary="Traveling to another place? Check your risk with the location." />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Find a testing center" secondary="Get a list of nearby testing centers" />
        </ListItem>
      </List>
    </>
  )
}

ResultLinks.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ResultLinks
