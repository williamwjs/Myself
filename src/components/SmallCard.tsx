import React from 'react';

export default function SmallCard({ title, slug }) {
  return (
    <a className="card-small" href={`/project/${slug}`}>
      <h3>{title}</h3>
    </a>
  );
}
