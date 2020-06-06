import React from 'react'

import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

// Redux
import { connect } from 'react-redux'
import { setPosition } from '../../redux/actions/positionActions'

const Street = ({ position, setPosition }) => {
  console.log('position', position)
  return (
    <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
      <GooglePlacesAutocomplete
        apiKey={process.env.GOOGLE_PLACES_API_KEY}
        onSelect={({ description }) =>
          setPosition({ field: 'street', value: description })
        }
        renderInput={props => (
          <div className="custom-wrapper">
            <input
              className="MuiInputBase-input MuiInput-input"
              // Custom properties
              {...props}
            />
          </div>
        )}
      />
    </div>
  )
}

const mapStateToProps = ({ position }) => ({
  position,
})

const mapDispatchToProps = {
  setPosition,
}
export default connect(mapStateToProps, mapDispatchToProps)(Street)
