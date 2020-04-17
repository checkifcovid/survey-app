import fetch from 'isomorphic-unfetch'

export default (req, res) => {
  // Call the AWS API
  fetch(`${process.env.api.url}/dev/stats`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.api.key,
    },
    body: req.body,
  })
    .then((response) => response.json())
    .then((response) => {
      res.status(response.statusCode).json(response.body)
    })
    .catch((error) => console.log(error))
}
