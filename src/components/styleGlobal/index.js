import Styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overscroll-behavior: none;
      font-family: 'Barlow Semi Condensed', sans-serif;
      /* background-image: radial-gradient(circle at top, #1f3757 30%, #131537 100%);
      background-repeat: no-repeat; */
      /* background: linear-gradient(to top,#131537 25% , #131537 0%, #1f3757 75%); */
      background: blueviolet;
      min-height: 100%;
      z-index:0;
  }
  ul {
    list-style: none;
  }
`

export const Wrapper = Styled.div`
    /* min-width: 100%;   */
    padding: 2em 2em;
    margin: 0 auto;
    /* margin: 0 auto; */
`