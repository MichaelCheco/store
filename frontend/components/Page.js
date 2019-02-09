import React, { Component, Fragment } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import AuthHeader from './AuthHeader';
const theme = {
	red: '#FF0000',
	black: '#393939',
	grey: '#3A3A3A',
	lightgrey: '#E1E1E1',
	offWhite: '#EDEDED',
	maxWidth: '1500px',
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};
const StyledPage = styled.div`
	background: white;
	color: ${props => props.theme.black};
`;
const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
`;
export const GlobalStyle = createGlobalStyle`
/* @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
} */
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
		/* font-family: 'Muli', sans-serif; */
		font-family: 'Lora', serif;
    }
    a {
        text-decoration: none;
        color: black;
    }
`;

export default class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<GlobalStyle />
					<Meta />
					<AuthHeader />
					<Header />
					<Inner>{this.props.children}</Inner>
				</StyledPage>
			</ThemeProvider>
		);
	}
}
