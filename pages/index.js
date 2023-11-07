import Head from "next/head";
//import Image from 'next/image'
import tawk from "tawkto-react";
import Link from "next/link";
import { ArrowForwardIos } from "@material-ui/icons";
import {
  Avatar,
  Button,
  Card,
  Fab,
  Typography,
  IconButton,
  Box,
  Container,
} from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
//import { AppBar } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";


import {
  CallMade,
  Forward,
  Person,
  PersonAddTwoTone,
  Timer,
  AlarmAddTwoTone,
  Facebook,
  Twitter,
  Instagram,
  Close,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import TradingViewWidget from "../Components/Widget";

const Home = () => {
  const tawkToPropertyId = "get_property_id_from_tawkto_dashboard";
  const tawkToKey = "get_key_from_tawkto_dashboard";
  const [modal, setmodal] = useState("modal");
  const [nav, setnav] = useState("nav");
  const [loaded, setloaded] = useState(100);
  const [renav, setrenav] = useState("re-nav");
  const tawkPid = "619a2ab96885f60a50bcca66";
  const tawkKey = "1fl13dpgg";

  const handleNav = () => {
    setmodal("n-modal");
    setnav("n-nav");
  };
  const handleRenav = () => {
    setmodal("modal");
    setnav("nav");
  };

  return (
    <div className="wrapper">
      
      <Head>
      <script src="https://widget.nomics.com/embed.js" async/>
        <script
          type="text/javascript"
          src="https://files.coinmarketcap.com/static/widget/coinPriceBlock.js"
          async
        />
        <script src="https://widgets.coingecko.com/coingecko-coin-ticker-widget.js" async/>

        <script
          defer
          src="https://www.livecoinwatch.com/static/lcw-widget.js"
          async
        />
        <script src="https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js" async></script>
      </Head>
      <div className="side-nav">
        <div onClick={handleRenav} className={modal}></div>
        <div className={nav}>
          <div className="ncov">
            <div className="icon">
              <IconButton onClick={handleRenav}>
                <Close />
              </IconButton>
            </div>
            <Link href="/About">
              About us
            </Link>
            <Link href="/Services">
              Services
            </Link>
            <Link href="#support">
              Support
            </Link>
            <div className="buttons">
              <div className="btn-1">
                <Link href="/Signin" passHref>
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    style={{ width: "100px", borderRadius: "0px" }}
                  >
                    login
                  </Button>
                </Link>
              </div>
              <div className="btn-2">
                <Link href="/Signup" passHref>
                  <Button
                    variant="outlined"
                    size="large"
                    color="secondary"
                    style={{ width: "100px", borderRadius: "0px" }}
                  >
                    signup
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*mobile*/}
      <div className="m-cover">
        <div className="mobile">
          <header>
            <div className="app-cov">
              <div className="header appbar">
                <div className="logo">
                  <h1>
                    K<span>Inv</span>
                  </h1>
                </div>
                <Box className="menu-icon">
                  <IconButton
                    onClick={handleNav}
                    color="inherit"
                    fontSize="15px"
                    aria-label="menu"
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              </div>
            </div>
          </header>
          <div className="m-keyword">
            <h1 style={{}}>
              KeyTrade
              <br />
              <span>Investment</span>
            </h1>
          </div>
          <Link href="https://tawk.to/chat/619a2ab96885f60a50bcca66/1fl13dpgg">
            <Fab
              variant="extended"
              color="primary"
              style={{
                position: "fixed",
                bottom: 70,
                right: "20px",
                zIndex: 10,
              }}
            >
              chat
              <Person />
            </Fab>
          </Link>
        </div>
        <div className="m-box">
          <div className="m-desc-profit">
            <h3>
              20% to 40% <span>profit each day</span>
            </h3>
          </div>
          <p>
            We create the future. Cryptocurrency is the future of the global
            financial market. And now we are engaged in the extraction of one of
            the most valuable resources, which allows us to get maximum profits
            today.
          </p>
          <div className="m-action-btn">
            <Link href="/Signup" passHref>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                endIcon={<Forward />}
              >
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/*desktop */}
      <div className="contained">
        <header>
          <div className="app-cov">
            <div className="header appbar">
              <div className="logo">
                <h1>
                  K<span>Inv</span>
                </h1>
              </div>
              <Box className="nav-1">
                <div className="links">
                  <Link href="/About">
                    About us
                  </Link>
                  <Link href="/Services">
                    Services
                  </Link>
                  <Link href="#support">
                    Support
                  </Link>
                </div>
                <ButtonGroup>
                  <Link href="/Signin" passHref>
                    <Button
                      variant="contained"
                      size="medium"
                      color="secondary"
                      style={{ borderRadius: "5px 0px 0px 5px" }}
                    >
                      login
                    </Button>
                  </Link>
                  <Link href="/Signup" passHref>
                    <Button
                      variant="outlined"
                      size="medium"
                      color="secondary"
                      style={{ borderRadius: "0px 5px 5px 0px" }}
                    >
                      signup
                    </Button>
                  </Link>
                </ButtonGroup>
              </Box>
              <Box className="menu-icon">
                <IconButton
                  onClick={handleNav}
                  color="inherit"
                  fontSize="15px"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </div>
          </div>
        </header>
        <div className="description">
          <div className="keyword">
            <h1 className="banner_heading">
              Key
              <span>
                Trade
              </span>
              <br/>
                Investment
            </h1>
            <h3>
               Cryptocurrency is the future of the global
              financial market. And now we are engaged in the extraction of one
              of the most valuable resources, which allows us to get maximum
              profits today.
            </h3>
            <div className="action-btn">
              <Link href="/Signup" passHref>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  endIcon={<Forward />}
                >
                  Get started
                </Button>
              </Link>
            </div>
          </div>
          <div className="desc-profit">
            <h1>20% to 40% profit each day</h1>
            <Link href="https://tawk.to/chat/619a2ab96885f60a50bcca66/1fl13dpgg">
              <Fab
                variant="extended"
                color="primary"
                style={{ position: "fixed", bottom: 70, right: 70, zIndex: 10 }}
              >
                chat
                <Person />
              </Fab>
            </Link>
          </div>
        </div>
      </div>
      <div className="widget">
        <div className="diw1">
          <div
            class="livecoinwatch-widget-5"
            lcw-base="USD"
            lcw-color-tx="#999999"
            lcw-marquee-1="coins"
            lcw-marquee-2="movers"
            lcw-marquee-items="10"
          ></div>
        </div>
        <div className="diw">
        <TradingViewWidget/>
         </div>
      </div>
      <div className="about">
        <div className="about-container">
          <h1 className="l-headers">
            About <span>Us</span>
          </h1>
          <div className="about-desc">
            <div className="img"></div>
            <div className="about-letters">
              Our team of professional traders, economists, logistics
              specialists and IT specialists were united by a common idea.
              Having experience and possibilities of its realization, we have
              created an investment company, which in a short time was able to
              achieve success. We are constantly improving the methods of mining
              and trading the cryptocurrency at the exchange, closely following
              any fluctuations in rates and strive to ensure a stable income for
              each of our investors. Among other tasks, there is a constant and
              harmonious development of the project, which will allow to expand
              and increase the investment pool over time, upgrade the equipment
              and guarantee instant payments to all project participants.
            </div>
          </div>
        </div>
      </div>
      <div className="direction">
        
        <div className="about-container">
          <h1 className="l-headers">
            How to <span>get started</span>
          </h1>
          <div className="st">
          <div className="steps">
            <div className="step-img1"></div>
            <div className="step-text">
              <h2>Register/Login</h2>
            </div>
          </div>
          <div className="steps">
            <div className="step-text">
              <h2>Choose a plan</h2>
            </div>
            <div className="step-img2"></div>
          </div>
          <div className="steps">
            <div className="step-img3"></div>
            <div className="step-text">
              <h2>Make profit</h2>
            </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="team">
        <div className="team-header">
          <h1 className="l-headers">
            Our <span>Team</span>
          </h1>
        </div>
        <div className="flex-t">
          <div className="each-d-l">
            <div className="each">
              <div className="each-image f"></div>
              <div className="each-desc">
                <h4>Siahan Fadhlan</h4>
                <p> Company Ceo </p>
              </div>
            </div>
          </div>
          <div className="each-d-l">
            <div className="each">
              <div className="each-image s"></div>
              <div className="each-desc">
                <h4>Hara Arik</h4>
                <p>Trade Specialist/Logistics Manager </p>
              </div>
            </div>
          </div>
          <div className="each-d-l">
            <div className="each">
              <div className="each-image t"></div>
              <div className="each-desc">
                <h4>Fujit Anzu</h4>
                <p>Marketing Manager/Customer Support </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="plans">
        <div className="about-container">
          <h1 className="l-headers">
            Service <span>Plans</span>
          </h1>
          <div className="plan-desc">
            <div className="card">
              <Card elevation={3}>
                <div className="plan-letters">
                  <Typography variant="h4" color="secondary">
                    Gold
                  </Typography>
                  <Typography variant="h6" color="initial">
                    Profit:{" "}
                  </Typography>
                  <Typography variant="h2" color="primary">
                    20%
                  </Typography>
                  <Typography variant="h6" color="initial">
                    Min Deposit:{" "}
                  </Typography>
                  <Typography variant="h4" color="initial">
                    $100
                  </Typography>
                  <Typography variant="h6" color="initial">
                    Duration of investment:{" "}
                  </Typography>
                  <Typography variant="h4" color="textSecondary">
                    48hrs
                  </Typography>
                  <Typography variant="h6" color="initial">
                    Referral Bonus:{" "}
                  </Typography>
                  <Typography variant="h4" color="initial">
                    %4
                    <CallMade
                      style={{ fontSize: "35px", textAlign: "center" }}
                      color="secondary"
                    />
                  </Typography>
                </div>
              </Card>
            </div>
            <div className="card">
              <Card elevation={3}>
                <div className="plan-letters">
                  <Typography variant="h4" color="secondary">
                    Diamond
                  </Typography>
                  <Typography variant="h6" color="initial">
                    Profit:{" "}
                  </Typography>
                  <Typography variant="h2" color="primary">
                    30%
                  </Typography>
                  <Typography variant="h6" color="initial">
                    Min Deposit:{" "}
                  </Typography>
                  <Typography variant="h4" color="initial">
                    $1000
                  </Typography>
                  <Typography variant="h6" color="initial">
                    Duration of investment:{" "}
                  </Typography>
                  <Typography variant="h4" color="textSecondary">
                    72hrs
                  </Typography>
                  <Typography variant="h6" color="initial">
                    Referral Bonus:{" "}
                  </Typography>
                  <Typography variant="h4" color="initial">
                    %4
                    <CallMade
                      style={{ fontSize: "35px", textAlign: "center" }}
                      color="secondary"
                    />
                  </Typography>
                </div>
              </Card>
            </div>
            <div className="card">
              <Card elevation={3}>
                <div className="plan-letters">
                  <Typography variant="h4" color="secondary">
                    Platinum
                  </Typography>
                  <Typography variant="h6" color="initial">
                    Profit:{" "}
                  </Typography>
                  <Typography variant="h2" color="primary">
                    45%
                  </Typography>
                  <Typography variant="h6" color="initial">
                    Min Deposit:{" "}
                  </Typography>
                  <Typography variant="h4" color="initial">
                    $5000
                  </Typography>
                  <Typography variant="h6" color="initial">
                    Duration of investment:{" "}
                  </Typography>
                  <Typography variant="h4" color="textSecondary">
                    96hrs
                  </Typography>
                  <Typography variant="h6" color="initial">
                    Referral Bonus:{" "}
                  </Typography>
                  <Typography variant="h4" color="initial">
                    %4
                    <CallMade
                      style={{ fontSize: "35px", textAlign: "center" }}
                      color="secondary"
                    />
                  </Typography>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="us">
        <div className="about-container">
          <h1 className="l-headers">
            Why <span>Us</span>
          </h1>
          <div className="us-container">
            <div className="us-desc">
              <div className="us-img">
                <AlarmAddTwoTone
                  style={{ fontSize: "35px", textAlign: "center" }}
                  color="primary"
                />
              </div>
              <div className="us-letters">
                <h3>Stable Income</h3>
                <h4>
                  We work around the clock - this means that your money is
                  constantly in circulation and your profit grows every hour.
                </h4>
              </div>
            </div>
            <div className="us-desc">
              <div className="us-img">
                <CallMade
                  style={{ fontSize: "35px", textAlign: "center" }}
                  color="primary"
                />
              </div>
              <div className="us-letters">
                <h3>Instant Payment</h3>
                <h4>
                  Getting your profit is very simple - you make a withdrawal
                  request in your personal account and in a moment receive money
                  in your wallet.
                </h4>
              </div>
            </div>
            <div className="us-desc">
              <div className="us-img">
                <PersonAddTwoTone
                  style={{ fontSize: "35px", textAlign: "center" }}
                  color="primary"
                />
              </div>
              <div className="us-letters">
                <h3>Professional Team</h3>
                <h4>
                  We have many years of experience working on stock exchanges
                  and in the sphere of cryptocurrency mining – you can
                  completely entrust your investments to us.
                </h4>
              </div>
            </div>
            <div className="us-desc">
              <div className="us-img">
                <Timer
                  style={{ fontSize: "35px", textAlign: "center" }}
                  color="primary"
                />
              </div>
              <div className="us-letters">
                <h3>24/7 Support</h3>
                <h4>
                  Our managers are always ready to answer the questions you are
                  interested in - contact us in any convenient way and you will
                  receive the necessary information.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer" id="support">
        <div className="f-container">
          <div className="contact">
            <div className="logo">
              <h1>
                K<span>Inv</span>
              </h1>
            </div>
            <Typography variant="h5" color="secondary">
              Email:
            </Typography>
            <Typography variant="h6" className="font">
              supportkinvus@gmail.com
            </Typography>
            <div className="action-btn">
              <Link href="/Signup" passHref>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  endIcon={<Forward />}
                >
                  Get started
                </Button>
              </Link>
            </div>
          </div>
          <div className="p-system">
            <Typography variant="h6" color="secondary">
              Payment System
            </Typography>
            <Typography variant="h6" className="font">
              <ArrowForwardIos
                style={{ fontSize: "15px", textAlign: "center" }}
              />{" "}
              BITCOIN
            </Typography>
            <Typography variant="h6" className="font">
              <ArrowForwardIos
                style={{ fontSize: "15px", textAlign: "center" }}
              />{" "}
              USDT
            </Typography>
          </div>
          <div className="links">
            <Typography variant="h6" color="secondary">
              Useful links
            </Typography>
            <span style={{display:'flex', alignItems:'center'}}>
                <ArrowForwardIos
                  style={{ fontSize: "10px", textAlign: "center" }}
                />
            <Link href="/Services">
                services
            </Link>
              </span>
            <span style={{display:'flex', alignItems:'center'}}>
                <ArrowForwardIos
                  style={{ fontSize: "10px", textAlign: "center" }}
                />
            <Link href="/About">
                about
              
            </Link>
              </span>
            <span style={{display:'flex', alignItems:'center'}}>
                <ArrowForwardIos
                  style={{ fontSize: "10px", textAlign: "center" }}
                />
            <Link href="https://tawk.to/chat/619a2ab96885f60a50bcca66/1fl13dpgg">
                support
             
            </Link>
              </span>
              <span style={{display:'flex', alignItems:'center'}}>
                <ArrowForwardIos
                  style={{ fontSize: "10px", textAlign: "center" }}
                />
            <Link href="/certificate.png">
                certificate
              
            </Link>

              </span>
          </div>
          <div className="social">
            <Link href="https://facebook.com">
              <Facebook style={{cursor:"pointer"}} fontSize="large" />
            </Link>
            <Link href="https://twitter.com">
              <Twitter style={{cursor:"pointer"}} fontSize="large" />
            </Link>
            <Link href="https://instagram.com">
              <Instagram style={{cursor:"pointer"}} fontSize="large" />
            </Link>
          </div>
        </div>
        <p className="copy"> &copy; keytradeinverstment 2020</p>
      </footer>
    </div>
  );
};

export default Home;
