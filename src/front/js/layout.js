import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import PreEnterPage from './pages/PreEnterPage.jsx'; // Update the path
import Test from './pages/Test.jsx'; // Update the path


import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login.js";
import { Single } from "./pages/single";
import Enter from "./pages/Enter.jsx"; // Import the new page component
import injectContext from "./store/appContext";

//import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div className="d-flex flex-column h-100">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    
                    <Routes>
                    
                    <Route element={<PreEnterPage/>} path="/" /> {/* Add this route */}
                    <Route element={<Enter />} path="/nextPage" /> {/* Add this route */}
                    <Route element={<Login />} path="/login" /> {/* Add this route */}
                    <Route element={<h1>Not found!</h1>} />

                    
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
