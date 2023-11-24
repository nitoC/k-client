const currencyConverter = (value, type, usdToBtcUnitRate) => {
    if (type === 'toUsd') {
        //usd to btc
        return (value * usdToBtcUnitRate);
    } else if (type === 'toBtc') {
        //btc to usd
        return (value / usdToBtcUnitRate);
    }
}


//https://blockchain.info/tobtc?currency=USD&value=1

export default currencyConverter;