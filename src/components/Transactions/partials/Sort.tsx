function Sort({handleSort, sortType}: { handleSort: any, sortType: String }) {
    return (
        <>
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
        </>
    )
}

export default Sort