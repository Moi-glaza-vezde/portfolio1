import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { S } from './Skills_Styles';

const skillData = [
   {
      iconId: 'code',
      title: 'html5',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
   },
   {
      iconId: 'css',
      title: 'css3',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
   },
   {
      iconId: 'react',
      title: 'react',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
   },
   {
      iconId: 'typeScript',
      title: 'typeScript',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
   },
   {
      iconId: 'styledComponents',
      title: 'styledComponents',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
   },
   {
      iconId: 'figma',
      title: 'WEB DESIgN',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
   },
];

export const Skills = () => {
   return (
      <S.Skills>
         <Container>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
               {skillData.map((s, index) => {
                  return (
                     <Skill
                        key={index}
                        iconId={s.iconId}
                        title={s.title}
                        description={s.description}
                     />
                  );
               })}
            </FlexWrapper>
         </Container>
      </S.Skills>
   );
};
