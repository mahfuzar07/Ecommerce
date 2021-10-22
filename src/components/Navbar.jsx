import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: '50px',
  })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    padding: '10px 0px',
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: 'none',
  })}
`;
const SearchContent = styled.div`
  display: flex;
  border: 1px solid lightgray;
  align-items: center;
  margin-left: 10px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({
    width: '40px',
  })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  ${mobile({
    fontSize: '14px',
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: 'center',
    flex: 2,
  })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: '12px',
    marginleft: '10px ',
  })}
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContent>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: 'gray', fontSize: '16px' }} />
          </SearchContent>
        </Left>
        <Center>
          <Logo>easy-shop</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign-In</MenuItem>
          <MenuItem style={{ marginRight: '25px' }}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
