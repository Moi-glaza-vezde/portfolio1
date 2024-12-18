import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { thems } from '../../../stryled/Theme';

export const Slogan = () => {
   return (
      <StyledSlogan>
         <Container>
            <FlexWrapper direction={'column'} align="center">
               <SectionTitle>I Am Available For Freelance</SectionTitle>
               <Button>Hire me</Button>
            </FlexWrapper>
         </Container>
      </StyledSlogan>
   );
};

const StyledSlogan = styled.section`
   padding-bottom: 80px;
   @media ${thems.media.mobile} {
      padding-top: 75px;
   }

   ${Button} {
      @media ${thems.media.mobile} {
         margin-top: 40px;
      }
   }
`;
