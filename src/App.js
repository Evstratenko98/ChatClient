import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import Layout from "./components/layout";
import "antd/dist/antd.css";
import "./assets/scss/index.scss";

function App() {
    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    );
}

export default App;
