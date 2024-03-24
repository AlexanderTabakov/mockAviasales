import React from "react";
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "pages/MainLayout";
import Global from "app/global";
import TicketPage from "pages/TicketPage";
import { HashRouter } from "react-router-dom";

const root = (

    <HashRouter>
        <Global/>


        <Routes>

            <Route path='/' element={<MainLayout/>} />
            <Route path='/ticket/:id'  element={<TicketPage/>} />

        </Routes>

    </HashRouter>
)

ReactDOM.render(
    root,
    document.getElementById('root')
);
