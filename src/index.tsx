import React from "react";
import {App} from "app/App";
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import MainLayout from "pages/MainLayout";

const root = (
    <BrowserRouter>
        <MainLayout></MainLayout>
    </BrowserRouter>
)

ReactDOM.render(
    root,
    document.getElementById('root')
);
