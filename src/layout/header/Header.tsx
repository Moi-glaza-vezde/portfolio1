import React from 'react';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobilerMenu } from './mobileMenu/MobileMenu';
import { S } from './Header_Styles';
import { DesktopMenu } from './DesktopMenu/DesktopMenu';

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];

export const Header: React.FC = () => {
   const [width, setWidth] = React.useState(window.innerWidth);
   const breakpoint = 768;

   React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
   }, []);

   return (
      <S.Header>
         <Container>
            <FlexWrapper justify={'space-between'} align={'center'}>
               <Logo />

               {width < breakpoint ? (
                  <MobilerMenu menuItems={items} />
               ) : (
                  <DesktopMenu menuItems={items} />
               )}
            </FlexWrapper>
         </Container>
      </S.Header>
   );
};
