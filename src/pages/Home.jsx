import React, { useEffect, useState } from 'react'
import SliderOwn from '../components/SliderOwn'
import './Home.css'
import axios from '../app/axios'
import requests from '../app/Request'
import Sidebar from '../components/Sidebar'
import ImgSlider from '../components/ImgSlider'
import { useSelector } from 'react-redux'
import { selectisMobile } from '../features/isMobileSlice'
import { selectage } from '../features/isMobileSlice'

export default function Home() {

    const [curatedMovie, setCuratedMovie] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [trendingDayMovies, setTrendingDayMovies] = useState([]);
    const [trendingWeekMovies, setTrendingWeekMovies] = useState([]);
    const [netflixOriginalMovies, setNetflixOriginalMovies] = useState([]);
    const isMobile = useSelector(selectisMobile);
    const newage = useSelector(selectage);

    useEffect(() => {
        const fetchCuratedMovies = async () => {
            const res = await axios.get(requests.fetchCuratedList);
            setCuratedMovie(res.data.items);
        }
        const fetchNowPlayingMovies = async () => {
            const res = await axios.get(requests.fetchNowPlaying);
            setNowPlayingMovies(res.data.results);
        };
        const fetchTrendingDayMovies = async () => {
            const res = await axios.get(requests.fetchTrendingDay);
            setTrendingDayMovies(res.data.results);
        };
        const fetchTrendingWeekMovies = async () => {
            const res = await axios.get(requests.fetchTrendingWeek);
            setTrendingWeekMovies(res.data.results);
        };
        const fetchNetflixOrinalMovies = async () => {
            const res = await axios.get(requests.fetchNetflixOriginal);
            setNetflixOriginalMovies(res.data.results);
        };
        fetchCuratedMovies();
        fetchNowPlayingMovies();
        fetchTrendingDayMovies();
        fetchTrendingWeekMovies();
        fetchNetflixOrinalMovies();
    }, []);

    return (
        <>
            <div className="home__wrapper">
                <div className="home__Sidebar">
                    { !isMobile && <Sidebar />}
                </div>
                <div className={`home__Slider ${ isMobile && "mobile"}`}>
                    <SliderOwn slide={curatedMovie} />
                </div>
            </div>
            <h2>Now Playing Movies {newage}</h2>
            <ImgSlider movie={nowPlayingMovies}/>
            <h2>Trending Movies today:</h2>
            <ImgSlider movie={trendingDayMovies}/>
            <h2>Trending Movies this Week</h2>
            <ImgSlider movie={trendingWeekMovies}/>
            <h2>Netflix Originals:</h2>
            <ImgSlider movie={netflixOriginalMovies}/>
        </>
    )
}
