import fetch from 'isomorphic-unfetch'

export default (req, res) => {
  const { code } = req.query
  console.log(req.query)
  fetch(
    `https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=${code}&facet=state&facet=timezone&facet=dst`
  )
    .then(response => response.json())
    .then(response => {
      ///console.log('rrr', response)
      // if (response.length > 0) {
      //   const data = response.find(
      //     o =>
      //       o.Country_Region === 'US' &&
      //       o.Province_State === 'New York' &&
      //       o.Admin2 === 'New York City'
      //   )
      //   res.status(200).json(data)
      // }
      res.status(200).json(response)
    })
    .catch(error => console.log(error))
}
