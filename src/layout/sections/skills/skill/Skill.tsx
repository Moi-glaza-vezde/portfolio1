import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { thems } from '../../../../stryled/Theme';

type SkillPropsType = {
   iconId: string;
   title: string;
   description: string;
};
export const Skill = (props: SkillPropsType) => {
   return (
      <StyledSkill>
         <FlexWrapper direction={'column'} align={'center'}>
            <IconWrapper>
               <Icon iconId={props.iconId} />
            </IconWrapper>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
         </FlexWrapper>
      </StyledSkill>
   );
};

const StyledSkill = styled.div`
   padding: 62px 20px 40px 20px;
   width: 380px;
   height: 338px;
`;
const SkillTitle = styled.div`
   margin: 70px 0 15px 0;
   text-transform: uppercase;
   font-family: 'Josefin Sans', sans-serif;
   font-size: 16px;
   font-weight: 700;

   letter-spacing: 1px;
`;
const SkillText = styled.p`
   font-family: 'Poppins';
   font-size: 14px;
   font-weight: 400;
   line-height: 1.4;
   text-align: center;
`;
const IconWrapper = styled.div`
   position: relative;
   &::before {
      position: absolute;
      left: 50%;
      top: 50%;

      transform: rotate(45deg) translate(-50%, -50%);
      transform-origin: top left;

      content: '';
      display: inline-block;
      width: 80px;
      height: 80px;
      background-color: rgba(255, 255, 255, 0.1);
   }
`;
