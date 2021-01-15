/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components/macro';

const Body = styled.main`
  background-color: #eef2ff;
  min-height: 100vh;
`;

const BodyWithBootstrapClasses = (props) => <Body className="pb-4" {...props} />;
export default BodyWithBootstrapClasses;
