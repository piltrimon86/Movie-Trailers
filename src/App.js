import React, { useState } from 'react'
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

    return <div></div>
}

export default App
