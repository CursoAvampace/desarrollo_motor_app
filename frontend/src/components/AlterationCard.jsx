import React from 'react';

function AlterationCard({ item }) {
  return (
    <div className="alteration-card">
      <h2>{item.title}</h2>
      <p>{item.content}</p>
    </div>
  );
}

export default AlterationCard;
