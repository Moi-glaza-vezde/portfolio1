import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { thems } from '../../../stryled/Theme';
import { IconWrapper } from '../skills/Skills_Styles';
import { Slider } from '../../../components/slider/Slider';

export const Testimony: React.FC = () => {
   return (
      <StyledTestimony>
         <Container>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction="column" align={'center'}>
               <IconWrapper>
                  <Icon iconId={'quote'} />
               </IconWrapper>
               <Slider />
            </FlexWrapper>
         </Container>
      </StyledTestimony>
   );
};

const StyledTestimony = styled.section`
   padding: 110px 0 80px;
   ${IconWrapper} {
      margin: 40px 0 72px 0;
   }

   @media ${thems.media.mobile} {
      padding-top: 80px;
   }

   ${SectionTitle} {
      @media ${thems.media.mobile} {
         margin-bottom: 60px;
         &::before {
            bottom: -18px;
         }
      }
   }
`;
