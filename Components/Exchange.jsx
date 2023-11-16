import dynamic from "next/dynamic";
const TechnicalAnalysis = dynamic(
    () => import("react-ts-tradingview-widgets").then((w) => w.TechnicalAnalysis),
    {
        ssr: false,
    }
);
const Widget = dynamic(
    () => import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
    {
        ssr: false,
    }
);


const Exchange = () => {
    return (
        <div className="exchange_wrapper">
            <div className="technical_analysis">
                <TechnicalAnalysis colorTheme="light" symbol="BTCUSD" width="100%"></TechnicalAnalysis>
            </div>
            <div className="market_info">
                <div className="market_widget">
                    <Widget symbol="BTCUSD" theme="light" width="100%" />
                </div>
                <div className="book">
                    <div className="book_container">
                        <h3>Buy</h3>
                        <p>Price 29547.86 USDT</p>
                        <div className="book_input_wrapper">
                            <div className="base_currency">
                                <span>Quantity</span>
                                <input name="buy_input" className="book_input" type="text" />
                                <span>USDT</span>
                            </div>
                        </div>
                        <div className="book_input_wrapper">
                            <div className="book_currency">
                                <span>Quantity</span>
                                <input name="buy_input" className="book_input" type="text" />
                                <span>BTC</span>
                            </div>
                        </div>
                        <button className="buy book_btn">BUY NOW</button>
                    </div>
                    <div className="book_container">
                        <h3>Sell</h3>
                        <p>Price 0.86 BTC</p>
                        <div className="book_input_wrapper">
                            <div className="base_currency">
                                <span>Quantity</span>
                                <input name="sell_input" className="book_input" type="text" />
                                <span>BTC</span>
                            </div>
                        </div>
                        <div className="book_input_wrapper">
                            <div className="book_currency">
                                <span>Quantity</span>
                                <input name="sell_input" className="book_input" type="text" />
                                <span>USDT</span>
                            </div>
                        </div>
                        <button className="sell book_btn">SELL NOW</button>
                    </div>
                    <div className="order_book">
                        <h3>Order Book</h3>
                        <table className="order_table" >
                            <thead>
                                <tr>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        1000
                                    </td>
                                    <td>
                                        250
                                    </td>
                                    <td>
                                        25000
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Exchange