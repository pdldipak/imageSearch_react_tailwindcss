import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Main } from './app.styles';
import Card from './components/Card';
import Search from './components/Search';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState('Nepal');

  const fetchImages = async (term) => {
    setLoading(true);
    await axios
      .get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
      )
      .then((response) => {
        // console.log(response.data.hits);
        setImages(response.data.hits);
      })
      .catch((error) => console.log(error.message));
    setLoading(false);
  };

  useEffect(() => {
    fetchImages(term);
  }, [term]);

  return (
    <Main>
      <Search searchText={(text) => setTerm(text)} />
      {!loading && images.length === 0 && (
        <h1 className='text-4xl text-red-600 text-center mx-auto mt-10'>
          Images not found
        </h1>
      )}
      {loading ? (
        <button
          type='button'
          className='bg-blue-200 text-4xl text-center mx-auto mt-10 focus:outline-none'
          disabled
        >
          <svg
            className='animate-spin h-5 w-5 mr-3'
            viewBox='0 0 24 24'
          ></svg>
          Processing
        </button>
      ) : (
        <section>
          {images?.map((image) => (
            <Card image={image} key={image.id} />
          ))}
        </section>
      )}
    </Main>
  );
}

export default App;
