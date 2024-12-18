import React from 'react';
import styled from 'styled-components';
import { thems } from '../stryled/Theme';
import { font } from '../stryled/Common';

export const SectionTitle = styled.h2`
   ${font({ family: "'Josefin Sans', sans-serif", weight: 600, Fmax: 36, Fmin: 30 })}
   margin-bottom: 90px;
   position: relative;
   /* 
   font-family: 'Josefin Sans', sans-serif;
   font-size: 36px;
   font-weight: 600; */

   letter-spacing: 5px;
   text-align: center;
   &::before {
      position: absolute;

      content: '';
      display: inline-block;
      width: 55px;
      height: 1px;
      background-color: ${thems.colors.accent};
      left: 50%;
      bottom: -30px;
      transform: translateX(-50%);
      @media ${thems.media.mobile} {
         bottom: -14px;
      }
   }

   @media ${thems.media.mobile} {
      margin-bottom: 30px;
   }
`;
