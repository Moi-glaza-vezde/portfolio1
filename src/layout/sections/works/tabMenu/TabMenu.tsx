import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';
import { thems } from '../../../../stryled/Theme';

export type TabStatusType = 'all' | 'landing' | 'react' | 'spa';

type TabMenuPropsType = {
   tabsItems: Array<{ status: TabStatusType; title: string }>;
   changeFilterStatus: (value: TabStatusType) => void;
   currentFilterStatus: string;
};

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
   return (
      <StyledTabMeny>
         <ul>
            {props.tabsItems.map(
               (item: { status: TabStatusType; title: string }, index: number) => {
                  return (
                     <ListItem key={index}>
                        <Link
                           active={props.currentFilterStatus === item.status}
                           as={'button'}
                           onClick={() => {
                              props.changeFilterStatus(item.status);
                           }}>
                           {item.title}
                        </Link>
                     </ListItem>
                  );
               }
            )}
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
