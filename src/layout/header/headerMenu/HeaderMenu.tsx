import React from 'react';
import styled from 'styled-components';
import { thems } from '../../../stryled/Theme';

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
   return (
      <StyledHeaderMeny>
         <ul>
            {props.menuItems.map((item: string, index: number) => {
               return (
                  <ListItem key={index}>
                     <Link href="#">
                        {item}

                        <Mask>
                           <span> {item}</span>
                        </Mask>
                        <Mask>
                           <span> {item}</span>
                        </Mask>
                     </Link>
                  </ListItem>
               );
            })}
         </ul>
      </StyledHeaderMeny>
   );
};

const StyledHeaderMeny = styled.nav`
   ul {
      display: flex;
      gap: 30px;
      justify-content: center;
   }

   @media ${thems.media.tablet} {
      display: none;
   }
`;

const Link = styled.a`
   font-family: 'Josefin Sans', sans-serif;
   font-size: 30px;
   font-weight: 400;
   text-align: center;
   color: transparent;
`;

const Mask = styled.span`
   position: absolute;
   top: 0;
   left: 0;
   display: inline-block;
   height: 50%;
   overflow: hidden;
   // outline: 1px solid red;
   color: ${thems.colors.accent};

   & + & {
      top: 50%;
      span {
         transform: translateY(-50%);
         display: inline-block;
      }
   }
`;

const ListItem = styled.li`
   position: relative;

   &::before {
      content: '';
      display: inline-block;
      height: 2px;
      background-color: ${thems.colors.accent};

      position: absolute;
      top: 50%;
      left: -10px;
      right: -10px;
      z-index: 1;
      transform: scale(0);
   }
   &:hover {
      &::before {
         transform: scale(1);
      }
      ${Mask} {
         transform: skewX(12deg) translateX(5px);
         color: ${thems.colors.font};

         & + ${Mask} {
            transform: skewX(12deg) translateX(-5px);
         }
      }
   }
`;
