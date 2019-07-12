import React from 'react';
import './Characters.css';

function Character(props) {
  console.log(props.character.name);
  return (
    <div class='char-container'>
      <div className='char'>
        <h3>Name: {props.character.name}</h3>
        <h4>Birthday: {props.character.birth_year}</h4>
        <h4>Eye-Color: {props.character.eye_color}</h4>
        <h4>Skin-Color: {props.character.skin_color}</h4>
      </div>
    </div>
  );
}

export default Character;
