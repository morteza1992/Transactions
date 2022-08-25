import YesLight from "../../../assets/icons/light/Yes.svg";
import NoLight from "../../../assets/icons/light/No.svg";

function Filter({setIsPay, isPay, filterType, handleFilter}) {
    return (
        <>
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
        </>
    )
}

export default Filter