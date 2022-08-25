import YesLight from "../../../assets/icons/light/Yes.svg";
import NoLight from "../../../assets/icons/light/No.svg";

function Details({
                     successPay,
                     failedPay,
                     selectedItem
                 }: { successPay: Boolean, failedPay: Boolean, selectedItem: any }) {
    return (
        <>
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
        </>
    )
}

export default Details