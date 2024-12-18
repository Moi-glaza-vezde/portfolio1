import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { S } from './Contacts.Styles';

export const Contact: React.FC = () => {
   return (
      <S.Contacts>
         <Container>
            <SectionTitle>Contact</SectionTitle>
            <S.Form>
               <S.Fild placeholder={'name'} />
               <S.Fild placeholder={'subject'} />
               <S.Fild placeholder={'messege'} as={'textarea'} />
               <Button type={'submit'}>Send message</Button>
            </S.Form>
         </Container>
      </S.Contacts>
   );
};
