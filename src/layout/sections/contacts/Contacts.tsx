import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';

export const Contact = () => {
   return (
      <StyledContacts>
         <SectionTitle>Contact</SectionTitle>
         <StyledForm>
            <Fild placeholder={'name'} />
            <Fild placeholder={'subject'} />
            <Fild placeholder={'messege'} as={'textarea'} />
            <Button type={'submit'}>Send message</Button>
         </StyledForm>
      </StyledContacts>
   );
};

const StyledContacts = styled.section`
   min-height: 50vh;

   background-color: #fffedb;
`;

const StyledForm = styled.form`
   margin: 0 auto;
   max-width: 500px;
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 10px;
`;

const Fild = styled.input``;
