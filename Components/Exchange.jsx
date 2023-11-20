import dynamic from "next/dynamic";
import { completedOrders, createOrders, getOrders } from "../apis/api";
import { useCallback, useEffect, useState } from "react";

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

    let userId = localStorage.getItem('userId')
    const [orders, setorders] = useState([])

    const bookOrderHandler = async (type) => {
        // console.log('book order')
        let data = await createOrders({ userId: JSON.parse(userId), type, price: 0.44, value: 23, currency: 'Btc' })
        console.log(data)
    }
    const Handler = () => {

    }

    const getOrdersHandler = useCallback(async () => {

        try {
            console.log('hello')
            console.log(userId)
            // fetch data from external API
            const res = await getOrders(JSON.parse(userId));
            const order = res.data.payload;

            setorders(order.reverse())

            console.log(order, 'orders')


        } catch (err) {
            console.log('Error getting posts', err);
            return;
        }
    }, [userId])

    useEffect(() => {
        getOrdersHandler();
    }, [getOrdersHandler])
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
                        <button onClick={() => bookOrderHandler('buy')} className="buy book_btn">BUY NOW</button>
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
                        <button onClick={() => bookOrderHandler('sell')} className="sell book_btn">SELL NOW</button>
                    </div>
                    <div className="order_book">
                        <h3 className="book_heading">Order Book</h3>
                        <table className="exchange_table" >
                            <thead>
                                <tr>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {orders && (orders).map((order, index) => {
                                    return (

                                        <tr key={index + Math.random()}>
                                            <td>
                                                {order.price}
                                            </td>
                                            <td>
                                                {order.value}
                                            </td>
                                            <td>
                                                {order.status}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Exchange

