import React from 'react';
import styled from 'styled-components';
import { thems } from '../stryled/Theme';

export const Link = styled.a`
   position: relative;
   z-index: 0;
   font-family: 'Poppins';
   font-size: 14px;
   font-weight: 400;
   letter-spacing: 1px;
   padding: 10px;
   text-transform: uppercase;
   &:hover {
      &::before {
         height: 10px;
      }
   }

   &::before {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0px;
      right: 0px;
      display: inline-block;
      //height: 10px;
      background-color: ${thems.colors.accent};

      z-index: -1;
   }
`;