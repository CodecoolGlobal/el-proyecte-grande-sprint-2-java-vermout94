import React from 'react';

function Home(props) {

    const { data } = props;

    return (
        <div>
            <h2>Latest Movies</h2>
            <ul>
                {data && data.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Home