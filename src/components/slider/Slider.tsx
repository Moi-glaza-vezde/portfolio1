import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { S } from './Slider_Styles';
import './../../stryled/slider.css';
type SlidePropsType = {
   text: string;
   userName: string;
};

const Slide = (props: SlidePropsType) => {
   return (
      <S.Slide>
         <S.Text>{props.text}</S.Text>
         <S.Name>{props.userName}</S.Name>
      </S.Slide>
   );
};

const items = [
   <Slide
      userName={'@ivan ivanow'}
      text={
         '11111111 1111111111 111111111111 11111111111 111111111111 1111111111111 111111111 111111111 11111111111'
      }
   />,
   <Slide
      userName={'@pavel pavlov'}
      text={
         '22222222222 222222222222 222222222222 2222222222222 2222222222222 22222222222 2222222222222'
      }
   />,
   <Slide
      userName={'@petr petrov'}
      text={'3333333333333 333333333333 33333333333333 333333333333333 33333333333333'}
   />,
];

export const Slider = () => (
   <S.Slider>
      <AliceCarousel mouseTracking items={items} />
   </S.Slider>
);
