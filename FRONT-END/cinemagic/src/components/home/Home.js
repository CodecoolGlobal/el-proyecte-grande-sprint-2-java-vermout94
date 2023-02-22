import React, {useEffect, useState} from 'react';

function Home(props) {

    const { data } = props;
    console.log(props);

    return (
        <div>
            { JSON.stringify(props) }
            <h2>Latest Movies</h2>
            <ul>
                {Array.isArray(data) && data.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Home