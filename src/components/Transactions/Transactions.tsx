import {useState} from 'react'
import styled from 'styled-components';
import backIcon from '../../assets/icons/light/back-th2.svg'

const ContentContainer = styled.div`
  width: 350px;
  height: 100vh;
  background-color: #F5F5F5;
`;
const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5439AC;
  font-weight: bold;
  position: relative;

  .back-icon-container {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);

    img {
      width: 20px;
      transform: rotate(180deg);
    }
  }
`;

const Content = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  padding: 20px;
  background-color: white;
  border-radius: 30px;

  .box-container {
    width: 100%;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 10px;
    font-size: 0.7rem;
    position: relative;

    .text-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;

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

      button {
        color: purple;
        font-size: 0.9rem;
        background-color: white;
        padding: 5px 30px;
        border: 1px solid purple;
        border-radius: 10px
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
      background-color: red;
      transform: translate(0, -50%);
      border-radius: 5px 0 0 5px;
    }
  }
`;

function Transactions() {

    return (
        <ContentContainer>
            <Header>
                <div>تراکنش‌ها</div>
                <div className="back-icon-container"><img src={backIcon} alt=""/></div>
            </Header>
            <Content>
                <div className="box-container">
                    <div className="text-container">
                        <div className="font-bold">خرید شارژ ایرانسل</div>
                        <div><span>کد پیگیری:</span><span>8888888888</span></div>
                    </div>
                    <div className="text-container">
                        <div><span className="font-bold">250000</span><span> تومان</span></div>
                        <div>1404/12/18</div>
                        <button>جزییات</button>
                    </div>
                    <div className="badge">

                    </div>
                </div>
            </Content>
        </ContentContainer>
    )
}

export default Transactions