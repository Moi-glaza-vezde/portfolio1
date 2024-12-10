import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';
import { thems } from '../../../../stryled/Theme';

type WorkPropsType = {
   title: string;
   text: string;
   src: string;
};
export const Work = (props: WorkPropsType) => {
   return (
      <StyledWork>
         <Image src={props.src} alt="" />
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
   }
`;

const Description = styled.div`
   padding: 25px 25px;
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
