import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { thems } from '../../../stryled/Theme';

export const Contact = () => {
   return (
      <StyledContacts>
         <Container>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
               <Fild placeholder={'name'} />
               <Fild placeholder={'subject'} />
               <Fild placeholder={'messege'} as={'textarea'} />
               <Button type={'submit'}>Send message</Button>
            </StyledForm>
         </Container>
      </StyledContacts>
   );
};

const StyledContacts = styled.section``;

const StyledForm = styled.form`
   margin: 0 auto;
   max-width: 540px;
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 16px;
   align-items: center;

   textarea {
      resize: none;
      height: 155px;
   }
`;

const Fild = styled.input`
   font-family: 'Poppins' sans-serif;

   width: 100%;
   background-color: ${thems.colors.secondaryBg};
   border: 1px solid ${thems.colors.borderColor};
   padding: 7px 15px;

   font-size: 12px;
   font-weight: 400;
   letter-spacing: 0.05em;
   color: ${thems.colors.font};

   /* color: rgba(73, 80, 87, 1); */
   &::placeholder {
      color: ${thems.colors.placeholderColor};
      text-transform: capitalize;
      font-family: 'Poppins' sans-serif;
   }
   &:focus-visible {
      outline: 1px solid ${thems.colors.borderColor};
   }
`;
