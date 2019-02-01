import styled from 'styled-components';

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
align-items: center;
a {
  text-decoration: none;
  color: black;
  font-size: 18px;
}
`;

export default Wrapper;
