
import React from 'react';
import { useLocation } from 'react-router-dom';


const HomePage = () => {
  // const { token } = useParams(); 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type');
  const token = queryParams.get('token');

  return (
    <div>
      <h2>Welcome</h2>
      <p>This is your home page.</p>
      <p>Token is: {token}</p>
      <p>Type is: {type}</p>
    </div>
  );
};

export default HomePage;
