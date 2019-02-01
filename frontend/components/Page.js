import React, { Component, Fragment } from 'react'
import Header from './Header'
import Meta from './Meta'
import styled, { ThemeProvider } from 'styled-components';
import AuthHeader from './AuthHeader'
const theme = {
  maxWidth: '1000px',
  black: '#393939',

}
const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`


export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}> 
      <StyledPage>
        <Meta />
        <AuthHeader />
        <Header />
        {this.props.children}
      </StyledPage>   
      </ThemeProvider>
    )
  }
}
