import React from 'react';

export default function BusinessList({ business }) {
  return (
    <div>
      {business.map((biz, i) => (
        <a key={biz.phone + biz.name + i} href={biz.url} target="_blank" rel="noreferrer">
          <div className="yelp">
            <h2>{biz.name}</h2>
            <p>Ph: {biz.phone}</p>
            <img src={biz.image_url} alt="photo of biz" />
            <p>Price Range: {biz.price} / 5</p>
          </div>
        </a>
      ))}
    </div>
  );
}
