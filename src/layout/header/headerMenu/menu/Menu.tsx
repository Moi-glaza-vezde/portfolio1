import React from 'react';
import { S } from '../HeaderMenu_Styles';

const items = [
   { href: 'home', title: 'Home' },
   { href: 'skills', title: 'Skills' },
   { href: 'works', title: 'Works' },
   { href: 'testimony', title: 'Testimony' },
   { href: 'contact', title: 'Contact' },
];

export const Menu: React.FC = () => {
   return (
      <ul>
         {items.map((item: { title: string; href: string }, index: number) => {
            return (
               <S.MenuItem key={index}>
                  <S.NavLink activeClass="active" to={item.href} smooth={true}>
                     {item.title}

                     <S.Mask>
                        <span> {item.title}</span>
                     </S.Mask>
                     <S.Mask>
                        <span> {item.title}</span>
                     </S.Mask>
                  </S.NavLink>
               </S.MenuItem>
            );
         })}
      </ul>
   );
};
