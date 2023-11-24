import dynamic from "next/dynamic";
import { createOrders, getOrders, getToBtcRate } from "../apis/api";
import { useCallback, useEffect, useState } from "react";
import currencyConverter from "../helpers/currencyConverter";

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
    const [sellquantity, setSellquantity] = useState('')
    const [buyquantity, setBuyquantity] = useState('')
    const [btc, setbtc] = useState('')
    const [usd, setusd] = useState('')

    const bookOrderHandler = async (type) => {
        console.log({ userId: JSON.parse(userId), type, price: sellquantity, value: btc, currency: 'Btc' })

        try {
            if (type === 'buy') {
                await createOrders({ userId: JSON.parse(userId), type, price: usd, value: buyquantity, currency: 'Btc' })
                return
            }

            createOrders({ userId: JSON.parse(userId), type, price: sellquantity, value: btc, currency: 'Btc' })
            return
        } catch (err) {
            console.log(err)
        }

    }



    const fetchRateHandler = async (e, type) => {
        const inputValue = e.target.value;

        if (inputValue === '' || isNaN(parseFloat(inputValue)) || parseFloat(inputValue) <= 0) {
            console.log('Please enter a valid positive number');
            // Set the values to an appropriate default value or null based on your use case
            setBuyquantity('');
            setSellquantity('');
            setbtc('');
            setusd('');
            return;
        }

        try {
            if (type === 'buy_convertUsd') {
                let rate = await getToBtcRate(inputValue);
                setBuyquantity(rate.data);
                setusd(inputValue);
            } else if (type === 'buy_convertBtc') {
                let rate = await getToBtcRate(1);
                let convertedRate = currencyConverter(inputValue, 'toUsd', rate.data);
                setBuyquantity(convertedRate);
                setbtc(inputValue);
            } else if (type === 'sell_convertUsd') {
                let rate = await getToBtcRate(1);
                let convertedRate = currencyConverter(inputValue, 'toBtc', rate.data);
                console.log(convertedRate)
                setSellquantity(convertedRate.toFixed(3));
                setbtc(inputValue);
                console.log(btc)
            }
        } catch (err) {
            console.log(err);
        }
    };



    const getOrdersHandler = useCallback(async () => {

        try {
            // fetch data from external API
            const res = await getOrders(JSON.parse(userId));
            const order = res.data.payload;

            setorders(order.reverse())

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
                        <p>{buyquantity} BTC</p>
                        <div className="book_input_wrapper">
                            <div className="base_currency">
                                <span>Quantity</span>
                                <input onChange={(e) => fetchRateHandler(e, 'buy_convertUsd')} name="buy_input" className="book_input" type="text" value={usd} />
                                <span>USD</span>
                            </div>
                        </div>
                        <div className="book_input_wrapper">
                            <div className="book_currency">
                                <span>Quantity</span>
                                <input disabled onChange={(e) => fetchRateHandler(e, 'buy_convertBtc')} name="buy_input" className="book_input" type="text" value={buyquantity} />
                                <span>BTC</span>
                            </div>
                        </div>
                        <button onClick={() => bookOrderHandler('buy')} className="buy book_btn">BUY NOW</button>
                    </div>
                    <div className="book_container">
                        <h3>Sell</h3>
                        <p>{sellquantity} USD</p>
                        <div className="book_input_wrapper">
                            <div className="base_currency">
                                <span>Quantity</span>
                                <input onChange={(e) => fetchRateHandler(e, 'sell_convertUsd')} name="sell_input" className="book_input" type="text" value={btc} />
                                <span>BTC</span>
                            </div>
                        </div>
                        <div className="book_input_wrapper">
                            <div className="book_currency">
                                <span>Quantity</span>
                                <input disabled onChange={(e) => fetchRateHandler(e, 'sell_convertBtc')} name="sell_input" className="book_input" type="text" value={sellquantity} />
                                <span>USD</span>
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

