import styled from 'styled-components/macro'
const Body = styled.main`
  background-color: #eef2ff;
  min-height: 100vh;
`;

// this thing works, which is kinda cool
const BodyWithBootstrapClasses = (props) => <Body className="pb-4" {...props}/>
export default BodyWithBootstrapClasses;