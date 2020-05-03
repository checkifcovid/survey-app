import fetch from 'isomorphic-unfetch'

export default (req, res) => {
  console.log('reb', req.body)
  // Call the AWS API
  fetch(process.env.SLACK_HOOK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: req.body,
  })
    //.then(response => response.json())
    .then(response => {
      console.log('r', response)
      res.status(response.status).json(response.statusText)
    })
    .catch(error => console.log(error))
}
