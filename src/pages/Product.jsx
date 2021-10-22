import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 6px;
  cursor: pointer;
`;
const Select = styled.select`
  padding: 8px;
  margin-left: 10px;
`;
const Option = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: white;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: #e2dede;
  }
`;
function Product() {
  return (
    <Container>
      <Announcement />
      <Navbar />

      <Wrapper>
        <ImageContainer>
          <Image src="https://cdn-magento2-media.head.com/wysiwyg/Gravity_Pull_Carousel_IGcoreFr-1.jpg"></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>Dress</Title>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            culpa totam quos incidunt dolores! Vel ipsum laborum quas magni sit
            fuga asperiores, dolorem ut recusandae quae ab, voluptatibus
            officiis autem voluptatum ratione sunt pariatur magnam delectus
            possimus, sint expedita architecto et a. Reiciendis voluptates,
            eveniet hic quidem a assumenda autem.
          </Desc>
          <Price>$ 254</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle> Color: </FilterTitle>
              <FilterColor color="Black" />
              <FilterColor color="Orange" />
              <FilterColor color="Blue" />
            </Filter>
            <Filter>
              <FilterTitle> Size : </FilterTitle>
              <Select>
                <Option disabled selected>
                  Size
                </Option>
                <Option>XL</Option>
                <Option>X</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>S</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;