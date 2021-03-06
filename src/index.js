import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {CssBaseline} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {ApolloProvider} from "@apollo/client";
import client from "./graphql/client";


function Home() {
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: 'dark'
                },
            }),
        [],
    );
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App/>
        </ThemeProvider>
    );
}

ReactDOM.render(
    <ApolloProvider client={client}>
            <Home/>
    </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
