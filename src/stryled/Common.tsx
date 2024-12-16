import React from 'react';
import { thems } from './Theme';

type FontPropsType = {
   family?: string;
   weight?: number;
   clolor?: string;
   lineHeight?: number;
   Fmin?: number;
   Fmax?: number;
};

export const font = ({ family, weight, clolor, lineHeight, Fmin, Fmax }: FontPropsType) => `
   font-family:${family || 'Poppins'} ;
   font-weight:${weight || 400} ;
   color: ${clolor || thems.colors.font};
   line-height: ${lineHeight || 1.2};
	font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin} ) + ${Fmin}px);

`;
