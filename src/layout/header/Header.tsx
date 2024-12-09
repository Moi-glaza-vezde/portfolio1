import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/Container';

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];

export const Header = () => {
   return (
      <StyledHeader>
         <Container>
            <Logo />
            <Menu menuItems={items} />
         </Container>
      </StyledHeader>
   );
};
const StyledHeader = styled.header`
   background-color: #21d139;
   display: flex;
   justify-content: space-between;
`;
