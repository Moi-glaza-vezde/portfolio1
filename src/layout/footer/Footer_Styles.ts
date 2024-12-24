import styled from 'styled-components';
import { font } from '../../stryled/Common';
import { thems } from '../../stryled/Theme';

const Footer = styled.footer`
   position: relative;

   background-color: ${thems.colors.primaryBg};
   padding: 40px 0 40px;
`;

const Name = styled.h3`
   ${font({ family: "'Josefin Sans' sans-serif", weight: 700, Fmax: 23, Fmin: 16 })}

   letter-spacing: 3px;
`;

const SocialList = styled.ul`
   display: flex;
   gap: 20px;
   margin: 30px 0;
`;

const SocialItem = styled.li``;

const SocialIconLink = styled.a`
   background: rgba(255, 255, 255, 0.1);

   width: 35px;
   height: 35px;

   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;

   color: ${thems.colors.accent};
   &:hover {
      color: ${thems.colors.primaryBg};
      transform: translateY(-4px);
      background-color: ${thems.colors.accent};
   }
`;

const Copyright = styled.small`
   font-family: 'Poppins';

   font-size: 12px;
   font-weight: 400;

   opacity: 0.5;
`;

export const S = {
   Footer,
   Name,
   SocialList,
   SocialItem,
   SocialIconLink,
   Copyright,
};
