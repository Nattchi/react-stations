// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  return (
    <>
      <header>Dog App</header>
      <div>
        <h2>犬の画像を表示するサイトです</h2>
        <img src={dogUrl} alt="dog" />
      </div>
    </>
  )
}
