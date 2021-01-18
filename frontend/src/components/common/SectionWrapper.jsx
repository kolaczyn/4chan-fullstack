import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

// I should rename the component to e.g. HomeSection.jsx

export default function SectionWrapper({
  title, closeable, closeSection, children,
}) {
  return (
    <section className="border bg-white p-3 rounded mb-3">
      <header className="border-bottom d-flex justify-content-between mb-2 align-items-center">
        <h4 className="mb-0">{title}</h4>
        {closeable && <Button onClick={closeSection} aria-label="Close" close />}
      </header>
      <section>{children}</section>
    </section>
  );
}

SectionWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  closeable: PropTypes.bool,
  closeSection: PropTypes.func,
};

SectionWrapper.defaultProps = {
  closeable: false,
  closeSection: () => {},
};
