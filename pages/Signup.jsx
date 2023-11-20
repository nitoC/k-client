import { CircularProgress, Paper } from "@material-ui/core";
import { Button, TextField, Typography } from "@material-ui/core";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Link from "next/link";
import { register } from "../apis/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const router = useRouter();
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
      if (status.data.registered === true) {
        toast.success('Signup successful')
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

  return (
    <div className="form-container">
      <div className="logo">

        <h1>
          <Link href="/">K</Link><span><Link href="/">Inv</Link></span>
        </h1>

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

export default Signup;

