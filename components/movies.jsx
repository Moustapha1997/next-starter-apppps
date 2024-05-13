export default async function handler(rec, res){
    const response = await fetch("https://teactnative.dev/movies.json")
    const movies = await response.json();
    res.status(200),json (movies.movies)
}