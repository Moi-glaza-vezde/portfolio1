import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/photo.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { thems } from '../../../stryled/Theme';
import { font } from '../../../stryled/Common';

export const Main = () => {
   return (
      <StyledMain>
         <Container>
            <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
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
   ${font({ weight: 400, Fmax: 27, Fmin: 20 })}
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
   @media ${thems.media.mobile} {
      width: 310px;
      height: 380px;
   }
`;

const MainTitle = styled.h1`
   ${font({ weight: 400, Fmax: 27, Fmin: 20 })}
`;

const Name = styled.h2`
   ${font({ family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36 })}

   letter-spacing: 0.05em;
   margin: 10px 0;

   span {
      z-index: 0;
      position: relative;
      white-space: nowrap;
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

   @media ${thems.media.mobile} {
      margin: 15px 0 22px;
   }
`;
const FotoWrapper = styled.div`
   position: relative;
   z-index: 0;
   margin-top: 65px;

   /* @media ${thems.media.mobile} {
   } */
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
      @media ${thems.media.mobile} {
         width: 314px;
         height: 414px;
      }
   }
`;
