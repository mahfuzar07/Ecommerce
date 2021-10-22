import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import { mobile } from '../responsive';

const Container = styled.div`
  /* width: 100%;
  height: 100vh; */
`;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
  color: #507777;
  cursor: pointer;
  margin: 0px 10px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'teal' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
  border-radius: 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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
  ${mobile({ margin: '5px 15px' })}
`;
const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 300;
  ${mobile({ marginBottom: '20px' })}
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #00808028;
  border-radius: 10px;
  padding: 10px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: center;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '22px'};
`;
const SummaryItemtext = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 10px;
  font-weight: 600;
`;
const Hr = styled.hr`
  background-color: #00808028;
  border: none;
  height: 2px;
  margin: 2px;
`;

function Cart() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>
              Shopping Bag
              <Badge badgeContent={1} color="secondary">
                <ShoppingBagIcon />
              </Badge>
            </TopText>
            <TopText>
              Your wishlist
              <Badge badgeContent={1} color="secondary">
                <FavoriteIcon />
              </Badge>
            </TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733_900x.jpg?v=1576267132" />
                <Details>
                  <ProductName>
                    <b>Product : </b> Dress
                  </ProductName>
                  <ProductId>
                    <b>Id : </b> SKl-14562
                  </ProductId>

                  <ProductSize>
                    <b>Size : </b> S
                  </ProductSize>
                  <ProductColor color="black" />
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <RemoveIcon />
                  <Amount>1</Amount>
                  <AddIcon />
                </ProductAmountContainer>
                <ProductPrice>$125</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemtext>Sub Total</SummaryItemtext>
              <SummaryItemPrice>$100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemtext>Estimated Shipping</SummaryItemtext>
              <SummaryItemPrice>$100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemtext>Shipping Discount</SummaryItemtext>
              <SummaryItemPrice>$100</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemtext>TOTAL</SummaryItemtext>
              <SummaryItemPrice>$100</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
}

export default Cart;
