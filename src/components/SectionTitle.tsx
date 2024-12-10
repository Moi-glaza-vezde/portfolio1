import React from 'react';
import styled from 'styled-components';
import { thems } from '../stryled/Theme';

export const SectionTitle = styled.h2`
   margin-bottom: 90px;
   position: relative;

   font-family: 'Josefin Sans', sans-serif;
   font-size: 36px;
   font-weight: 600;

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
   }
`;
