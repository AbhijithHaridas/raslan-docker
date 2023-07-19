import React, { useEffect, useState } from "react";
import Movie from "./Movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8000/api/movies/");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const deleteMovie = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/movies/${id}/`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h1>My Movie List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {movies.length > 0 && (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              name={movie.name}
              description={movie.description}
              onDelete={() => deleteMovie(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
