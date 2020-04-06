import React, { useState } from 'react';
import axios from 'axios';

const TestAxios = ({ url }) => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await axios.get(url);
    setData(response.data.greeting || "ERROR");
  };

  return (
    <>
      <button onClick={fetchData} data-testid='fetch-data'>load Data</button>
      {
        data ? 
        <div data-testid='show-data'>{data}</div> :
        <h1 data-testid='loading'>Loading...</h1>
      }
    </>
  );
};

export default TestAxios;