import React from 'react'

import TextField from '@material-ui/core/TextField'

// Redux
import { connect } from 'react-redux'
import { setPosition } from '../../redux/actions/positionActions'

const Postcode = ({ position, setPosition }) => {
  console.log('p', position)
  return (
    <TextField
      label="Postal or zip code"
      name="postcode"
      value={position.postcode}
      onChange={e => {
        if (e.keyCode === 32) {
          e.preventDefault()
        } else {
          const value = e.target.value.toUpperCase().replace(/\s/g, '')
          setPosition({ field: 'postcode', value: value })
        }
      }}
    />
  )
}

const mapStateToProps = ({ position }) => ({
  position,
})

const mapDispatchToProps = {
  setPosition,
}
export default connect(mapStateToProps, mapDispatchToProps)(Postcode)
