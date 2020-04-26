import fetch from 'isomorphic-unfetch'

export default (req, res) => {
  const { date } = req.query
  fetch(
    `https://rlp60sprib.execute-api.us-east-1.amazonaws.com/daily_reports/date?date=${date}`
  )
    .then(response => response.json())
    .then(response => {
      // console.log('rrr', response)
      if (response.length > 0) {
        const data = response.find(
          o =>
            o.Country_Region === 'US' &&
            o.Province_State === 'New York' &&
            o.Admin2 === 'New York City'
        )
        res.status(200).json(data)
      }
    })
    .catch(error => console.log(error))
}
