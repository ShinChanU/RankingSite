import React from 'react';
import axios from 'axios';

function App() {
  const onClick = () => {
    axios.get('api/data').then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <button onClick={onClick}>search</button>
    </div>
  );
}

export default App;
