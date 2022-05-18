import React from 'react';

export default function Pokemon({ poke }) {
  return (
    <div>
      <h3>{poke.pokemon}</h3>
      <p>
        Type: {poke.type_1} / {poke.type_2}
      </p>
      <img src={poke.url_image} />
    </div>
  );
}
