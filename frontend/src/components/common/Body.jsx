/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components/macro';

const Body = styled.div`
  background-color: #eef2ff;
  /* for some reason this fixes logo 'jerking' */
  min-height: 101vh;
`;

const BodyWithBootstrapClasses = (props) => <Body className="pb-4" {...props} />;
export default BodyWithBootstrapClasses;
