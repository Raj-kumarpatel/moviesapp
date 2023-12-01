
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const MovieDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState('')
  let url = `http://www.omdbapi.com/?&apikey=ee4c3e02&i=${id}`
  async function fetchData() {
    let res = await fetch(url);
    let data = await res.json()
    console.log(data);
    setState(data)
  }
  useEffect(() => {
    fetchData();
  })
  return (


    <div className="movie-card" style={{ display: 'flex', width: "200px", height: "200px", marginTop: "10px", gap: "20px",marginInline:"auto", flexWrap:"wrap" }}>
      <div><img src={state.Poster} alt={`Poster for ${state.Title}`} /></div>
      <div> <h3>{state.Title}</h3>
        <p>Year: {state.Year}</p>
        <p>Type: {state.Type}</p>
        <p>IMDB ID: {state.imdbID}</p>
        <p>Type: {state.Genre}</p>
        <p>Type: {state.Released}</p></div>

    </div>


  )

}

export default MovieDetails