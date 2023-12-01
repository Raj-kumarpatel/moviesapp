import React, { useEffect, useState } from 'react';

const Favorites = () => {
  const [fav,setFav]=useState([]);
  useEffect(()=>{
    const item=localStorage.getItem("favourite")
    if(item){
      const parse=JSON.parse(item);
    setFav(parse);
  }
  },[])

  function handleremove(id){
  const upDated=fav.filter((ele)=>ele.imdbID!==id)
  setFav([...upDated])
    localStorage.setItem("favourite",JSON.stringify(upDated))
  }
  console.log(fav);
  return(
    <>{  
    fav &&
    fav.map((ele)=>(
      <div style={{display:"flext", flexWrap:"wrap",marginInline:"auto",justifyContent:"center"}}>
      <h3>{ele.Title}</h3>
      <p>Year: {ele.Year}</p>
      <p>Type: {ele.Type}</p>
      <img src={ele.Poster}/>
      <p>Type: {ele.Genre}</p>
      <p>Type: {ele.Released}</p>
      <button  onClick={()=>handleremove(ele.imdbID)}>Remove</button>
      </div>
    ))
  }
  </> 
  

  )
};

export default Favorites;