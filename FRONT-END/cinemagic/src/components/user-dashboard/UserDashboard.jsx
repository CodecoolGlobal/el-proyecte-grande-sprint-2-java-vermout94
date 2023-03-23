import React, {useEffect, useState} from 'react';

export default function UserDashboard() {
    const [email, setEmail] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('token');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);


    return (
        <>
            <>
                <p style={{color: 'white'}}>Welcome, {email}!</p>
                <p style={{color: "white"}}>Your current favorite movies:</p>
                <p style={{color: "white"}}>Our recommendations for you:</p>
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