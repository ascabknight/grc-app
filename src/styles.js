import { createGlobalStyle } from 'styled-components'

const colorCompleted = '#ffffff';

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

  #tick-mark {
    position: relative;
    display: inline-block;
    width: 17px;
    height: 17px;
  }

    #tick-mark::before {
        position: absolute;
        left: -4px;
        top: 50%;
        height: 50%;
        width: 3px;
        background-color: ${colorCompleted};
        content: "";
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
    }

    #tick-mark::after {
        position: absolute;
        left: -3px;
        bottom: 0;
        height: 3px;
        width: 100%;
        background-color: ${colorCompleted};
        content: "";
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
    }
`