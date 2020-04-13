import fetch from 'isomorphic-unfetch'

export default (req, res) => {
  // Call the AWS API
  fetch(`${process.env.api.url}/dev/survey`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': process.env.api.key,
    },
    body: JSON.stringify(req.body),
  })
    .then((response) => {
      res.status(response.status).json({
        status: response.status,
        message: response.statusText,
      })
    })
    .catch((error) => console.log(error))
}
