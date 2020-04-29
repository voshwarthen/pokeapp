import React from "react"
import "./pokemon.css"

export default ({ name, url }) => {

  const [thumbnail, setThumbnail] = React.useState()
  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(pokemon => setThumbnail(pokemon.sprites.front_default))
  }, [])

  function handleClick(event) {
    console.log(event.target)
  }

  return <div className="pokemon" onClick={() => handleClick}>
    {<img alt="img" src={thumbnail} />}
    <br></br>
    <span>{name}</span>

  </div>
}
