import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';
import { thems } from '../../../../stryled/Theme';

export const TabMenu: React.FC<{ menuItems: Array<string> }> = (props: {
   menuItems: Array<string>;
}) => {
   return (
      <StyledTabMeny>
         <ul>
            {props.menuItems.map((item: string, index: number) => {
               return (
                  <ListItem key={index}>
                     <Link href="">{item}</Link>
                  </ListItem>
               );
            })}
         </ul>
      </StyledTabMeny>
   );
};

const StyledTabMeny = styled.nav`
   ul {
      display: flex;

      justify-content: space-between;
      max-width: 352px;
      width: 100%;
      margin: 0 auto 40px;
      @media ${thems.media.mobile} {
         margin-top: 70px;
      }
   }
`;

const ListItem = styled.li``;
