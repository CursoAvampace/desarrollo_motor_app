import React from 'react';

function StagesTimeline({ item }) {
  return (
    <div className="stages-timeline">
      <h2>{item.title}</h2>
      <p>{item.content}</p>
    </div>
  );
}

export default StagesTimeline;
