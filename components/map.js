import React from 'react'
import GoogleMapReact from 'google-map-react'
import { makeStyles } from '@material-ui/core/styles'
import RoomIcon from '@material-ui/icons/Room'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '300px',
    width: '90%',
  },
}))

export default function Map(props) {
  const classes = useStyles()

  const { data } = props

  return (
    <div className={classes.root}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'GOOGLE API KEY HERE' }}
        defaultCenter={{
          lat: 43.7068,
          lng: -79.3983,
        }}
        defaultZoom={11}
      >
        {
            data.map((record) => (
              <RoomIcon lat={record.location.coordinates[1]} lng={record.location.coordinates[0]} />
            ))
          }
      </GoogleMapReact>
    </div>
  )
}
