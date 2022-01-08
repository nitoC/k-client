import { CircularProgress, Paper } from "@material-ui/core";
import { BubbleChart } from "@material-ui/icons";
import { Button, FormControl, TextField, Typography } from "@material-ui/core";
import Link from "next/link";
import { forgotPassword } from "../apis/api";
import { userFetch, message, rel } from "../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
let reload = rel;

let val;
const ForgotPassword = ({
  modal,
  removeModal,
  sendEmail,
  Logg,
  Loader1,
  cancel,
}) => {
  const [mail, setmail] = useState("");
  const isModal = false;

  const handleMail = (event) => {
    setmail(event.target.value);
    cancel();
  };
  return (
    <>
      <div
        className="forgot-modal"
        onClick={removeModal}
        style={modal.modal}
      ></div>
      <div className="forgot-cover" style={modal.mailSt}>
        <Typography variant="h6" color="primary">
          please input registered Email
        </Typography>
        <Typography variant="subtitle1" color={Logg.color}>
          {Logg.message}
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
  const [Log, setLog] = useState({ message: "", color: "" });
  const [Log1, setLog1] = useState({ message: "", color: "" });
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
    setLog({
      message: "",
      color: "",
    });
    setUserLogin({
      email: event.target.value,
      password: userLogin.password,
    });
  };
  const handlePassword = (event) => {
    setLog({
      message: "",
      color: "",
    });
    setUserLogin({
      email: userLogin.email,
      password: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);

    // console.log(userLogin)
    try {
      await dispatch(userFetch(userLogin));
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };
  const cancelL = () => {
    setLoader1(false);
  };
  const sendEmail = async (mail) => {
    console.log("hello");
    setLoader1(true);
    try {
      val = await forgotPassword({ email: mail });
    } catch (err) {
      if (err) console.log(err.message);
    }
    if (val.data.message == "check mail for next steps") {
      setLog1({ message: val.data.message, color: "primary" });
    } else {
      setLog1({ message: val.data, color: "secondary" });
      console.log(Log1);
    }
  };
  useEffect(() => {
    if (message == 1 && loader == true && rel) {
      setLog({
        message: "no such user login",
        color: "secondary",
      });
      setLoader(false);
    }
    if (message == 2 && loader == true && rel) {
      setLoader(false);
      setLog({
        message: "wrong password",
        color: "secondary",
      });
    }
    if (users.token) {
      setLog({
        message: "success",
        color: "primary",
      });
      router.push("/Dashboard");
    }
  }, [handleSubmit, Log]);
  useEffect(() => {
    val ? setLoader1(false) : setLoader1(true);
  }, [val]);
  return (
    <div className="form-container">
      <div className="logo">
        <Link href="/">
          <a>
            <h1 style={{color:"blue"}}>
              BTT
              <span>
                <ShowChart style={{ color: "orange" }} />
              </span>
            </h1>
          </a>
        </Link>
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
          <Typography variant="subtitle1" color={Log.color}>
            {Log.message}
          </Typography>
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
              <Link href="/Signup">
                <a style={{ padding: "4px" }}>no account?Register</a>
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
        Logg={Log1}
        Loader1={Loader1}
        cancel={cancelL}
      />
    </div>
  );
};

export default Signin;
