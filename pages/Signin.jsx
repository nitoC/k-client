import { CircularProgress, Paper } from "@material-ui/core";
import { Button, FormControl, TextField, Typography } from "@material-ui/core";
import axios from "../interceptors/axios";
import Link from "next/link";
import { forgotPassword } from "../apis/api";
import { userFetch, message, rel } from "../redux/actions";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let val;
const ForgotPassword = ({ modal, removeModal, sendEmail, Loader1, cancel }) => {
  const [mail, setmail] = useState("");
  const isModal = false;

  const handleMail = (event) => {
    setmail(event.target.value);
    cancel()
  };
  return (
    <>
      <div
        className="forgot-modal"
        onClick={removeModal}
        style={modal.modal}
      ></div>
      <div className="forgot-cover" style={modal.mailSt}>
        <Typography variant="h6" color="textPrimary">
          please input registered Email
        </Typography>
        <div className="dep-card">
          <div className="dep-row pb">
            <TextField
              type="text"
              margin="dense"
              required
              fullWidth
              onChange={handleMail}
              label="Email"
              variant="filled"
            />
          </div>
          <div className="dep-row dep-btn">
            <Button
              variant="contained"
              color="primary"
              onClick={() => sendEmail(mail)}
              disabled={mail === null || mail === ""}
              size="large"
            >
              Send{" "}
              {Loader1 && (
                <CircularProgress
                  style={{ color: "white", width: "15px", height: "15px" }}
                />
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};


const Signin = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const users = useSelector((state) => state.Reducer);
  const router = useRouter();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [Loader1, setLoader1] = useState(false);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
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
  const [mailSt, setmailSt] = useState({
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
    setmailSt({
      zIndex: 5,
      position: "fixed",
      top: "50%",
      left: 0,
      marginLeft: "50%",
      transform: "translate(" + "-50%" + "," + "-50%" + ")",
      display: "block",
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
    setmailSt({
      zIndex: -5,
      position: "fixed",
      top: "50%",
      left: "50%",
      marginLeft: "50%",
      transform: "translate(" + "-50%" + "," + "-50" + ")",
      display: "none",
    });
  };
  const handleEmail = (event) => {
    setUserLogin({
      email: event.target.value,
      password: userLogin.password,
    });
  };
  const handlePassword = (event) => {
    setUserLogin({
      email: userLogin.email,
      password: event.target.value,
    });
  };
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setLoader(true);

      try {
        await dispatch(userFetch(userLogin));
        setLoader(false);
      } catch (error) {
        if (error) {
          toast.error('oops! something went wrong')
          setLoader(false)
          console.log(error);
        }
      }
    },
    [userLogin, dispatch],
  )


  //cancels loader for buttons
  const cancelL = () => {
    setLoader1(false)
  }


  const sendEmail = async (mail) => {
    console.log("hello");
    setLoader1(true);
    try {
      val = await forgotPassword({ email: mail });
      if (val.data.message == "check mail for next steps") {
        toast.success('check your email for further instructions');
      } else {
        toast.warn('seems like this email does not exist')
        val.data.message = null
      }
    } catch (err) {
      toast.error('oops! something went wrong')
      if (err) console.log(err.message);
    }
  };

  const checkSubmit = useCallback(() => {
    if (users.message == 1 && rel) {
      toast.warn(" no such user please login")
      users.message = null
    }
    if (users.message == 2 && rel) {
      toast.warn(" Password is incorrect")
      users.message = null

    }
    if (users.token) {
      toast.success("user login was successful")
      localStorage.setItem('token', users.token)
      localStorage.setItem('userId', JSON.stringify(users.user._id))
      axios.defaults.headers.common['Authorization'] = `Bearer ${users.token}`

      router.push("/Dashboard");
      window.location = "/Dashboard";
    }
  }, [router, users])

  useEffect(() => {
    setTimeout(() => {
      checkSubmit()
    }, 500)

  }, [users, checkSubmit])

  useEffect(() => {
    val ? setLoader1(false) : setLoader1(true)
  }, [])
  return (
    <div className="form-container">
      <ToastContainer />
      <div className="logo">
        <h1>
          <Link href="/">K</Link><span><Link href="/">Inv</Link></span>
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="form-cover">
        <Paper className="form-space" elevation={2}>
          <ThemeProvider theme={theme}>
            <Typography
              style={{ color: "orange", textAlign: "center" }}
              variant="h4"
            >
              Log in
            </Typography>
          </ThemeProvider>
          <div className="row-2">
            <TextField
              onChange={handleEmail}
              type="text"
              required
              margin="dense"
              label="Email"
              fullWidth
              variant="filled"
            />
          </div>
          <div className="row-2">
            <TextField
              type="password"
              onChange={handlePassword}
              margin="dense"
              required
              label="password"
              fullWidth
              variant="filled"
            />
          </div>
          <div className="row-b">
            <div className="for-o-i">
              <Link style={{ padding: "4px" }} href="/Signup">
                no account?Register
              </Link>
              <Button onClick={handleModal} style={{ padding: "4px" }}>
                forgot password?
              </Button>
            </div>
            <Button
              variant="contained"
              type="submit"
              disabled={userLogin.email == "" || userLogin.password == ""}
              color="primary"
              style={{ display: "block", width: "100%" }}
              size="large"
            >
              Sign in{" "}
              {loader && (
                <CircularProgress
                  style={{ color: "white", width: "15px", height: "15px" }}
                />
              )}
            </Button>
          </div>
        </Paper>
      </form>
      <ForgotPassword
        sendEmail={sendEmail}
        removeModal={removeModal}
        modal={{ modal, mailSt }}
        Loader1={Loader1}
        cancel={cancelL}
      />
    </div>
  );
};

export default Signin;
