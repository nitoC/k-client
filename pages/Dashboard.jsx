import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { addressfunc } from "../apis/api";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import {
  AppBar,
  Button,
  Toolbar,
  Paper,
} from "@material-ui/core";
import tawk from "tawkto-react";
import { Logout } from "../redux/actions";
import { toggleDrawer } from "../utils/toggleDrawer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PageLoader from "../Components/loaders/PageLoaders";
//Top section with name and deposit button
import FirstSection from '../Components/FirstSection';
//Top section with name and deposit button
import DashboardHome from '../Components/DashboardHome';
//transaction section
import Transactions from "../Components/modals/Transactions";
//plan section with name and upgrade button
import Plan from '../Components/Plan';
// referral link
import Refer from "../Components/Referal";
//withdraw modal section with withdraw button
import Withdrawal from "../Components/modals/Withdraw";
//deposit modal section with deposit button
import Deposit from "../Components/modals/Deposit";

//Sidebar
import Sidebar from "../Components/Sidebar";
import Switcher from "../Components/utils/Switcher";


let depaddress = {};




const Dashboard = () => {
  let interval;
  const tawkPid = "619a2ab96885f60a50bcca66";
  const tawkKey = "1fl13dpgg";
  const DashboardPages = ["Home", "Settings", "Exchange", "Market", "Referral", "News", "Documents"];

  const [page, setpage] = useState('Home')//page


  //drawer
  const [drawer, setDrawer] = useState({
    top: false,
    left: true,
    bottom: false,
    right: false,
  });
  const [confirmed, setconfirmed] = useState(false);
  const dispatch = useDispatch();
  const [loader, setloader] = useState("page_loader");
  const [address, setaddress] = useState({
    usdt: "",
    btc: "",
  });
  const router = useRouter();
  const users = useSelector((state) => state.Reducer);
  let person1 = users.user;
  let person;
  if (person1) {
    person = {
      id: person1._id,
      email: person1.email,
      name: person1.name,
      username: person1.username,
      balance: person1.balance,
      capital: person1.capital,
      plan: person1.plan,
    };
  }
  console.log(users)
  if (!person1)
    person = {
      name: "",
      username: "",
      balance: "",
      capital: "",
      plan: null,
      email: "",
    };

  const [user, setUser] = useState({
    name: person.name,
    username: person.username,
    balance: person.balance,
    capital: person.capital,
    plan: person.plan,
  });
  const [transactions, settransactions] = useState({
    zIndex: -5,
    position: "fixed",
    top: "70px",
    left: 0,
    marginLeft: "50%",
    transform: "translateX(" + "-50%" + ")",
    display: "none",
  });
  const [modal, setmodal] = useState({
    zIndex: -5,
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "none",
  });
  const [modal1, setmodal1] = useState({
    zIndex: -5,
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "none",
  });
  const [modalT, setmodalT] = useState({
    zIndex: -5,
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "none",
  });
  const [deposit, setdeposit] = useState({
    zIndex: -5,
    position: "fixed",
    top: "50%",
    left: 0,
    marginLeft: "50%",
    transform: "translate(" + "-50%" + "," + "-50" + ")",
    display: "none",
  });
  const [withdraw, setwithdraw] = useState({
    zIndex: -5,
    position: "fixed",
    top: "50%",
    left: 0,
    marginLeft: "50%",
    transform: "translate(" + "-50%" + "," + "-50" + ")",
    display: "none",
  });


  const handleModal = () => {
    setmodal({
      zIndex: 4,
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: "block",
    });
    setdeposit({
      zIndex: 5,
      position: "fixed",
      top: "50%",
      left: 0,
      marginLeft: "50%",
      transform: "translate(" + "-50%" + "," + "-50%" + ")",
      display: "block",
    });
  };
  const handleModal1 = () => {
    setmodal1({
      zIndex: 4,
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: "block",
    });
    setwithdraw({
      zIndex: 5,
      position: "fixed",
      top: "50%",
      left: 0,
      marginLeft: "50%",
      transform: "translate(" + "-50%" + "," + "-50%" + ")",
      display: "block",
    });
  };
  const removeModal1 = () => {
    setmodal1({
      zIndex: -4,
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: "none",
    });
    setwithdraw({
      zIndex: -5,
      position: "fixed",
      top: "50%",
      left: "50%",
      marginLeft: "50%",
      transform: "translate(" + "-50%" + "," + "-50" + ")",
      display: "none",
    });
  };
  const removeModal = () => {
    setmodal({
      zIndex: -4,
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: "none",
    });
    setdeposit({
      zIndex: -5,
      position: "fixed",
      top: "50%",
      left: "50%",
      marginLeft: "50%",
      transform: "translate(" + "-50%" + "," + "-50" + ")",
      display: "none",
    });
  };

  //transactions modal
  const handleTransactions = () => {
    if (confirmed == false) {
      setmodalT({
        zIndex: 4,
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "block",
      });
      settransactions({
        zIndex: 5,
        position: "fixed",
        top: "90px",
        left: 0,
        marginLeft: "50%",
        transform: "translateX(" + "-50%" + ")",
        display: "block",
      });
      setconfirmed(true);
    } else {
      setmodalT({
        zIndex: -4,
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "none",
      });
      settransactions({
        zIndex: -5,
        position: "fixed",
        top: "50%",
        left: "50%",
        marginLeft: "50%",
        transform: "translate(" + "-50%" + "," + "-50" + ")",
        display: "none",
      });
      setconfirmed(false);
    }
  };
  const removetransactions = () => {
    setmodalT({
      zIndex: -4,
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: "none",
    });
    settransactions({
      zIndex: -5,
      position: "fixed",
      top: "50%",
      left: "50%",
      marginLeft: "50%",
      transform: "translate(" + "-50%" + "," + "-50" + ")",
      display: "none",
    });
  };
  const handleLogout = useCallback(() => {
    dispatch(Logout({}));
    toast('Logout successful')
    router.push("/Signin");
    window.location = '/Signin';
  }, [dispatch, router]);
  const addfunc = async () => {
    try {
      depaddress = await addressfunc();
      setaddress({
        usdt: depaddress.data.address.usdt,
        btc: depaddress.data.address.btc,
      });
    } catch (err) {
      if (err) console.log(err.message);
    }
  };

  //handle pages
  const handleDashboardPage = useCallback((page) => {
    setpage(page)

  }, [])




  useEffect(() => {
    addfunc();
    if (document.readyState === "complete") {

      setTimeout(() => setloader("no_page_loader"), 2000);
    } else {

      window.addEventListener("load", () => {
        console.log("loaded");
        setTimeout(() => setloader("no_page_loader"), 2000);
      });

      return () =>
        window.addEventListener("load", () => {
          console.log("loaded");
          setTimeout(() => setloader("no_page_loader"), 2000);
        });
    }
  }, []);
  useEffect(() => {
    new tawk(tawkPid, tawkKey);
    //tawkto.setBackgroundColor('blue')
  }, [handleLogout]);
  return (
    <div className="dashboard-cover">
      <PageLoader loader={loader} />
      <div className='dashboard_header'>
        <Toolbar className="cov">
          <div className="dash-header">
            <div className="logo">
              <h1>
                K<span>Inv</span>
              </h1>
            </div>
            <nav className="dash-nav">
              <div className="btn-sec">
                <Button
                  className="btn"
                  variant="outlined"
                  onClick={handleTransactions}
                  size="small"
                >
                  transactions
                </Button>
              </div>
              <Button
                variant="contained"
                className="btn"
                size="medium"
                onClick={() => handleLogout(interval)}
                color="secondary"
                style={{ borderRadius: "5px 5px 5px 5px" }}
              >
                logout
              </Button>
            </nav>
          </div>
        </Toolbar>
      </div>
      <ToastContainer />
      <div className="body">
        <Sidebar
          page={handleDashboardPage}
          toggleDrawer={toggleDrawer}
          drawer={drawer}
          drawerFunction={(
            data
          ) => setDrawer(data)}
        />
        <div className="dashboard_topnav">
          <FirstSection user={user} handlers={{ handleModal, handleModal1, handleDashboardPage }} />
          <div className="body-cover">
            <Switcher element={page} type={DashboardPages} users={users} handlers={{ handleModal1, handleModal }} />
            <div className="sec-1"></div>
          </div>
        </div>
        <Deposit
          email={person.email}
          balance={user.balance}
          removeModal={removeModal}
          modal={{ modal, deposit }}
          address={address}
        />
        <Withdrawal
          email={person.email}
          balance={user.balance}
          removeModal={removeModal1}
          modal={{ modal1, withdraw }}
        />
        <Transactions
          click={{ handleTransactions, removetransactions }}
          modal={{ modalT, transactions }}
          user={users ? users.user ? users.user.transactions : '' : ''}
        />
      </div>
    </div>
  );
};

export default Dashboard;
