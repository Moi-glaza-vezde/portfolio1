import styled from 'styled-components';
import { thems } from '../../../stryled/Theme';

const Skills = styled.section``;

const Skill = styled.div`
   padding: 42px 20px 52px 20px;
   @media ${thems.media.mobile} {
      padding: 62px 0px 40px 0px;
   }
   width: 330px;

   flex-grow: 1;
   height: 338px;
`;

export const IconWrapper = styled.div`
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
const SkillTitle = styled.h3`
   margin: 70px 0 15px 0;
   text-transform: uppercase;
`;
const SkillText = styled.p`
   font-family: 'Poppins';

   line-height: 1.4;
   text-align: center;
`;

export const S = {
   Skills,
   Skill,
   SkillTitle,
   SkillText,
   IconWrapper,
};
