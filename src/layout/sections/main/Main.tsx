import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/photo.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { thems } from '../../../stryled/Theme';

export const Main = () => {
   return (
      <StyledMain>
         <Container>
            <FlexWrapper align={'center'} justify={'space-between'}>
               <div>
                  <SmallText>Hi There</SmallText>
                  <Name>
                     I am <span>Svetlana Dyablo</span>{' '}
                  </Name>
                  <MainTitle>A Web Developer. </MainTitle>
               </div>
               <FotoWrapper>
                  <Photo src={photo} alt="" />
               </FotoWrapper>
            </FlexWrapper>
         </Container>
      </StyledMain>
   );
};

const SmallText = styled.span`
   font-size: 14px;
   font-weight: 400;
`;

const StyledMain = styled.section`
   min-height: 100vh;
   background-color: #fff5e7;
   display: flex;
   //justify-content: space-around;
`;

const Photo = styled.img`
   width: 350px;
   height: 430px;
   object-fit: cover;
`;

const MainTitle = styled.h1`
   font-family: 'Poppins', sans-serif;
   font-size: 27px;
   font-weight: 400;
`;

const Name = styled.h2`
   font-family: 'Josefin Sans', sans-serif;
   font-size: 50px;
   font-weight: 700;
   margin: 10px 0;

   span {
      z-index: 0;

      position: relative;

      &::before {
         content: '';
         display: inline-block;
         width: 100%;
         height: 20px;
         background-color: ${thems.colors.accent};
         position: absolute;
         bottom: 0;
         z-index: -1;
      }
   }
`;
const FotoWrapper = styled.div`
   position: relative;
   z-index: 0;

   &::before {
      content: '';
      display: inline-block;
      width: 360px;
      height: 470px;
      border: 5px solid ${thems.colors.accent};
      position: absolute;
      top: -24px;
      left: 24px;
      z-index: -1;
   }
`;
