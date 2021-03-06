import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 45vh;
  position: relative;
  ${mobile({})}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  ${mobile({ height: '40vh' })}
`;
const Info = styled.div`
  position: absolute;
  top: 35px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #f3e2e2;
    transform: scale(1.2);
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link className="rlink" to="/productlist">
          <Button>Shop Now</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
