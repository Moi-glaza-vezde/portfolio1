import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';

import socialImg from '../../../assets/images/proj-1.png';
import timerImg from '../../../assets/images/proj-2.png';
import { Container } from '../../../components/Container';
import { thems } from '../../../stryled/Theme';

const worksItems = ['All', 'landing page', 'React', 'spa'];
export const Works = () => {
   return (
      <StyledWorks>
         <Container>
            <SectionTitle>My Works</SectionTitle>
            <TabMenu menuItems={worksItems} />

            <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
               <Work
                  src={socialImg}
                  title={'Social Network'}
                  text={
                     'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                  }
               />
               <Work
                  src={timerImg}
                  title={'Timer'}
                  text={
                     'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'
                  }
               />
            </FlexWrapper>
         </Container>
      </StyledWorks>
   );
};

const StyledWorks = styled.section`
   padding: 85px 0 100px;
   ${FlexWrapper} {
      gap: 30px;
   }

   @media ${thems.media.mobile} {
      padding-bottom: 70px;
   }
`;
