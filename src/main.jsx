import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import {Router, browserHistory} from "react-router";
import {routes} from "./routes.jsx";
//import moment from "moment";
//import "moment/locale/uk";
//import momentLocalizer from "react-widgets/lib/localizers/moment";
import "./common-assets/styles/normalize.css";
import "font-awesome/css/font-awesome.min.css";
import "video.js/dist/video-js.min.css";

import "./common-assets/styles/main.css";

//require.context("./common-assets/", true, /.*/);  //перетащити всі common-assets у папку з білдом

//налаштовуємо локалізацію у react-widgets
//moment.locale('uk');
//momentLocalizer(moment);

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('mount-point')
);
