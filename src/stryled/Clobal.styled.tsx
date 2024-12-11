//import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { thems } from './Theme';

export const GlobalStyled = createGlobalStyle`
	

*,
*::before,
*::after{
margin: 0;
padding: 0;
box-sizing: border-box;

}



body{

	margin: 0;
	font-family: 'Poppins',  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
   sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: ${thems.colors.font};
	background-color: ${thems.colors.primaryBg};
	line-height: 1.2;

}

	a{
		text-decoration:none;
		color:${thems.colors.font};
		cursor: pointer;
	}

	ul{
		list-style: none;
	}
	button{
		background-color: transparent;
		border: none;
		cursor: pointer;
		color: ${thems.colors.font};
	}

section{
	padding: 100px 0;
}

	section:nth-of-type(odd){
		background-color: ${thems.colors.primaryBg};
	}
	section:nth-of-type(even){
		background-color: ${thems.colors.secondaryBg};
	}
	h3{

	font-family: 'Josefin Sans', sans-serif;
   font-size: 16px;
   font-weight: 700;
   letter-spacing: 1px;

	}
	p{
		line-height: 1.4;
		font-size: 14px;
		font-weight: 400;
	}

`;
