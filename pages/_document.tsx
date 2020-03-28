import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'

// TODO replace with footer
function Copyright() {
  return (
    <Grid>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <MuiLink color="inherit" href="http://localhost:3000">
          {process.env.site_name}
        </MuiLink>
        {' '}
        {new Date().getFullYear()}
        .
      </Typography>
    </Grid>
  )
}

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Copyright />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  }
}
