import React from 'react';

function SummarySection({ item }) {
  return (
    <div className="summary-section">
      <h2>{item.title}</h2>
      <p>{item.content}</p>
    </div>
  );
}

export default SummarySection;
