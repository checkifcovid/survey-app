import React, { useEffect, useState } from 'react'

const Zip = ({ code }) => {
  const [location, setLocation] = useState('')

  useEffect(() => {
    fetch(`/api/zip?code=${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.api.key,
      },
    })
      .then(response => response.json())
      .then(response => {
        const record = response.records[0]
        setLocation(record.fields.city + ', ' + record.fields.state)
      })
      .catch(error => console.log(error))
  }, [])
  return <span>"{location}"</span>
}

export default Zip
