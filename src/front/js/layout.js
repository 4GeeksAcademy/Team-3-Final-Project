import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import Test from './pages/Test.jsx'; // Update the path


import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import Enter from "./pages/Enter.jsx"; // Import the new page component
import injectContext from "./store/appContext";
import AuthForm from "./pages/SLpage.jsx"; // Import the new page component


//import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import LandingPage from "./pages/LandingPage.jsx";
import TopArtists from "./pages/TopArtists.jsx";
import TopAlbums from "./pages/TopAlbums.jsx";
import ArtPage from "./pages/ArtPage.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    
                    <Routes>
                    <Route element={<AuthForm />} path="/" /> {/* Add this route */}
                    <Route element={<LandingPage />} path="/LandingPage" /> {/* Add this route */}
                    <Route element={<TopArtists />} path="/TopArtists" /> {/* Add this route */}
                    <Route element={<TopAlbums />} path="/TopAlbums" /> {/* Add this route */}
                    <Route element={<ArtPage />} path="/ArtPage" /> {/* Add this route */}
                    <Route element={<h1>Not found!</h1>} />

                    
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
