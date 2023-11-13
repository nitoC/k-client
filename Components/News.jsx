import dynamic from "next/dynamic";

const Timeline = dynamic(
    () => import("react-ts-tradingview-widgets").then((w) => w.Timeline),
    {
        ssr: false,
    }
);
const EconomicCalendar = dynamic(
    () => import("react-ts-tradingview-widgets").then((w) => w.EconomicCalendar),
    {
        ssr: false,
    }
);


const News = () => {
    return (
        <>
            <h1 className="economic_calender_heading"> Economic Calender & Top news</h1>
            <div className="news_wrapper">
                <div className="top_news">

                    <Timeline colorTheme="light" feedMode="market" market="crypto" height={400} width="100%"></Timeline>
                </div>
                <div className="economic_calender">
                    <EconomicCalendar colorTheme="light" height={400} width="100%"></EconomicCalendar>
                </div>
            </div>
        </>
    )
}

export default News