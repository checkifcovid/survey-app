import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import 'react-google-places-autocomplete/dist/index.min.css'

// Redux
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import store from '../redux/store'

// Material UI
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import Layout from '../components/layouts/default'

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    //Anything returned here can be accessed by the client
    return { pageProps: pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <>
        <Head>
          <title>{process.env.site_name}</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Provider>
      </>
    )
  }
}

const makeStore = () => store
export default withRedux(makeStore)(MyApp)
