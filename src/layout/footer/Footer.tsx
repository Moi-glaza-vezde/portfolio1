import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Footer = () => {
   return (
      <StyledFooter>
         <FlexWrapper direction={'column'} align={'center'}>
            <Name>Svetlana</Name>
            <SocialList>
               <SocialItem>
                  <SocialIconLink>
                     <Icon iconId={'instagram'} height={'21px'} width={'21px'} viewBox={'21px'} />
                  </SocialIconLink>
               </SocialItem>
               <SocialItem>
                  <SocialIconLink>
                     <Icon iconId={'telegram'} height={'21px'} width={'21px'} viewBox={'21px'} />
                  </SocialIconLink>
               </SocialItem>
               <SocialItem>
                  <SocialIconLink>
                     <Icon iconId={'vk'} height={'21px'} width={'21px'} viewBox={'21px'} />
                  </SocialIconLink>
               </SocialItem>
               <SocialItem>
                  <SocialIconLink>
                     <Icon iconId={'linkedIn'} height={'21px'} width={'21px'} viewBox={'21px'} />
                  </SocialIconLink>
               </SocialItem>
            </SocialList>
            <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
         </FlexWrapper>
      </StyledFooter>
   );
};

const StyledFooter = styled.footer`
   background-color: #fcdf95ac;
   min-height: 20vh;
`;

const Name = styled.span``;

const SocialList = styled.ul`
   display: flex;
   gap: 30px;
`;

const SocialItem = styled.li``;

const SocialIconLink = styled.a``;

const Copyright = styled.small``;
