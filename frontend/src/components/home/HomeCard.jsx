import React from 'react';
import PropTypes from 'prop-types';

// I should rename the component to e.g. HomeSection.jsx

export default function HomeCards({ title, children }) {
  return (
    <section className="border mb-3 bg-white p-3 rounded">
      <h4 className="border-bottom">{title}</h4>
      <section>{children}</section>
    </section>
  );
}

HomeCards.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
