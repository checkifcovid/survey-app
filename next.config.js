const withSass = require('@zeit/next-sass');
module.exports = withSass({
  env: {
    site_name: 'FindTheCluster.com',
    city: 'Toronto',
    api: {
      url: 'http://localhost:8080',
      username: 'admin',
      password: 'secret',
    },
  }
})
