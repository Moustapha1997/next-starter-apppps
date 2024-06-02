import { useState, useEffect } from "react";

function MoviesPages() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch("/api/movie");
        const movie = await response.json();
        setMovie(movie);
      } catch (error) {
        console.error("Erreur lors de la récupération des films : ", error);
      }
    }

    fetchMovie();
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-blue-500 font-bold">Liste Des Films</h1>
      <table className="border-collapse border border-slate-400">
                <thead>
                    <tr>
                        <th className="border border-slate-300">Title</th>
                        <th className="border border-slate-300">Year</th>
                        
                    </tr>
                </thead>
        <tbody>
        {movie.map((movie) => (
          <tr key={movie.id}>
            <td>
            {movie.title} 
            </td>
            <td>
            {movie.releaseYear}
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

export default MoviesPages;