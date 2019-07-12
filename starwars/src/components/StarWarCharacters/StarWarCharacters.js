import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Character from '../Character/Character';
import {Characters} from './StarWarCharctersStyle';

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
    <Characters>
      {characters.map(char => {
        return <Character character={char} />;
      })}
    </Characters>
  );
}

export default StarWarCharacters;
