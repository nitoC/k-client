
import { Button, TextField, Typography } from "@material-ui/core";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Link from "next/link";
import { Postreferrals, register } from "../../apis/api";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress, Paper } from "@material-ui/core";
import { useState, useEffect, useCallback } from "react";

const Referral = () => {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const router = useRouter();

  console.log("hey", referrer)
  const { referrer } = router.query

  const [referrerId, setreferrerId] = useState("");
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const handleName = (event) => {
    setUser({
      name: event.target.value,
      username: user.username,
      email: user.email,
      password: user.password,
    });
  };
  const handleUsername = (event) => {
    setUser({
      name: user.name,
      username: event.target.value,
      email: user.email,
      password: user.password,
    });
  };
  const handleEmail = (event) => {
    setUser({
      name: user.name,
      username: user.username,
      email: event.target.value,
      password: user.password,
    });
  };
  const handlePassword = (event) => {
    setUser({
      name: user.name,
      username: user.username,
      email: user.email,
      password: event.target.value,
    });
  };





  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    try {
      const status = await register(user);
      console.log(status.data);
      console.log(referrerId, "in submit");
      const refstat = await Postreferrals({ referringUserId: referrerId, referredUserId: status.data.payload._id })
      console.log(refstat.data)
      if (status.data.registered === true && refstat.data.payload) {
        toast.success('Signup successful')
        setLoader(false)
        router.push("/Signin");

      } else {
        toast.warn(status.data.message)
        setLoader(false);
      }
    } catch (error) {
      if (error) {
        toast.error('oops! something went wrong')
        setLoader(false)
        console.log(error);
      }
    }
  };

  const handleReferer = useCallback(
    () => {
      if (!router.isReady) return
      setreferrerId(router.query.referrer)
    }
    , [router.query.referrer, router.isReady])
  useEffect(() => {
    handleReferer()
  }, [handleReferer])
  return (
    <div className="form-container">
      <div className="logo">
        <Link href="/">
          <a>
            <h1>
              K<span>Inv</span>
            </h1>
          </a>
        </Link>
      </div>
      <form action="Signin" onSubmit={handleSubmit} className="form-cover">
        <ToastContainer />
        <Paper className="form-space" elevation={2}>
          <ThemeProvider theme={theme}>
            <Typography
              style={{ color: "orange", textAlign: "center" }}
              variant="h4"
            >
              Create account
            </Typography>
          </ThemeProvider>
          <div className="row-1">
            <TextField
              type="text"
              onChange={handleName}
              required
              label="Name"
              margin="dense"
              variant="filled"
            />
            <TextField
              type="text"
              onChange={handleUsername}
              required
              label="username"
              variant="filled"
              margin="dense"
            />
          </div>
          <div className="row-2">
            <TextField
              type="text"
              onChange={handleEmail}
              required
              margin="dense"
              label="Email"
              fullWidth
              variant="filled"
            />
          </div>
          <div className="row-3">
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
          <div className="row-4">
            <Link href="/Signin">have an account?Sign in</Link>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              style={{ display: "block", width: "100%" }}
              disabled={
                user.name == "" ||
                user.password == "" ||
                user.username == "" ||
                user.email == ""
              }
              size="large"
            >
              Signup
              {loader && (
                <CircularProgress
                  style={{ color: "white", width: "15px", height: "15px" }}
                />
              )}
            </Button>
          </div>
        </Paper>
      </form>
    </div>
  );
};

export default Referral;


