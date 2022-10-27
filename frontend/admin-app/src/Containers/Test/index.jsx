import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.scss';

const ROOT = 'container__test';
const Test = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://premium-anime-mobile-wallpapers-illustrations.p.rapidapi.com/rapidHandler/search',
      params: { page: '0', sensitivity: '0', searchText: 'Naruto', exact: '0', quality: '0' },
      headers: {
        'X-RapidAPI-Key': '5ff3995fc2msh996d231d0323b33p18aa76jsn92fececb124a',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setImageData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className={`${ROOT}__image-container`}>
        {imageData &&
          Array.isArray(imageData) &&
          imageData.map((e) => {
            return (
              <div key={e.art_id} className={`${ROOT}__image-div`} >
                <img src={e.arturl} width="100%" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Test;
