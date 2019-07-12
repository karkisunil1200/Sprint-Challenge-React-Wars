import React from 'react';

import {CharStyle} from './CharacterStyle';

function Character(props) {
  return (
    <div class='char-container'>
      <CharStyle>
        <h3>Name: {props.character.name}</h3>
        <h4>Birthday: {props.character.birth_year}</h4>
        <h4>Eye-Color: {props.character.eye_color}</h4>
        <h4>Skin-Color: {props.character.skin_color}</h4>
      </CharStyle>
    </div>
  );
}

export default Character;
