// DO NOT DELETE
import React from 'react'

export function DogListContainer() {
  const [breeds, setBreeds] = React.useState()

  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        setBreeds(Object.keys(data.message))
      })
  }, [])
  return <div>DogListContainer</div>
}
