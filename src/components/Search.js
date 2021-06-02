import React, { useState } from 'react';
import './Search.css';

const Search = ({ searchText }) => {
  const [text, setText] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className='bg-green-500 hover:bg-green-300 rounded text-white py-2 px-4'
        type='submit'
      >
        <p>Search</p>
      </button>
    </form>
  );
};

export default Search;
