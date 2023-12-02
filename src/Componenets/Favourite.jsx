import React, { useEffect, useState } from 'react';
import "./Favourite.css"
const Favorites = () => {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const item = localStorage.getItem("favourite");
    if (item) {
      const parse = JSON.parse(item);
      setFav(parse);
    }
  }, []);

  function handleremove(id) {
    const updated = fav.filter((ele) => ele.imdbID !== id);
    setFav([...updated]);
    localStorage.setItem("favourite", JSON.stringify(updated));
  }

  return (
    <div  className='fav'>
      {fav &&
        fav.map((ele) => (
          <div key={ele.imdbID}  >
            <img src={ele.Poster} alt={`${ele.Title} Poster`} />
            <h3>{ele.Title}</h3>
            <p>Year: {ele.Year}</p>
            <p>Type: {ele.Type}</p> 
            <p>Genre: {ele.Genre}</p>
            <p>Released: {ele.Released}</p>
            <button onClick={() => handleremove(ele.imdbID)}>Remove</button>
          </div>
        ))}
    </div>
  );
};

export default Favorites;
