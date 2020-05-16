import React from 'react'
import SlackFeedback from 'react-slack-feedback'

import Menu from './menu'
import Footer from './footer'

const sendToServer = (payload, success, error) => {
  return fetch('/api/slack', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
    .then(success)
    .catch(error)
}

const Layout = ({ children }) => (
  <>
    <Menu />
    {children}
    <Footer />
    <SlackFeedback
      channel="#feedback"
      showIcon={false}
      showChannel={false}
      user="Slack Feedback" // The logged in user (default = "Unknown User")
      onSubmit={(payload, success, error) =>
        sendToServer(payload)
          .then(success)
          .catch(error)
      }
    />
    ,
  </>
)
export default Layout
