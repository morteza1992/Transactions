import {useState, useEffect} from 'react'
import styled from 'styled-components';
import backIcon from '../../assets/icons/light/back-th2.svg'
import axios from "axios";

const ContentContainer = styled.div`
  width: 100%;
  max-width: 640px;
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
  padding: 10px;
  background-color: white;
  border-radius: 30px;
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
        font-size: 0.9rem;
        background-color: white;
        padding: 5px 30px;
        border: 1px solid purple;
        border-radius: 10px;
        font-family: 'Vazir';
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

function Transactions() {
    const [data, setData] = useState([])
    const getData = async () => {
        await axios.get('src/json/data.json').then((response) => {
            setData(response.data.Data)
        })
    }
    const TransactionsItems = data.map((item) => <div className="box-container">
        <div className="text-container">
            <div className="font-bold">{item.TypeName}</div>
            {item.IsPay
                ? <button className="failed">ناموفق</button>
                : <div><span>کد پیگیری:</span><span>8888888888</span></div>
            }
        </div>
        <div className="text-container">
            <div><span className="font-bold">{item.Price}</span><span> تومان</span></div>
            <div className="date">{item.Date}</div>
            <button className="details">جزییات</button>
        </div>
        <div className={"badge " + (item.IsPay ? "bg-red" : "bg-green")}>
        </div>
    </div>);
    useEffect(() => {
        getData()
    }, [])
    return (
        <ContentContainer>
            <Header>
                <div>تراکنش‌ها</div>
                <div className="back-icon-container"><img src={backIcon} alt=""/></div>
            </Header>
            <Content>
                {TransactionsItems}
            </Content>
        </ContentContainer>
    )
}

export default Transactions