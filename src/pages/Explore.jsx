import React from 'react'
import './Explore.css'
import { useSelector } from 'react-redux'
import { selectisMobile } from '../features/isMobileSlice'
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from '../app/axios';
import requests from '../app/Request';
import Card from '../components/Card';
import BottomBar from '../components/BottomBar';
import { Link, useParams } from 'react-router-dom';

export default function Explore() {

    const isMobile = useSelector(selectisMobile);
    const [exploreMovies, setExploreMovies] = useState([]);
    const {genre} = useParams();

    // useEffect(() => {
    //     const fetchExploreMovies = async () => {
    //         const res = await axios.get(requests.fetchNowPlaying);
    //         setExploreMovies(res.data.results);
    //     };
    //     fetchExploreMovies();
    // }, [genre]);

    useEffect(() => {
        const fetchExploreMovies = async () => {
            let res;
            switch (genre) {
                case 'popular':
                    res = await axios.get(requests.fetchPopular);
                    break;
                case 'top':
                    res = await axios.get(requests.fetchTrendingDay);
                    break;
                case 'test':
                    res = await axios.get(requests.fetchCuratedList);
                    break;
                default:
                    res = await axios.get(requests.fetchNowPlaying);
            }
            setExploreMovies(res.data.results);
        };
        fetchExploreMovies();
    }, [genre]);

    return (
        <div className='explore--main'>
            { isMobile && <BottomBar/>}
            <div className="explore--sidebar">
                {!isMobile && <Sidebar />}
            </div>
            <div className={`explore--content ${ isMobile && "explore--content-margin"}`}>
                <div className="explore--title">Explore Movies</div>
                <div className="explore--navigation">
                    <Link to="/explore/popular" className='explore--navigation--links'>
                        <div className="explore--navigation--link">Popular</div>
                    </Link>
                    <Link to="/explore/top" className='explore--navigation--links'>
                        <div className="explore--navigation--link">Top Rated</div>
                    </Link>
                    <Link to="/explore/test" className='explore--navigation--links'>
                        <div className="explore--navigation--link">Test</div>
                    </Link>
                </div>
                <div className="explore--card">
                    {
                        exploreMovies?.map((movies) => {
                            return (
                                <div key={movies.id}>
                                    <Card title={movies.title} date={movies.release_date} image={movies.poster_path}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
