import styled from 'styled-components';
import { font } from '../../../stryled/Common';
import { thems } from '../../../stryled/Theme';

const SmallText = styled.span`
   ${font({ weight: 400, Fmax: 27, Fmin: 20 })}
   font-size: 14px;
   font-weight: 400;
`;

const Main = styled.section`
   min-height: 100vh;

   display: flex;
   @media ${thems.media.mobile} {
      padding-top: 100px;
      min-height: 50vh;
   }
`;

const Photo = styled.img`
   width: 350px;
   height: 430px;
   object-fit: cover;
   margin-right: 18px;

   @media ${thems.media.mobile} {
      width: 310px;
      height: 380px;
   }
`;

const MainTitle = styled.h1`
   ${font({ weight: 400, Fmax: 27, Fmin: 20 })};

   p {
      display: none;
   }
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

         @media ${thems.media.mobile} {
            bottom: -5px;
         }
      }
   }

   @media ${thems.media.tabletBig} {
      margin: 18px 0 22px;
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
      @media ${thems.media.mobile} {
         width: 320px;
         height: 420px;

         top: -25px;
         left: 13px;
      }
   }

   @media ${thems.media.tabletBig} {
      margin-top: 65px;
   }
`;

//---------Export

export const S = {
   SmallText,
   Main,
   Photo,
   MainTitle,
   Name,
   FotoWrapper,
};
