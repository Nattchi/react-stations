// DO NOT DELETE
import React from 'react'
import DogImage from './DogImage'

export function Description() {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  async function updateImage() {
    await fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        setDogUrl(data.message)
      })
  }

  return (
    <>
      <div>
        <h2>犬の画像を表示するサイトです</h2>
        <DogImage dogUrl={dogUrl} />
      </div>
      <div>
        <button onClick={updateImage}>更新</button>
      </div>
    </>
  )
}
