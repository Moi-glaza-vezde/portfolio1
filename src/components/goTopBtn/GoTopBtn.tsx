import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';

export const GoTopBtn = () => {
   const [showBtn, setShowBtn] = useState(false);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 200) {
            setShowBtn(true);
         } else {
            setShowBtn(false);
         }
      });
   }, []);
   return (
      <>
         {showBtn && (
            <StyledGoBtn
               onClick={() => {
                  scroll.scrollToTop();
               }}>
               <Icon iconId={'arrowTop'} width={'16px'} height={'16px'} viewBox={'0 0 16 16'} />
            </StyledGoBtn>
         )}
      </>
   );
};

const StyledGoBtn = styled.button`
   background-color: rgba(0, 0, 0, 0.3);
   //display: none;
   padding: 8px;
   position: fixed;
   right: 30px;
   bottom: 30px;
`;
