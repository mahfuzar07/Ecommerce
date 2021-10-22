import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
  text-align: center;
  text-transform: uppercase;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    margin: '0px 20px',
    display: 'flex',
    flexDirection: 'column',
  })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  ${mobile({
    fontSize: '16px',
  })}
`;
const Select = styled.select`
  padding: 10px 15px;
  margin-right: 20px;
  ${mobile({
    margin: '5px 0px',
    padding: '6px 10px',
  })}
`;
const Option = styled.option``;

function ProductList() {
  return (
    <Container>
      <Announcement />
      <Navbar />

      <Title>Product</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product: </FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
          </Select>
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

        <Filter>
          <FilterText>Short Product: </FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price</Option>
            <Option>Price</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
