import React, {useEffect, useState} from 'react';

export default function UserDashboard() {
    const [email, setEmail] = useState('');
    /*const [favoriteMovieIds, setFavoriteMovieIds] = useState([]);
    todo this is only for the demo. We need to get the actual user id
    const userId = 1;*/

    useEffect(() => {
        const storedEmail = localStorage.getItem('token');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    /*    useEffect(() => {
            fetchFavoriteMovieIds();
        }, []);

        const fetchFavoriteMovieIds = async () => {
            try {
                const response = await fetch(`api/authentication/${userId}/favorite-movies`);
                if (!response.ok) {
                    throw new Error('Failed to fetch favorite movie IDs');
                }
                const data = await response.json();
                setFavoriteMovieIds(data);
            } catch (error) {
                console.error('Error fetching favorite movie IDs:', error);
            }
        };*/


    return (
        <>
            <>
                <h2 style={{color: 'white'}}>Welcome, {email}!</h2>
                <h2 style={{color: "white"}}>Your current favorite movies:</h2>
                {/*      <ul>
                    {favoriteMovieIds.map((movieId) => (
                        <li key={movieId}>{movieId}</li>
                    ))}
                </ul>*/}
                <h2 style={{color: "white"}}>Our recommendations for you:</h2>
            </>
        </>
    );
}


/*const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

      async function checkAuthentication() {
          const token = localStorage.getItem("token");
          const uri = LOGIN_URL;
          if (token) {
              const response = await fetch(uri, {
                  headers: {
                      'Authorization': 'Bearer ' + token
                  }
              });
              if (response.ok) {
                  setAuthenticated(true);
              } else {
                  navigate('/login');
              }
          } else {
              navigate('/login');
          }
      }

      useEffect(() => {
          checkAuthentication().catch(error => console.error(error));
      }, []);*/