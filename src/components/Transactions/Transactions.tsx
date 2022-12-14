import {useState, useEffect} from 'react'
import backLight from '../../assets/icons/light/back-th2.svg'
import backDark from '../../assets/icons/dark/back-th2.svg'
import filterLight from '../../assets/icons/light/Filter.svg'
import filterDark from '../../assets/icons/dark/Filter.svg'
import sortLight from '../../assets/icons/light/Sort.svg'
import sortDark from '../../assets/icons/dark/Sort.svg'
import closeLight from '../../assets/icons/closeLight.png'
import closeDark from '../../assets/icons/closeDark.png'
import infoDark from '../../assets/icons/dark/info.svg'
import infoLight from '../../assets/icons/light/info.svg'
import Sort from './partials/Sort'
import Filter from "./partials/Filter";
import Details from "./partials/Details";
import axios from "axios";
import {ContentContainer, Header, Content, FilterAndSort, WrapperContainer} from './styleElements/styleElement'


function Wrapper({children, close, darkMode}: { children: any, close: any, darkMode: Boolean }) {
    return (
        <WrapperContainer className="section-content">
            <div className={"content-container " + (darkMode ? 'dark-mode' : '')}>
                <img className="close"
                     src={darkMode ? closeDark : closeLight}
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
    const [sortType, setSortType] = useState('')
    const [showFilter, setShowFilter] = useState(false)
    const [filterType, setFilterType] = useState('addFilter')
    const [successPay, setSuccessPay] = useState(false)
    const [failedPay, setFailedPay] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})
    const [isPay, setIsPay] = useState(false)
    const [darkMode, setDarkMode] = useState<Boolean>(false)
    const getData = async () => {
        await axios.get('src/json/data.json').then((response) => {
            setData(response.data.Data)
            setFilterData(response.data.Data)
        })
    }
    const TransactionsItems = filterData.map((item: any, index) => <div className="box-container" key={index}>
        <div className="text-container">
            <div className="font-bold">{item.TypeName}</div>
            {item.IsPay
                ? <button className="failed">????????????</button>
                : <div><span>???? ????????????:</span><span>8888888888</span></div>
            }
        </div>
        <div className="text-container">
            <div><span className="font-bold">{item.Price}</span><span> ??????????</span></div>
            <div className="date">{item.Date}</div>
            <button className="details" onClick={() => showDetails(item)}>????????????</button>
        </div>
        <div className={"badge " + (item.IsPay ? "bg-red" : "bg-green")}>
        </div>
    </div>);

    useEffect(() => {
        try {
            getData()
        } catch (error) {

        }

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
            setFilterData(filterData.sort(function (a: any, b: any) {
                if (b.Date && a.Date) {
                    return parseFloat(b.Date.split(' ')[0].replaceAll('/', '')) - parseFloat(a.Date.split(' ')[0].replaceAll('/', ''));
                } else {
                    return 0
                }

            }))
        } else if (value === 'max') {
            setFilterData(filterData.sort(function (a: any, b: any) {
                return parseFloat(b.Price) - parseFloat(a.Price);
            }))
        } else if (value === 'min') {
            setFilterData(filterData.sort(function (a: any, b: any) {
                return parseFloat(a.Price) - parseFloat(b.Price);
            }))
        }
        setShowSort(false)
    }

    function handleFilter(value: any) {
        setFilterType(value)
        if (value === 'addFilter') {
            setFilterData(isPay ? data.filter((x: any) => !x.IsPay) : data.filter((x: any) => x.IsPay))
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
            <div className={"contentContainer " + (darkMode ? 'dark-mode-light' : '')}>
                <Header className={(showSort || showFilter ? 'blur ' : '') + (darkMode ? 'dark-mode-light' : '')}>
                    <div className="info">
                        <span>????????????</span>
                        <img src={darkMode ? infoDark : infoLight} alt=""/>
                    </div>
                    <div className="main-title">???????????????????</div>
                    <div>
                        <img src={darkMode ? backDark : backLight} alt=""/>
                        <div className="dark-mode-switcher" onClick={() => setDarkMode(!darkMode)}>
                            <div className={"switch " + (darkMode ? 'dark' : 'light')}>

                            </div>
                        </div>
                    </div>
                </Header>
                <Content className={(showSort || showFilter ? 'blur ' : '') + (darkMode ? 'dark-mode' : '')}>
                    {TransactionsItems}
                </Content>
                <FilterAndSort>
                    <div className={"filterAndSort " + (darkMode ? 'dark-mode' : '')}>
                        <div className={"section-container " + (darkMode ? 'dark-mode-light' : '')}>
                            <div className="section" onClick={() => setShowFilter(true)}>
                                <img src={darkMode ? filterDark : filterLight} alt=""/>
                                <span>??????????</span>
                            </div>
                            <div className="section" onClick={() => setShowSort(true)}>
                                <img src={darkMode ? sortDark : sortLight} alt=""/>
                                <span>???????? ????????</span>
                            </div>
                        </div>
                    </div>
                </FilterAndSort>
                {showSort &&
                    <Wrapper close={close} darkMode={darkMode}>
                        <Sort handleSort={handleSort} sortType={sortType}/>
                    </Wrapper>
                }
                {showFilter &&
                    <Wrapper close={close} darkMode={darkMode}>
                        <Filter setIsPay={setIsPay} isPay={isPay} filterType={filterType} handleFilter={handleFilter}/>
                    </Wrapper>
                }
                {(successPay || failedPay) &&
                    <Wrapper close={close} darkMode={darkMode}>
                        <Details successPay={successPay} failedPay={failedPay} selectedItem={selectedItem}/>
                    </Wrapper>
                }
            </div>
        </ContentContainer>
    )
}

export default Transactions