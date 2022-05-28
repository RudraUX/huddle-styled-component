import SocialIcons from './SocialIcons';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>
              Huddle re-imagines the way we build communities. Create connections with your users as
              you engage in genuine discussion.
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <StyledSocialIcons>
            <SocialIcons />
          </StyledSocialIcons>
        </Flex>
        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
