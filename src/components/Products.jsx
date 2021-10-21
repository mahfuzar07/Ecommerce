import styled from 'styled-components';
import { populerProducts } from '../data';
import Product from './Product';
const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
function Products() {
  return (
    <Container>
      {populerProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Products;
