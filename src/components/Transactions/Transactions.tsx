import {useState, useEffect} from 'react'
import backLight from '../../assets/icons/light/back-th2.svg'
import filterLight from '../../assets/icons/light/Filter.svg'
import sortLight from '../../assets/icons/light/Sort.svg'
import closeIcon from '../../assets/icons/close-icon.png'
import Sort from './partials/Sort'
import Filter from "./partials/Filter";
import Details from "./partials/Details";
import axios from "axios";
import {ContentContainer, Header, Content, FilterAndSort, WrapperContainer} from './styleElements/styleElement'


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
                    <Sort handleSort={handleSort} sortType={sortType}/>
                </Wrapper>
            }
            {showFilter &&
                <Wrapper close={close}>
                    <Filter setIsPay={setIsPay} isPay={isPay} filterType={filterType} handleFilter={handleFilter}/>
                </Wrapper>
            }
            {(successPay || failedPay) &&
                <Wrapper close={close}>
                    <Details successPay={successPay} failedPay={failedPay} selectedItem={selectedItem}/>
                </Wrapper>
            }
        </ContentContainer>
    )
}

export default Transactions