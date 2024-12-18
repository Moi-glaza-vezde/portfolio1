import React from 'react';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { S } from './Footer_Styles';

const socialItamsData = [
   {
      iconId: 'instagram',
   },
   {
      iconId: 'telegram',
   },
   {
      iconId: 'vk',
   },
   {
      iconId: 'linkedIn',
   },
];

export const Footer: React.FC = () => {
   return (
      <S.Footer>
         <FlexWrapper direction={'column'} align={'center'}>
            <S.Name>Svetlana</S.Name>
            <S.SocialList>
               {socialItamsData.map((s, index) => {
                  return (
                     <S.SocialItem key={index}>
                        <S.SocialIconLink>
                           <Icon
                              iconId={s.iconId}
                              height={'21px'}
                              width={'21px'}
                              viewBox={'0 0 22 16'}
                           />
                        </S.SocialIconLink>
                     </S.SocialItem>
                  );
               })}
            </S.SocialList>
            <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
         </FlexWrapper>
      </S.Footer>
   );
};
