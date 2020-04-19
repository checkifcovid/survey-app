import fetch from 'isomorphic-unfetch'

export default (req, res) => {
  console.log('reb', req.body)
  // Call the AWS API
  fetch(`${process.env.api.url}/dev/stats`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.api.key,
    },
    body: JSON.stringify({}),
  })
    .then((response) => response.json())
    .then((response) => {
      res.status(response.statusCode).json(response.body)
    })
    .catch((error) => console.log(error))
}
