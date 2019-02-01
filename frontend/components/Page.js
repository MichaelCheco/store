import React, { Component, Fragment } from 'react'
import Header from './Header'
import Meta from './Meta'
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import AuthHeader from './AuthHeader'
const theme = {
  maxWidth: '1000px',
  black: '#393939',

}
const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`
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
        /* font-family: 'radnika_next'; */
    }
    a {
        text-decoration: none;
        color: black;
    }
`

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}> 
      <StyledPage>
      <GlobalStyle />
        <Meta />
        <AuthHeader />
        <Header />
        {this.props.children}
      </StyledPage>   
      </ThemeProvider>
    )
  }
}
