import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './StarWarCharacters.css';

import Character from '../Character/Character';

function StarWarCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='characters'>
      {characters.map(char => {
        return <Character character={char} />;
      })}
    </div>
  );
}

export default StarWarCharacters;
