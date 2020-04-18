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
        lng: '',
      },
      emergency: '911', // Local emergency number
  }
  ...
}

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


