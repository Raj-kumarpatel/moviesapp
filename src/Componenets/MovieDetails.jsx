
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const MovieDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState('')
  let url = `https://www.omdbapi.com/?&apikey=ee4c3e02&i=${id}`
  async function fetchData() {
    let res = await fetch(url);
    let data = await res.json()
    console.log(data);
    setState(data)
  }
  useEffect(() => {
    fetchData();
  },[])
  function handlefavourite(){
    const favItem=JSON.parse(localStorage.getItem("favourite"))||[];
    const favData=[...favItem,state]
    localStorage.setItem("favourite",JSON.stringify(favData))
    console.log("working")
  }
  return (


    <div className="movie-card" style={{ display: 'flex', width: "200px", height: "200px", marginTop: "10px", gap: "20px",marginInline:"auto", flexWrap:"wrap" }}>
      <div><img src={state.Poster} alt={`Poster for ${state.Title}`} /></div>
      <div> <h3>{state.Title}</h3>
        <p>Year: {state.Year}</p>
        <p>Type: {state.Type}</p>
        <p>IMDB ID: {state.imdbID}</p>
        <p>Type: {state.Genre}</p>
        <p>Type: {state.Released}</p></div>
    <button onClick={handlefavourite}>Add to favourite</button>
    </div>


  )

}

export default MovieDetails