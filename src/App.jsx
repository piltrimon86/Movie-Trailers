import React, { useEffect, useState } from 'react'
import axios from 'axios'
import YouTube from 'react-youtube'
import './App.css'

const App = () => {
    const API_URL = 'https://api.themoviedb.org/3'
    const API_KEY = '31e525640d7e0c401602ee3129373d56'
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

    // Variables de estado

    const [movies, setMovies] = useState([])
    const [searchKey, setSearchKey] = useState('')
    const [trailer, setTrailer] = useState(null)
    const [movie, setMovie] = useState({ title: 'Loading Movies' })
    const [playing, setPlaying] = useState(false)

    // Función para relaizar la petición por Get a la API

    const fetchMovies = async (searchKey) => {
        const type = searchKey ? 'search' : 'discover'
        const {
            data: { results },
        } = await axios.get(`${API_URL}/${type}/movie`, {
            params: {
                api_key: API_KEY,
                query: searchKey,
            },
        })

        setMovies(results)
        setMovie(results[0])
    }

    // Función para buscar películas

    const searchMovies = (e) => {
        e.preventDefault()
        fetchMovies(searchKey)
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <div>
            <h2 className="text-center mt-5 mb-5">Trailer Movies</h2>
            {/* BUSCADOR */}

            <form className="container mb-4" onSubmit={searchMovies}>
                <input
                    type="text"
                    placeholder="search"
                    onChange={(e) => setSearchKey(e.target.value)}
                />
                <button className="btn btn-primary">Search</button>
            </form>

            {/* CONTENDOR QUE MUESTRA LAS PELICULAS ACTUALES */}
            <div className="container mt-3">
                <div className="row">
                    {movies.map((movie) => (
                        <div key={movie.id} className="col-md-4 mb-3">
                            <img
                                src={`${URL_IMAGE + movie.poster_path}`}
                                alt=""
                                height={600}
                                width="100%"
                            />
                            <h4 className="text-center">{movie.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
