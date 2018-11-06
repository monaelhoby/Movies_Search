import React from 'react';

import './Search.css';

const Search = (props) => {
    let resultList = null

    if (props.searching && (props.defaultTitle !== '')) {
        resultList = (
            <ul className="results">
                {props.results.map(item => (
                    <li key={item.imdbID} onClick={() => props.clicked(item)}>
                        <img src={item.Poster} alt="Movie Poster"/>
                        <span>{item.Title}</span>
                    </li>
                ))}
            </ul>
        )
    }

return (
        <div className="search">
            <input type="search" name="movie-search" value={props.defaultTitle} onChange={props.search} />
            <div>{resultList}</div>
        </div>
    );
};

export default Search;
