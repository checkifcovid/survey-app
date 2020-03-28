module.exports = {
  env: {
    site_name: 'FindTheCluster.com',
    city: 'Toronto',
    api: {
      url: 'http://localhost:8080',
      username: 'admin',
      password: 'secret',
    },
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    webpack.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    },)
    return config;
  }
}
