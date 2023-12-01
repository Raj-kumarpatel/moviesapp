
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './HomePage.css';

const MovieSearch = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [movieType, setMovieType] = useState('');//filtering state
  const [sortOption, setSortOption] = useState(''); // New state for sorting option

  useEffect(() => {
    const handleSearch = async () => {
      const url=`https://www.omdbapi.com/?&apikey=ee4c3e02`
      const params = {
        s: searchTerm,
        type:movieType,
      
    };
      try {
        const response = await axios.get(url,{params})     
        console.log(response.data.Search)
        let sortedResults = response.data.Search || [];
        // Sort based on the selected option
        if (sortOption === 'latest') {
          sortedResults = sortedResults.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
        } else if (sortOption === 'old') {
          sortedResults = sortedResults.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
        }
        setSearchResults(sortedResults);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // Perform search whenever searchTerm, movieType, or sortOption changes
    handleSearch();
  }, [searchTerm, movieType, sortOption]); // Depend on searchTerm, movieType, and sortOption

 
  return (
    <div className="movie-search">
      <h2>Movie Search</h2>
      <div>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <label>
          Filter by Type:
          <select value={movieType} onChange={(e) => setMovieType(e.target.value)}>
            <option value="">All Types</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
          <button onClick={() => setMovieType('')}>Reset type</button>
        </label>

        <label>
          Sort by:
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="">Sort</option>
            <option value="letest">Latest</option>
            <option value="old">Old</option>
          </select>
        </label>
      </div>

      <div className="movie-list">
        {searchResults.map((movie) => (
          <div key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
            <p>Type: {movie.Type}</p>
            <p>IMDB ID: {movie.imdbID}</p>
            <Link to={`/${movie.imdbID}`}>    <img src={movie.Poster} alt={`Poster for ${movie.Title}`} /></Link>.
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;

