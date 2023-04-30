// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Header } from './Header'
import { Description } from './Description'
import { DogImage } from './DogImage'
/**
 *
 * @type {React.FC}
 */
export const App = () => {
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
      <Header />
      <Description>
        <DogImage url={dogUrl} />
      </Description>
      <div>
        <button onClick={updateImage}>更新</button>
      </div>
    </>
  )
}
