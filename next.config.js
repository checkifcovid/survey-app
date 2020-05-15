module.exports = {
  env: {
    site_name: 'CheckIfCovid',
    disease: {
      name: 'COVID-19',
      symptoms: [
        {
          label: 'Fever',
          key: 'fever',
          weight: 0,
        },
        {
          label: 'Cough',
          key: 'cough',
          weight: 0,
        },
        {
          label: 'Shortness of breath',
          key: 'shortness_breath',
          weight: 0,
        },
        {
          label: 'Chills or sweating',
          key: 'chills',
          weight: 1,
        },
        {
          label: 'Chest pain or pressure',
          key: 'chest_pain',
          weight: 1,
        },
        {
          label: 'Body aches',
          key: 'body_pain',
          weight: 1,
        },
        {
          label: 'Headache',
          key: 'headache',
          weight: 1,
        },
        {
          label: 'Diarrhea',
          key: 'diarrhea',
          weight: 1,
        },
        {
          label: 'Sneezing',
          key: 'sneezing',
          weight: 2,
        },
        {
          label: 'Runny nose',
          key: 'runny_nose',
          weight: 2,
        },
        {
          label: 'Rash',
          key: 'rash',
          weight: 2,
        },
        {
          label: 'Sore throat',
          key: 'sore_throat',
          weight: 2,
        },
        {
          label: 'Abdominal pain',
          key: 'abdominal_pain',
          weight: 2,
        },
        {
          label: 'Nausea or vomitting',
          key: 'nausea',
          weight: 2,
        },
        {
          label: 'Fatigue and/or weakness',
          key: 'fatigue',
          weight: 2,
        },
        {
          label: 'Reduced sense of taste and/or smell',
          key: 'reduced_smell_taste',
          weight: 2,
        },
      ],
    },
    countries: [
      {
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
      {
        name: 'Canada',
        short: 'CA',
        coordinates: {
          lat: '',
          lng: '',
        },
        emergency: '911',
        zip: {
          min: 6,
          max: 6,
          regex:
            '^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]{1}\\d{1}[A-Za-z]{1}\\d{1}[A-Za-z]{1}\\d{1}$',
        },
      },
      {
        name: 'United Kingdom',
        short: 'GB',
        coordinates: {
          lat: '',
          lng: '',
        },
        emergency: '999',
        zip: {
          min: 6,
          max: 8,
          regex:
            '(?!00[02-5]|099|213|269|34[358]|353|419|42[89]|51[789]|529|53[36]|552|5[67]8|5[78]9|621|6[348]2|6[46]3|659|69[4-9]|7[034]2|709|715|771|81[789]|8[3469]9|8[4568]8|8[6-9]6|8[68]7|9[02]9|987)\\d{5}',
        },
      },
      {
        name: 'Philippines',
        short: 'PH',
        coordinates: {
          lat: '',
          lng: '',
        },
        emergency: '911',
        zip: {
          min: 3,
          max: 4,
          regex: '\\d{3,4}',
        },
      },
    ],
    api: {
      url: 'https://28geu7g1z5.execute-api.us-east-2.amazonaws.com',
      key: 'OZ0iAVZDRE2Xyno6ipwLP6qbZ9YbG61O8AdJ1u4s',
    },
    analytics: {
      google: 'UA-161728818-1',
    },
  },
}
