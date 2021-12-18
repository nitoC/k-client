import Head from "next/head"


const About = () => {
  return (
    <div className="about">
      <div className="diw1">
     
          <div
            id="coinmarketcap-widget-coin-price-block"
            coins="1,1027,825,74,1839,3388,6528"
            currency="USD"
            theme="light"
            transparent="true"
            show-symbol-logo="true"
          ></div>
          <div
            id="coinmarketcap-widget-marquee"
            coins="1,1027,825"
            currency="USD"
            theme="light"
            transparent="false"
            show-symbol-logo="true"
          ></div>
        </div>
      <div className="about-container">
        <h1 className="l-headers">
          About <span>Us</span>
        </h1>
        <div className="about-desc">
          <div className="img"></div>
          <div className="about-letters">
            Our team of professional traders, economists, logistics specialists
            and IT specialists were united by a common idea. Having experience
            and possibilities of its realization, we have created an investment
            company, which in a short time was able to achieve success. We are
            constantly improving the methods of mining and trading the
            cryptocurrency at the exchange, closely following any fluctuations
            in rates and strive to ensure a stable income for each of our
            investors. Among other tasks, there is a constant and harmonious
            development of the project, which will allow to expand and increase
            the investment pool over time, upgrade the equipment and guarantee
            instant payments to all project participants.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
