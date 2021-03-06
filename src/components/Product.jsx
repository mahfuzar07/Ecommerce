import styled from 'styled-components';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7f8;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 98%;
  width: 98%;
  /* object-fit: cover; */

  border-radius: 10px;
  /* z-index: 2; */
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #d8d4d4;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: white;
    transform: scale(1.2);
  }
`;
function Product({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Link className="rlink" to="/product">
        <Info>
          <Link className="rlink" to="/product">
            <Icon>
              <SearchOutlinedIcon />
            </Icon>
          </Link>
          <Icon>
            <AddShoppingCartOutlinedIcon />
          </Icon>

          <Icon>
            <FavoriteBorderOutlinedIcon />
          </Icon>
        </Info>
      </Link>
    </Container>
  );
}

export default Product;
