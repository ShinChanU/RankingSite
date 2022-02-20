import React from 'react';
import axios from 'axios';

const SearchForm = () => {
  const onClick = () => {
    axios
      .get('api/data')
      .then((res) => {
        console.log('Success');
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="form">
      <input type="text" className="form-text" />
      <button type="button" className="form-btn" onClick={onClick}>
        search
      </button>
    </div>
  );
};

export default SearchForm;
