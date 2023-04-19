import _Navbar from "./Navbar";
import Footer from "./Footer"
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <_Navbar />
            <div className="outlet">
                <Outlet />
            </div>
            
            <Footer />
        </>
    )
}

export default Layout;