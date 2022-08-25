import {useState, useEffect} from 'react'
import styled from 'styled-components';
import backLight from '../../assets/icons/light/back-th2.svg'
import filterLight from '../../assets/icons/light/Filter.svg'
import sortLight from '../../assets/icons/light/Sort.svg'
import YesLight from '../../assets/icons/light/Yes.svg'
import NoLight from '../../assets/icons/light/No.svg'
import closeIcon from '../../assets/icons/close-icon.png'
import axios from "axios";

const ContentContainer = styled.div`
  width: 100%;
  max-width: 640px;
  min-width: 300px;
  height: 100vh;
  background-color: #F5F5F5;
  position: relative;
  color: #6e6e6e;

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
        width: 18px;
        height: 18px;
        position: absolute;
        top: 20px;
        right: 20px;
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
  height: calc(100vh - 140px);
  padding: 10px;
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
        padding: 5px 30px;
        border: 1px solid purple;
        border-radius: 10px;
        font-family: 'Vazir';
        cursor: pointer;
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
const FilterAndSort = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;

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
const WrapperContainer = styled.div`
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
    height: calc(100vh - 130px);

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
      background-color: #5439AC;
      color: white;
    }
  }



`

function Wrapper({children, close}) {
    return (
        <WrapperContainer className="section-content">
            <div className="content-container">
                <img className="close"
                     src={closeIcon}
                     onClick={() => close()}
                     alt=""/>
                {children}
            </div>
        </WrapperContainer>
    )
}

function Transactions() {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [showSort, setShowSort] = useState(false)
    const [sortType, setSortType] = useState(null)
    const [showFilter, setShowFilter] = useState(false)
    const [filterType, setFilterType] = useState('addFilter')
    const [successPay, setSuccessPay] = useState(false)
    const [failedPay, setFailedPay] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const [isPay, setIsPay] = useState(false)
    const getData = async () => {
        await axios.get('src/json/data.json').then((response) => {
            setData(response.data.Data)
            setFilterData(response.data.Data)
        })
    }
    const TransactionsItems = filterData.map((item, index) => <div className="box-container" key={index}>
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
            <button className="details" onClick={() => showDetails(item)}>جزییات</button>
        </div>
        <div className={"badge " + (item.IsPay ? "bg-red" : "bg-green")}>
        </div>
    </div>);
    useEffect(() => {
        getData()
    }, [])

    function close() {
        setShowSort(false)
        setShowFilter(false)
        setSuccessPay(false)
        setFailedPay(false)
    }

    function handleSort(value: any) {
        setSortType(value)
        if (value === 'date') {
            setFilterData(filterData.sort(function (a, b) {
                if (b.Date && a.Date) {
                    return parseFloat(b.Date.split(' ')[0].replaceAll('/', '')) - parseFloat(a.Date.split(' ')[0].replaceAll('/', ''));
                }

            }))
        } else if (value === 'max') {
            setFilterData(filterData.sort(function (a, b) {
                return parseFloat(b.Price) - parseFloat(a.Price);
            }))
        } else if (value === 'min') {
            setFilterData(filterData.sort(function (a, b) {
                return parseFloat(a.Price) - parseFloat(b.Price);
            }))
        }
        setShowSort(false)
    }

    function handleFilter(value: any) {
        setFilterType(value)
        if (value === 'addFilter') {
            setFilterData(isPay ? data.filter(x => !x.IsPay) : data.filter(x => x.IsPay))
        } else if (value === 'cancelAll') {
            setFilterData(data)
        }
        setShowFilter(false)
    }

    function showDetails(value: any) {
        value.IsPay ? setFailedPay(true) : setSuccessPay(true)
        setSelectedItem(value)
    }

    return (
        <ContentContainer>
            <Header className={showSort || showFilter ? 'blur' : ''}>
                <div>تراکنش‌ها</div>
                <div className="back-icon-container"><img src={backLight} alt=""/></div>
            </Header>
            <Content className={showSort || showFilter ? 'blur' : ''}>
                {TransactionsItems}
            </Content>
            <FilterAndSort>
                <div className="section-container">
                    <div className="section" onClick={() => setShowFilter(true)}>
                        <img src={filterLight} alt=""/>
                        <span>فیلتر</span>
                    </div>
                    <div className="section" onClick={() => setShowSort(true)}>
                        <img src={sortLight} alt=""/>
                        <span>مرتب سازی</span>
                    </div>
                </div>
            </FilterAndSort>
            {showSort &&
                <Wrapper close={close}>
                    <div className="section-title">
                        <div>مرتب سازی</div>
                    </div>
                    <div className="row" onClick={() => handleSort('date')}>
                        <div className="radio">
                            {sortType === 'date' &&
                                <div className="selected-radio"></div>
                            }
                        </div>
                        <div className={sortType === 'date' ? 'selected-row' : ''}>بر اساس زمان(تراکنش‌های جدید)</div>
                    </div>
                    <div className="row" onClick={() => handleSort('max')}>
                        <div className="radio">
                            {sortType === 'max' &&
                                <div className="selected-radio"></div>
                            }
                        </div>
                        <div className={sortType === 'max' ? 'selected-row' : ''}>بیشترین مبلغ</div>
                    </div>
                    <div className="row" onClick={() => handleSort('min')}>
                        <div className="radio">
                            {sortType === 'min' &&
                                <div className="selected-radio"></div>
                            }
                        </div>
                        <div className={sortType === 'min' ? 'selected-row' : ''}>کمترین مبلغ</div>
                    </div>
                </Wrapper>
            }
            {showFilter &&
                <Wrapper close={close}>
                    <div className="section-title">
                        <div>فیلتر‌ها</div>
                    </div>
                    <div className="filter-container">
                        <div className="box-title">نوع تراکنش:</div>
                        <div className="box-container">
                            <div className={"box " + (isPay ? 'selected-filter-button' : '')}
                                 onClick={() => setIsPay(true)}>
                                <img src={YesLight} alt=""/>
                                <span>موفق</span>
                            </div>
                            <div className={"box " + (!isPay ? 'selected-filter-button' : '')}
                                 onClick={() => setIsPay(false)}>
                                <img src={NoLight} alt=""/>
                                <span>ناموفق</span>
                            </div>
                        </div>
                    </div>
                    <div className="filter-buttons">
                        <button onClick={() => handleFilter('cancelAll')}
                                className={filterType === 'cancelAll' ? 'selected-filter-button' : ''}>لغو همه فیلتر‌ها
                        </button>
                        <button onClick={() => handleFilter('addFilter')}
                                className={filterType === 'addFilter' ? 'selected-filter-button' : ''}>اعمال فیلتر
                        </button>
                    </div>
                </Wrapper>
            }
            {(successPay || failedPay) &&
                <Wrapper close={close}>
                    <div className="section-title">
                        {successPay &&
                            <div className="title-text">
                                <span>جزئیات تراکنش موفق</span><img src={YesLight} alt=""/>
                            </div>}
                        {failedPay &&
                            <div className="title-text">
                                <span>جزئیات تراکنش ناموفق</span><img src={NoLight} alt=""/>
                            </div>}
                    </div>
                    <div className="details-container">
                        <div className="content">
                            <div className="row"><span>مبلغ تراکنش:</span><span>{selectedItem.Price}</span></div>
                            <div className="row"><span>سرویس تراکنش:</span><span>{selectedItem.TypeName}</span>
                            </div>
                            {successPay &&
                                <div className="row"><span>بازگشت به کیف پول:</span><span>250 ریال</span></div>}
                            <div className="row"><span>نحوه پرداخت:</span><span>{selectedItem.PayType}</span></div>
                            <div className="row">
                                <span>تاریخ تراکنش:</span><span>{selectedItem.Date ? selectedItem.Date.split(' ')[0] : ''}</span>
                            </div>
                            <div className="row">
                                <span>زمان تراکنش:</span><span>{selectedItem.Date ? selectedItem.Date.split(' ')[1] : ''}</span>
                            </div>
                            {successPay &&
                                <div className="row">
                                    <span>شماره همراه:</span><span>{selectedItem.PhoneNumber}</span>
                                </div>}
                            <div className="row"><span>کدپیگیری:</span><span>8888888888888</span></div>
                        </div>
                    </div>
                </Wrapper>
            }
        </ContentContainer>
    )
}

export default Transactions