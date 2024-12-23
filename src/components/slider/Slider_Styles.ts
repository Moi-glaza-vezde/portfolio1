import styled from 'styled-components';
import { thems } from '../../stryled/Theme';

const Slider = styled.div`
   max-width: 500px;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   outline: 1px solid red;
`;

const Slide = styled.div`
   text-align: center;
   // margin: 0 auto;
`;

const Text = styled.p``;

const Name = styled.span`
   font-family: 'Josefin Sans', sans-serif;
   font-size: 16px;
   font-weight: 600;
   text-transform: uppercase;
   letter-spacing: 1px;
   text-align: center;
   margin: 22px 0 25px 0;
   display: inline-block;
`;

const Pagination = styled.div`
   span {
      display: inline-block;

      width: 7px;
      height: 7px;

      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.5);

      & + span {
         margin-left: 5px;
      }
      &.active {
         width: 20px;
         background-color: ${thems.colors.accent};
      }
   }

   @media ${thems.media.mobile} {
      margin-top: 10px;
   }
`;

export const S = {
   Slider,
   Slide,
   Text,
   Name,
   Pagination,
};
