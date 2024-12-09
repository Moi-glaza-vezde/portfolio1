import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';
import { thems } from '../../../../stryled/Theme';
import { Button } from '../../../../components/Button';

type WorkPropsType = {
   title: string;
   text: string;
   src: string;
};
export const Work = (props: WorkPropsType) => {
   return (
      <StyledWork>
         <ImageWrapper>
            <Image src={props.src} alt="" />
            <Button>view project</Button>
         </ImageWrapper>
         <Description>
            <Title>{props.title}</Title>
            <Text>{props.text} </Text>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>Code</Link>
         </Description>
      </StyledWork>
   );
};

const StyledWork = styled.div`
   background-color: ${thems.colors.secondaryBg};
   max-width: 540px;
   width: 100%;

   ${Link} {
      padding: 10px 0;
      & + ${Link} {
         margin-left: 20px;
      }
   }
   /* ${Link}:last-child {
      margin-left: 20px;
   } */
`;

const Description = styled.div`
   padding: 25px 25px;
`;
const ImageWrapper = styled.div`
   position: relative;

   &:hover {
      ${Button} {
         opacity: 1;
      }
      &::before {
         content: '';
         display: inline-block;

         position: absolute;
         left: 0;
         right: 0;
         top: 0;
         bottom: 0;
         backdrop-filter: blur(8px);

         //background-color: #fff;
      }
   }

   ${Button} {
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      &::before {
         width: 100%;
         height: 100%;
      }
   }
`;

const Image = styled.img`
   width: 100%;
   height: 260px;
   object-fit: cover;
`;

const Title = styled.h3``;
const Text = styled.p`
   margin: 14px 0 10px 0;
`;
