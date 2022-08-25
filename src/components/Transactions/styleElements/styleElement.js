import styled, {css} from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 640px;
  min-width: 300px;
  height: 100vh;
  background-color: #F5F5F5;
  position: relative;
  color: #6e6e6e;

  ${props => props.darkMode && css`
    background-color: #363636 !important;
    color: white !important;

    .dark-mode-switcher {
      justify-content: flex-end !important;
      background-color: white !important;
    }

  `}
  .dark-mode {
    background-color: #202020 !important;
    color: white !important;

    button {
      background-color: #202020 !important;
      color: white !important;
    }

    .details-container {
      background-color: #303030 !important;

      .content {
        background-color: #334647 !important;
      }
    }
  }

  .dark-mode-light {
    background-color: #363636 !important;
    color: white !important;

    .main-title {
      color: white !important;
    }
  }

  .blur {
    filter: blur(2px);
  }

  .section-content {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      background-color: #0000003b;
      position: absolute;
      top: 0;
      left: 0;
    }

    .content-container {
      width: 100%;
      height: fit-content;
      background-color: white;
      padding: 20px;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 9;
      border-radius: 30px 30px 0 0;
      font-size: 0.7rem;

      .section-title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        font-size: 0.7rem;

        &:after {
          content: '';
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translate(-50%, 0);
          width: 50px;
          height: 4px;
          background-color: #c9c9c9;
          border-radius: 5px;
        }

        .title-text {
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            margin-right: 5px;
          }
        }
      }

      .close {
        width: 23px;
        height: 23px;
        position: absolute;
        top: 17px;
        right: 17px;
        cursor: pointer;
      }

      .details-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: fit-content;
        background-color: #F4F4FA;
        padding: 15px;
        border-radius: 15px;
        font-size: 0.7rem;
        margin-top: 10px;

        .content {
          background-color: #F6DEE5;
          border-radius: 20px;
          padding: 10px;
          width: 100%;

          .row {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.7rem;
          }
        }
      }
    }

  }

`;
export const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;

  div {
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(1) {
      justify-content: flex-end;
      font-size: 0.7rem;

      img {
        width: 18px;
        margin: 0 5px 0 20px;
      }
    }

    &:nth-child(3) {
      justify-content: flex-start;

      .dark-mode-switcher {
        width: 30px;
        height: 15px;
        border: 1px solid #6e6e6e;
        border-radius: 15px;
        display: flex;
        align-items: center;
        margin-right: 20px;
        justify-content: flex-start;
        cursor: pointer;

        .switch {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: #6e6e6e;
        }
      }

      img {
        width: 20px;
        transform: rotate(180deg);
        margin: 0 20px 0 0;
      }
    }
  }

  .main-title {
    font-weight: bold;
    color: #5439AC;
  }
`;
export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 140px);
  padding: 15px;
  background-color: white;
  border-radius: 30px 30px 0 0;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .box-container {
    width: 100%;
    border: 1px solid lightgray;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 0.7rem;
    position: relative;

    .text-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;

      .date {
        direction: ltr;
        padding: 0 10px;
      }

      &:first-child {
        border-bottom: 1px solid lightgray;
        padding-bottom: 10px;

        div {
          &:first-child {
            font-size: 0.9rem;
          }
        }
      }

      &:nth-child(2) {
        padding-top: 10px;
      }

      .details {
        color: purple;
        font-size: 0.7rem;
        font-weight: bold;
        background-color: white;
        padding: 3px 30px;
        border: 1px solid purple;
        border-radius: 15px;
        font-family: 'Vazir';
        cursor: pointer;

        :hover {
          background-color: lightgray;
        }
      }

      .failed {
        color: darkred;
        font-size: 0.7rem;
        background-color: white;
        padding: 2px 8px;
        border: 1px solid darkred;
        border-radius: 5px;
        font-family: 'Vazir';
      }
    }

    .font-bold {
      font-weight: bold;
    }

    .badge {
      position: absolute;
      top: 50%;
      right: 0;
      width: 5px;
      height: 30px;
      transform: translate(0, -50%);
      border-radius: 5px 0 0 5px;
    }

    .bg-red {
      background-color: darkred;
    }

    .bg-green {
      background-color: green;
    }
  }
`;
export const FilterAndSort = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;

  ${props => props.darkMode && css`
    background-color: #202020 !important;
    color: white !important;
  `}
  .section-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px 30px 0 0;
    background-color: #F5F5F5;

    .section {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      cursor: pointer;

      &:first-child {
        border-left: 1px solid #b1b1b1;
      }
    }
  }`;
export const WrapperContainer = styled.div`
  .row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0;
    font-size: 0.9rem;
    cursor: pointer;

    .radio {
      width: 15px;
      height: 15px;
      border: 1px solid #b1b1b1;
      border-radius: 50%;
      margin-left: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1px;

      .selected-radio {
        width: 100%;
        height: 100%;
        background-color: #5439AC;
        border-radius: 50%;
      }
    }

    .selected-row {
      color: #5439AC;
    }
  }

  .filter-container {
    height: calc(100vh - 170px);

    .box-title {
      width: 100%;
      padding: 10px 0;
    }

    .box-container {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .box {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #b1b1b1;
        padding: 8px 20px;
        margin-left: 10px;
        border-radius: 10px;
        cursor: pointer;

        img {
          margin-left: 5px;
        }
      }

    }

    .selected-filter-button {
      border: 2px solid #5439AC !important;
    }
  }

  .filter-buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 45%;
      padding: 5px;
      background-color: white;
      border: 1px solid #5439AC;
      color: #5439AC;
      border-radius: 20px;
      font-family: Vazir;
      font-size: 0.7rem;
      font-weight: bold;
      margin: 0 5px;
      cursor: pointer;
    }

    .selected-filter-button {
      background-color: #5439AC !important;
      color: white;
    }
  }



`