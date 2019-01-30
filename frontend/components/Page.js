import React, { Component, Fragment } from 'react'
import Header from './Header'
import Meta from './Meta'
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  maxWidth: '1000px',
  black: '#393939',

}
const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`
const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid red;
`

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}> 
      <StyledPage>
        <Meta />
        <Header />
        <Inner>
        {this.props.children}
         </Inner>
      </StyledPage>   
      </ThemeProvider>
    )
  }
}
