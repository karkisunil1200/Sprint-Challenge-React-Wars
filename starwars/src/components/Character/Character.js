import React from 'react';

function Character(props) {
  console.log(props.character.name);
  return (
    <div>
      <h1>{props.character.name}</h1>
    </div>
  );
}

export default Character;
