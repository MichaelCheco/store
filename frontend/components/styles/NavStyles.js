import styled from 'styled-components';

const Wrapper = styled.div`
border: 1px solid black;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
grid-template-rows: 75px;
align-items: center;
justify-items: center;
@media (max-width: 500px) {
  grid-template-columns: 100%;
  grid-template-rows: repeat(5, 50px);
  border: 1px solid black;
  a {
    display: block;
    border: 1px solid black;
    width: 100%;
    text-align: center;
    height: 50px;
    text-decoration: none;
  }
}
`;

export default Wrapper;
