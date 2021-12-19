import '../styles/globals.css'
import '../styles/Home.scss'
import '../styles/signin.scss'
import '../styles/signup.scss'
import '../styles/dashboard.scss'
import '../styles/services.scss'

import App from 'next/app'
import {Provider} from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import withRedux, { createWrapper } from 'next-redux-wrapper';
import persist from '../redux/Store';
import { PersistGate } from 'redux-persist/integration/react'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //console.log(appProps);

        return {
            appProps: appProps
        };
    }
    componentDidMount(){

        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
    };
    
    render() {
        const { Component, appProps } = this.props;
        return (
            <Provider store={persist.Store}>
                <PersistGate loading={null} persistor={persist.persistor}>
                <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...appProps} />
                </ThemeProvider>
                </PersistGate>
            </Provider>
        );
    }
  }
    const makeStore = () => persist.Store;
const wrapper=createWrapper(makeStore)
export default wrapper.withRedux(MyApp);