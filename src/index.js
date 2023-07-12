import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
// import 'bootstrap/dist/js/bootstrap.js';
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/Context";
import "./styles.css";
import $ from "jquery";
import jQuery from "jquery";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import ImageResize from "quill-image-resize-module-react";
import ReactQuill, { Quill } from "react-quill";
const Font = ReactQuill.Quill.import("formats/font"); // <<<< ReactQuill exports it
Font.whitelist = ["mirza", "roboto"]; // allow ONLY these fonts and the default
ReactQuill.Quill.register(Font, true);

Quill.register("modules/imageResize", ImageResize);

global.jQuery = require("jquery");
// require('bootstrap');
toast.configure({
    position: toast.POSITION.BOTTOM_RIGHT,
});

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById("root")
);
