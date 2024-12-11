import React from 'react';
import styled from 'styled-components';
import { thems } from '../stryled/Theme';

export const Button = styled.button`
   /* margin: 0 auto; */
   position: relative;
   font-size: 14px;
   font-weight: 400;
   letter-spacing: 1px;
   text-transform: uppercase;
   width: 170px;
   height: 32px;
   z-index: 0;
   &:hover {
      &::before {
         width: 100%;
         height: 100%;
      }
   }
   &::before {
      z-index: -1;
      content: '';
      display: inline-block;

      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
      height: 10px;
      background-color: ${thems.colors.accent};
   }
`;
