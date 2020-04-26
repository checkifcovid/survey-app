import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ShareIcon from '@material-ui/icons/Share'
import MapIcon from '@material-ui/icons/Map'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
  },
}))

const ResultLinks = () => {
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
          <ListItemText
            primary="Share your result"
            secondary="Share this tool and result to friends"
          />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <MapIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Check risk by location"
            secondary="Traveling to another place? Check your risk when visiting the location."
          />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <LocalHospitalIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Find a testing center"
            secondary="Get a list of nearby testing centers"
          />
        </ListItem>
      </List>
    </>
  )
}

ResultLinks.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ResultLinks
