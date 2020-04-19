module.exports = {
  env: {
    site_name: 'CheckIfCovid',
    disease: 'COVID-19',
    country: {
      name: 'United States of America',
      short: 'US',
      coordinates: {
        lat: '',
        lng: '',
      },
      emergency: '911',
      zip: {
        regex: '(?!00[02-5]|099|213|269|34[358]|353|419|42[89]|51[789]|529|53[36]|552|5[67]8|5[78]9|621|6[348]2|6[46]3|659|69[4-9]|7[034]2|709|715|771|81[789]|8[3469]9|8[4568]8|8[6-9]6|8[68]7|9[02]9|987)\\\d{5}',
      },
    },
    api: {
      url: 'https://28geu7g1z5.execute-api.us-east-2.amazonaws.com',
      key: 'OZ0iAVZDRE2Xyno6ipwLP6qbZ9YbG61O8AdJ1u4s',
    },
    analytics: {
      google: 'UA-161728818-1',
    },
  },
}
