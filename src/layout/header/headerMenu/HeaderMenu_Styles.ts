import styled, { css } from 'styled-components';
import { thems } from '../../../stryled/Theme';
import { Link } from 'react-scroll';

//------------------Menu
const MenuItem = styled.li`
   position: relative;
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
   transition: ${thems.animations.transition};
   & + & {
      top: 50%;
      span {
         transform: translateY(-50%);
         display: inline-block;
      }
   }
`;

const NavLink = styled(Link)`
   font-family: 'Josefin Sans', sans-serif;
   font-size: 30px;
   font-weight: 400;
   text-align: center;
   color: transparent;

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
      transition: ${thems.animations.transition};
   }

   &:hover,
   &.active {
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

//--------------------------- Mobile menu

const MobileMenu = styled.nav``;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 2;
   background-color: rgba(31, 31, 32, 0.9);
   display: flex;
   justify-content: center;
   align-items: center;
   transform: translateY(-100%);
   transition: 0.6s ease-in-out;

   ul {
      display: flex;
      gap: 5px;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      transition: 0.8s ease-in-out;
   }

   ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
         transform: translateY(0);

         & ul {
            gap: 40px;
         }
      `}
`;

const BurgerButton = styled.div<{ isOpen: boolean }>`
   position: fixed;
   top: -100px;
   right: -100px;
   width: 200px;
   height: 200px;
   z-index: 3;

   span {
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${thems.colors.font};
      position: absolute;
      left: 40px;
      bottom: 50px;

      ${(props) =>
         props.isOpen &&
         css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
         `}

      &::before {
         content: '';
         display: block;
         width: 36px;
         height: 2px;
         background-color: ${thems.colors.font};
         position: absolute;
         transform: translateY(-10px);

         ${(props) =>
            props.isOpen &&
            css<{ isOpen: boolean }>`
               transform: rotate(-45deg) translateY(0);
            `}
      }
      &::after {
         content: '';
         display: block;
         width: 24px;
         height: 2px;
         background-color: ${thems.colors.font};
         position: absolute;
         transform: translateY(10px);
         ${(props) =>
            props.isOpen &&
            css<{ isOpen: boolean }>`
               transform: rotate(45deg) translateY(0);
               width: 36px;
            `}
      }
   }

   @media ${thems.media.mobile} {
      top: -110px;
   }
`;
//------------------------Desktop menu

const DesktopMenu = styled.nav`
   ul {
      display: flex;
      gap: 30px;
      justify-content: center;
   }

   /* @media ${thems.media.tablet} {
      display: none;
   } */
`;

//---------------------------EXPORT
export const S = {
   NavLink,
   MenuItem,
   Mask,
   MobileMenu,
   MobileMenuPopup,
   BurgerButton,
   DesktopMenu,
};
