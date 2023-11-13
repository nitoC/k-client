import dynamic from "next/dynamic";

const CryptoCurrencyMarket = dynamic(
    () => import("react-ts-tradingview-widgets").then((w) => w.CryptoCurrencyMarket),
    {
        ssr: false,
    }
);



const Market = () => {
    return (
        <div className="market_wrapper">
            <CryptoCurrencyMarket colorTheme="light" width="100%" height={400}></CryptoCurrencyMarket>
        </div>
    )
}

export default Market