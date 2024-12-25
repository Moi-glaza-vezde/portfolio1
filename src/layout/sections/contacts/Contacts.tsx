import React, { ElementRef, useRef } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { S } from './Contacts.Styles';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
   const form = useRef<ElementRef<'form'>>(null);

   const sendEmail = (e: any) => {
      e.preventDefault();

      if (!form.current) return;

      emailjs
         .sendForm('service_wz1d77b', 'template_dqr3chg', form.current, {
            publicKey: '_nifs8OXEgnsUTV9L',
         })
         .then(
            () => {
               console.log('SUCCESS!');
            },
            (error) => {
               console.log('FAILED...', error.text);
            }
         );
      e.target.reset();
   };

   return (
      <S.Contacts id={'contact'}>
         <Container>
            <SectionTitle>Contact</SectionTitle>
            <S.Form ref={form} onSubmit={sendEmail}>
               <S.Fild required placeholder={'name'} name={'user_name'} />
               <S.Fild required placeholder={'email'} name={'email'} />
               <S.Fild required placeholder={'subject'} name={'subJect'} />
               <S.Fild required placeholder={'messege'} as={'textarea'} name={'message'} />
               <Button type={'submit'}>Send message</Button>
            </S.Form>
         </Container>
      </S.Contacts>
   );
};
