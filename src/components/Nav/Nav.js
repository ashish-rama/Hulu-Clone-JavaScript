import React from 'react';
import './Nav.css';
import { obj } from '../../requests';

function Nav({ setSelectedOption }) {
    return (
        <div className="nav">
            <h2 onClick={() => setSelectedOption(obj.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setSelectedOption(obj.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={() => setSelectedOption(obj.fetchActionMovies)}>Action</h2>
            <h2 onClick={() => setSelectedOption(obj.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={() => setSelectedOption(obj.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={() => setSelectedOption(obj.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={() => setSelectedOption(obj.fetchMystery)}>Mystery</h2>
            <h2 onClick={() => setSelectedOption(obj.fetchSciFi)}>Sci-fi</h2>
            <h2 onClick={() => setSelectedOption(obj.fetchWestern)}>Western</h2>
            <h2 onClick={() => setSelectedOption(obj.fetchAnimation)}>Animation</h2>
            <h2 onClick={() => setSelectedOption(obj.fetchTV)}>TV Movie</h2>
        </div>
    )
}

export default Nav
