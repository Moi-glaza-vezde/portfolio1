import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { thems } from '../../stryled/Theme';

export const Footer = () => {
   return (
      <StyledFooter>
         <FlexWrapper direction={'column'} align={'center'}>
            <Name>Svetlana</Name>
            <SocialList>
               <SocialItem>
                  <SocialIconLink>
                     <Icon
                        iconId={'instagram'}
                        height={'21px'}
                        width={'21px'}
                        viewBox={'0 0 22 16'}
                     />
                  </SocialIconLink>
               </SocialItem>
               <SocialItem>
                  <SocialIconLink>
                     <Icon
                        iconId={'telegram'}
                        height={'21px'}
                        width={'21px'}
                        viewBox={'0 0 23 16'}
                     />
                  </SocialIconLink>
               </SocialItem>
               <SocialItem>
                  <SocialIconLink>
                     <Icon iconId={'vk'} height={'21px'} width={'21px'} viewBox={'0 0 22 16'} />
                  </SocialIconLink>
               </SocialItem>
               <SocialItem>
                  <SocialIconLink>
                     <Icon
                        iconId={'linkedIn'}
                        height={'21px'}
                        width={'21px'}
                        viewBox={'0 0 21 21'}
                     />
                  </SocialIconLink>
               </SocialItem>
            </SocialList>
            <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
         </FlexWrapper>
      </StyledFooter>
   );
};

const StyledFooter = styled.footer`
   background-color: ${thems.colors.primaryBg};
   padding: 40px 0;
`;

const Name = styled.h3`
   font-family: 'Josefin Sans' sans-serif;

   font-size: 22px;
   font-weight: 700;
   letter-spacing: 3px;
`;

const SocialList = styled.ul`
   display: flex;
   gap: 20px;
   margin: 30px 0;
`;

const SocialItem = styled.li``;

const SocialIconLink = styled.a`
   background: rgba(255, 255, 255, 0.1);

   width: 35px;
   height: 35px;

   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;

   color: ${thems.colors.accent};
   &:hover {
      color: ${thems.colors.primaryBg};
      transform: translateY(-4px);
      background-color: ${thems.colors.accent};
   }
`;

const Copyright = styled.small`
   font-family: 'Poppins';

   font-size: 12px;
   font-weight: 400;

   /* color: rgba(255, 255, 255, 0.5); */

   opacity: 0.5;
`;
