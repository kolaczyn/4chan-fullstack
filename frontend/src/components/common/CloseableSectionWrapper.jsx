/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SectionWrapper from './SectionWrapper';

export default function CloseableSectionWrapper({ title, ...props }) {
  // TODO make remember that it was closed
  const [isClosed, setIsClosed] = useState(false);
  const closeSection = () => {
    setIsClosed(true);
    localStorage.setItem(title, 'closed');
  };

  useEffect(() => {
    // pretty bad name
    const storageState = localStorage.getItem(title);
    console.log(storageState);
    if (storageState === 'closed') setIsClosed(true);
  }, []);

  return (
    isClosed || <SectionWrapper closeable closeSection={closeSection} title={title} {...props} />
  );
}

CloseableSectionWrapper.propTypes = {
  title: PropTypes.string.isRequired,
};
