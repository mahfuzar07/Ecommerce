import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
  height: 50vh;
  background-color: #f5eeee;
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 900;
  cursor: pointer;
  color: teal;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 20px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Easy Shop</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          cupiditate iure incidunt, labore maxime quos magni doloribus magnam
          natus, odit, quo iusto tenetur nisi voluptate!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon></FacebookIcon>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon></InstagramIcon>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon></TwitterIcon>
          </SocialIcon>
          <SocialIcon color="3B5999">
            <LanguageIcon></LanguageIcon>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms And Condition</ListItem>
          <ListItem>Order Tracking</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: '15px' }} />
          Dhaka ,Bangladesh
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: '15px' }} />
          0173841134
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: '15px' }} />
          mahfuzar@gmail.com
        </ContactItem>
        <Payment src="https://www.ttequipment.co.uk/wp-content/uploads/2018/03/AM_SbyPP_mc_vs_ms_ae_UK-300x103.png" />
      </Right>
    </Container>
  );
}

export default Footer;
