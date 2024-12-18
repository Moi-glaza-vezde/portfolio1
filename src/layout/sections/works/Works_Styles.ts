import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { thems } from '../../../stryled/Theme';
import { Button } from '../../../components/Button';
import { Link } from '../../../components/Link';

const Works = styled.section`
   padding: 85px 0 100px;
   ${FlexWrapper} {
      gap: 30px;
   }

   @media ${thems.media.mobile} {
      padding-bottom: 70px;
   }
`;

const Work = styled.div`
   background-color: ${thems.colors.secondaryBg};
   width: 330px;
   flex-grow: 1;

   ${Link} {
      padding: 10px 0;
      & + ${Link} {
         margin-left: 20px;
      }
   }
   /* ${Link}:last-child {
      margin-left: 20px;
   } */

   @media ${thems.media.desktop} {
      max-width: 540px;
   }
`;

const Description = styled.div`
   padding: 25px 25px;
`;
const ImageWrapper = styled.div`
   position: relative;
   ${Button} {
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      &::before {
         width: 100%;
         height: 100%;
      }
   }

   &::before {
      content: '';
      display: inline-block;

      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      backdrop-filter: blur(4px);
      opacity: 0;
   }

   &:hover {
      &::before {
         opacity: 1;
      }

      ${Button} {
         opacity: 1;
      }
   }

   @media ${thems.media.tablet} {
      &::before {
         opacity: 1;
      }

      ${Button} {
         opacity: 1;
      }
   }
`;

const Image = styled.img`
   width: 100%;
   height: 260px;
   object-fit: cover;
`;

const Title = styled.h3``;
const Text = styled.p`
   margin: 14px 0 10px 0;
`;

export const S = {
   Works,

   Work,
   Description,
   ImageWrapper,
   Image,
   Title,
   Text,
};
