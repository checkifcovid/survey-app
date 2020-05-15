import { SET_COUNTRY } from '../actions/configActions'

const configReducer = (
  state = {
    country: {
      name: 'United States of America',
      short: 'US',
      coordinates: {
        lat: '',
        lng: '',
      },
      emergency: '911',
      zip: {
        min: 5,
        max: 5,
        regex:
          '(?!00[02-5]|099|213|269|34[358]|353|419|42[89]|51[789]|529|53[36]|552|5[67]8|5[78]9|621|6[348]2|6[46]3|659|69[4-9]|7[034]2|709|715|771|81[789]|8[3469]9|8[4568]8|8[6-9]6|8[68]7|9[02]9|987)\\d{5}',
      },
    },
  },
  action
) => {
  console.log('s', action.payload)
  switch (action.type) {
    case SET_COUNTRY: {
      return {
        ...state,
        country: action.payload,
      }
    }
    default:
      return { ...state }
  }
}

export default configReducer
