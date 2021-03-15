![CheckIfCovid US](https://github.com/checkifcovid/survey-app/workflows/CheckIfCovid%20US/badge.svg)

## How to use

Install it and run:

```sh
npm install
npm run dev
```

## Development process

Overview of some development tools, processes, and guidelines for this hackathon

## Configure
A deployment can be configured through `next.config.js`. Each deployment is specific to a country so you need to change the values:
```sh
{
  ...
  country: {
    name: 'United States of America',
    short: 'US',
    coordinates: {
      lat: '',
      lon: '',
    },
    emergency: '911', // Local emergency number!
    zip: {
      min: 5,
      max: 5,
      regex: '(?!00[02-5]|099|213|269|34[358]|353|419|42[89]|51[789]|529|53[36]|552|5[67]8|5[78]9|621|6[348]2|6[46]3|659|69[4-9]|7[034]2|709|715|771|81[789]|8[3469]9|8[4568]8|8[6-9]6|8[68]7|9[02]9|987)\\\d{5}',
      },
  }
  ...
}
```

### Typescript

Try to type your components as much as possible :) 
this wont be enforced, so if you don't have experience with typescript don't worry too much about it.

### Storybook

Storybook is integrated into this project. Please use it as much as you can in order to keep track of
what components are available in the project. To learn more about storybook you can check out storybook.js.

### Contributing to the project

Please branch off of dev when working on your feature! 
In order to iterate quickly and not hold people back, dev will be free of restrictions (though I highly recommend getting
at least one person to review your PR!). 
However, master (prod) will be blocked. We will deploy to prod on a daily basis.  


