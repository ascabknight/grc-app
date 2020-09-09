import { createGlobalStyle } from 'styled-components';

const colorCompleted = '#ffffff';
const colorPrimary = '#007bff';

export const GlobalStyles = createGlobalStyle`

    nav.navbar-dark {
        box-shadow: 0px 0px 10px #343a40;

    }
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

  .mt-6 {
    margin-top: 5rem !important;
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

    .selectableCard{
        & img {
            height: 150px;
            object-fit: scale-down;
            width: 100%;
        }
       
    }

    .clickable{
        cursor:pointer;
    }

    .selectedCard {
        border-color: ${colorPrimary};
        box-shadow: 0px 0px 10px #007bff;
    }
`;
