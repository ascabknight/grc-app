import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  .main-content {
    margin: 0 auto;
    @media (max-width: 767px) {
        padding: 0 20px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 0 80px;
    }
    @media (min-width: 1024px) {
        max-width: 1200px;
    }
  }
  .center-content-column {
      display:flex;
      justify-content: center;
  }

  .flex-column-center {
      flex-direction: column;
      align-items: center;
  }

  .row-reverse {
      flex-direction: row-reverse;
  }

  .column-reverse {
    flex-direction: column-reverse;
  }
`