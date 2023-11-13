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
                <Widget symbol="BTCUSD" theme="light" width="100%" />
            </div>
        </div>
    )
}

export default Exchange